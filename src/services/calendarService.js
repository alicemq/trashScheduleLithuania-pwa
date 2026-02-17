import ICalGenerator from './icalGenerator'
import api from './api'

export async function generateCalendar(formData) {
  try {
    const contracts = formData.collections
    if (!Array.isArray(contracts)) {
      throw new Error('Invalid collections data')
    }

    const startDate = new Date(formData.startDate)
    const endDate = new Date(formData.endDate)

    // Process each collection separately
    const allCollections = []
    for (const contract of contracts) {
      // Each contract has its own wasteObjectId for schedules
      if (!contract.wasteObjectId) {
continue
}

      try {
        const dates = await api.getSchedule(contract.wasteObjectId)

        // Add each date as a separate collection event
        for (const date of dates) {
          const collectionDate = new Date(date.date)
          if (collectionDate >= startDate && collectionDate <= endDate) {
            allCollections.push({
              date: date.dateFmt,
              type: contract.descriptionFmt,
              weekDay: date.weekDay,
              containerFmt: contract.containerFmt,
              contractNumber: contract.inventoryNumber
            })
          }
        }
      } catch (error) {
        console.error(
          `Failed to fetch schedule for wasteObjectId ${contract.wasteObjectId}:`,
          error
        )
      }
    }

    // Group collections by date and type
    const groupedCollectionsMap = new Map()
    allCollections.forEach(collection => {
      const key = `${collection.date}-${collection.type}`
      if (!groupedCollectionsMap.has(key)) {
        groupedCollectionsMap.set(key, {
          date: collection.date,
          type: collection.type,
          weekDay: collection.weekDay,
          containerFormats: new Set(),
          contractNumbers: new Set()
        })
      }
      groupedCollectionsMap.get(key).containerFormats.add(collection.containerFmt)
      if (collection.contractNumber) {
        groupedCollectionsMap.get(key).contractNumbers.add(collection.contractNumber)
      }
    })

    const groupedCollections = Array.from(groupedCollectionsMap.values()).map(group => ({
      ...group,
      containerFormats: Array.from(group.containerFormats).join(', '),
      contractNumbers: Array.from(group.contractNumbers).join(', ')
    }))

    // Sort all collections by date
    groupedCollections.sort((a, b) => new Date(a.date) - new Date(b.date))

    const reminderSettings = formData.reminderEnabled
      ? {
          enabled: true,
          time: formData.reminderTime,
          hour: formData.notificationHour
        }
      : null

    return ICalGenerator.generateCalendar(groupedCollections, reminderSettings, formData)
  } catch (error) {
    console.error('Failed to generate calendar:', error)
    throw new Error('Nepavyko sugeneruoti kalendoriaus. Prašome bandyti vėliau.')
  }
}

export function downloadCalendar(calendarData) {
  const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.setAttribute('download', 'atliekos.ics')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Download calendar file from feed URL (single source: feed.php).
 * Use this instead of client-generated ICS to avoid duplicating iCal logic.
 */
export async function downloadCalendarFromFeed(feedUrl, filename = 'atliekos.ics') {
  const response = await fetch(feedUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch calendar: ${response.status} ${response.statusText}`)
  }
  const calendarData = await response.text()
  const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(link.href)
}

const CHAR_TO_CODE = {
  ą: '01',
  č: '02',
  ę: '03',
  ė: '04',
  į: '05',
  š: '06',
  ų: '07',
  ū: '08',
  ž: '09',
  Ą: '11',
  Č: '12',
  Ę: '13',
  Ė: '14',
  Į: '15',
  Š: '16',
  Ų: '17',
  Ū: '18',
  Ž: '19'
}

function encodeToDigits(text) {
  return text.replace(/[ąčęėįšųūžĄČĘĖĮŠŲŪŽ]/g, char => `__${CHAR_TO_CODE[char]}__`)
}

export function generateFeedUrl(formData) {
  // Use shorter parameter names and transliterate values
  const params = new URLSearchParams({
    r: encodeToDigits(formData.municipality), // region
    sd: formData.subDistrict ? encodeToDigits(formData.subDistrict) : '', // subDistrict
    c: formData.city ? encodeToDigits(formData.city) : '', // city
    s: encodeToDigits(formData.street), // street
    n: formData.houseNumber, // number
    a: formData.reminderEnabled ? '1' : '0', // alert
    t: formData.reminderTime, // time
    h: formData.notificationHour, // hour
    _t: Date.now() // Fake parameter to trick Google and other providers for new calendar
  })

  // Restrict feed to selected containers (wasteObjectIds); omit = all contracts for address
  const ids = formData.selectedWasteObjectIds
  if (Array.isArray(ids) && ids.length > 0) {
    params.set('w', ids.join(','))
  }

  return `https://trash.teletigras.lt/calendar.ics?${params.toString()}`
}

export function generateCalendarLinks(feedUrl) {
  const calendarName = 'Atliekų išvežimas'
  const webCalUrl = feedUrl.replace('https://', 'webcal://')

  return {
    google: `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(webCalUrl)}`,
    outlook: `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(feedUrl)}&name=${encodeURIComponent(calendarName)}`,
    apple: `webcal://${feedUrl.replace('https://', '')}`
  }
}
