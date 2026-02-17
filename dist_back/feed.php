<?php

// Character code mapping
$CODE_TO_CHAR = [
    '01' => 'ą', '02' => 'č', '03' => 'ę', '04' => 'ė', '05' => 'į',
    '06' => 'š', '07' => 'ų', '08' => 'ū', '09' => 'ž',
    '11' => 'Ą', '12' => 'Č', '13' => 'Ę', '14' => 'Ė', '15' => 'Į',
    '16' => 'Š', '17' => 'Ų', '18' => 'Ū', '19' => 'Ž'
];

function decodeFromDigits($text) {
    global $CODE_TO_CHAR;
    return preg_replace_callback('/__(\d{2})__/', function($matches) use ($CODE_TO_CHAR) {
        return $CODE_TO_CHAR[$matches[1]] ?? $matches[0];
    }, $text);
}

// Get parameters from request with new shorter names - define them first!
$municipality = decodeFromDigits($_GET['r'] ?? '');  // region
$subDistrict = decodeFromDigits($_GET['sd'] ?? ''); // subDistrict
$city = decodeFromDigits($_GET['c'] ?? ''); // city
$street = decodeFromDigits($_GET['s'] ?? '');  // street
$houseNumber = $_GET['n'] ?? '';  // number
$reminderEnabled = $_GET['a'] ?? '0';  // alert
$reminderTime = $_GET['t'] ?? '1';  // time
$reminderHour = $_GET['h'] ?? '18';  // hour

header('Content-Type: text/calendar; charset=utf-8');
header('Content-Disposition: inline; filename=calendar.ics');

// Start CALENDAR output immediately after headers
echo "BEGIN:VCALENDAR\r\n";
echo "VERSION:2.0\r\n";
echo "PRODID:-//Atliekų Išvežimo Grafikai//LT\r\n";
echo "CALSCALE:GREGORIAN\r\n";
echo "X-WR-CALNAME:Atliekų Išvežimo Grafikas\r\n";
echo "X-WR-TIMEZONE:Europe/Vilnius\r\n";

// Debugging: Log decoded input parameters here, within the VCALENDAR object
echo "X-COMMENT: Decoded Municipality: " . $municipality . "\r\n";
echo "X-COMMENT: Decoded SubDistrict: " . $subDistrict . "\r\n";
echo "X-COMMENT: Decoded City: " . $city . "\r\n";
echo "X-COMMENT: Decoded Street: " . $street . "\r\n";
echo "X-COMMENT: Decoded HouseNumber: " . $houseNumber . "\r\n";

// API endpoints
$API_BASE_URL = 'https://grafikai.svara.lt/api';

// Get contracts
$contracts_url = $API_BASE_URL . '/contracts?' . http_build_query([
    'pageSize' => '100',
    'pageIndex' => '0',
    'address' => $street,
    'region' => $municipality,
    'houseNumber' => $houseNumber,
    'subDistrict' => $subDistrict,
    'city' => $city,
    'matchHouseNumber' => 'true'
]);

$contracts_response = @file_get_contents($contracts_url); // Use @ to suppress warnings
$contracts = json_decode($contracts_response, true);

// Debugging: Log the API URL and response here, after fetching contracts
echo "X-COMMENT: Contracts API URL: " . $contracts_url . "\r\n";
echo "X-COMMENT: Contracts API Response: " . str_replace(["\r", "\n"], ["\\r", "\\n"], $contracts_response) . "\r\n";

$allCollections = [];
if ($contracts && isset($contracts['data'])) { // Only proceed if contracts data is valid
    foreach ($contracts['data'] as $contract) {
        if (!isset($contract['wasteObjectId'])) continue;
        
        $schedule_url = $API_BASE_URL . '/schedule?wasteObjectId=' . $contract['wasteObjectId'];
        $schedule_response = @file_get_contents($schedule_url); // Use @ to suppress warnings
        $dates = json_decode($schedule_response, true);
        
        // Debugging: Log the Schedule API URL and response
        echo "X-COMMENT: Schedule API URL for wasteObjectId {$contract['wasteObjectId']}: " . $schedule_url . "\r\n";
        echo "X-COMMENT: Schedule API Response for wasteObjectId {$contract['wasteObjectId']}: " . str_replace(["\r", "\n"], ["\\r", "\\n"], $schedule_response) . "\r\n";

        if (!$dates) continue;
        
        foreach ($dates as $date) {
            $allCollections[] = [
                'dateFmt' => $date['dateFmt'],
                'descriptionFmt' => $contract['descriptionFmt'],
                'containerFmt' => $contract['containerFmt'] ?? null,
                'inventoryNumber' => $contract['inventoryNumber'] ?? null
            ];
        }
    }
}

// Group collections by date and description
$groupedCollections = [];
foreach ($allCollections as $collection) {
    $key = $collection['dateFmt'] . '-' . $collection['descriptionFmt'];
    if (!isset($groupedCollections[$key])) {
        $groupedCollections[$key] = [
            'dateFmt' => $collection['dateFmt'],
            'descriptionFmt' => $collection['descriptionFmt'],
            'containerFormats' => [],
            'contractNumbers' => []
        ];
    }
    if ($collection['containerFmt'] && !in_array($collection['containerFmt'], $groupedCollections[$key]['containerFormats'])) {
        $groupedCollections[$key]['containerFormats'][] = $collection['containerFmt'];
    }
    if ($collection['inventoryNumber'] && !in_array($collection['inventoryNumber'], $groupedCollections[$key]['contractNumbers'])) {
        $groupedCollections[$key]['contractNumbers'][] = $collection['inventoryNumber'];
    }
}

// Sort grouped collections by date
usort($groupedCollections, function($a, $b) {
    return strtotime($a['dateFmt']) - strtotime($b['dateFmt']);
});

// Process each grouped collection
foreach ($groupedCollections as $groupedCollection) {
    $uid = uniqid('trash-', true);
    $dateStr = str_replace('-', '', $groupedCollection['dateFmt']);
    
    // Construct event description
    $description = 'Nepamiršk išnešti konteinerio!';
    $addressParts = [];
    if (!empty($street)) {
        $addressParts[] = "{$street} {$houseNumber}";
    }
    if (!empty($city)) {
        $addressParts[] = $city;
    }
    if (!empty($subDistrict)) {
        $addressParts[] = $subDistrict;
    }
    if (!empty($municipality)) {
        $addressParts[] = $municipality;
    }
    if (!empty($addressParts)) {
        $description .= '\\nAdresas: ' . implode(', ', $addressParts);
    }

    if (!empty($groupedCollection['containerFormats'])) {
        $description .= '\\nKonteineris: ' . implode(', ', $groupedCollection['containerFormats']);
    }
    if (!empty($groupedCollection['contractNumbers'])) {
        $description .= '\\nSutarties Nr.: ' . implode(', ', $groupedCollection['contractNumbers']);
    }
    $description .= '\\n\\nSugeneravo: https://trash.teletigras.lt';

    // Calculate reminder time - previous day at specified hour
    $eventDate = new DateTime($groupedCollection['dateFmt']);
    $reminderDate = clone $eventDate;
    $reminderDate->modify("-{$reminderTime} day");
    $reminderDate->setTime($reminderHour, 0, 0);
    
    echo "BEGIN:VEVENT\r\n";
    echo "UID:{$uid}@trash-schedule.lt\r\n";
    echo "DTSTAMP:" . gmdate('Ymd\THis\Z') . "\r\n";
    echo "DTSTART;VALUE=DATE:{$dateStr}\r\n";
    echo "SUMMARY:" . $groupedCollection['descriptionFmt'] . "\r\n";
    echo "DESCRIPTION:" . $description . "\r\n";
    echo "TRANSP:TRANSPARENT\r\n";
    
    if ($reminderEnabled === '1') {
        $hoursBeforeEvent = (24 - $reminderHour) + (($reminderTime - 1) * 24);
        echo "BEGIN:VALARM\r\n";
        echo "ACTION:DISPLAY\r\n";
        echo "DESCRIPTION:Nepamiršk išnešti konteinerio!\r\n";
        echo "TRIGGER:-PT{$hoursBeforeEvent}H\r\n";
        echo "END:VALARM\r\n";
    }
    
    echo "END:VEVENT\r\n";
}

echo "END:VCALENDAR\r\n";
