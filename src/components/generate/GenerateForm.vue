<script setup>
  import { ref, computed } from 'vue'
  import api from '@/services/api' // Add this import
  import MunicipalitySelect from './form/MunicipalitySelect.vue'
  import CitySelect from './form/CitySelect.vue'
  import StreetAutocomplete from './form/StreetAutocomplete.vue'
  import DateRangeSelection from './form/DateRangeSelection.vue'
  import ReminderSettings from './form/ReminderSettings.vue'
  import AddressSelection from './AddressSelection.vue'
  import ContractSelection from './form/ContractSelection.vue'
  import EventPreview from './EventPreview.vue'
  import AlertDialog from '../common/AlertDialog.vue'
  import {
    generateFeedUrl,
    generateCalendarLinks,
    downloadCalendarFromFeed
  } from '@/services/calendarService'
  import StepIndicator from './form/StepIndicator.vue'
  import { showModal } from '@/utils/modalHelper' // Import showModal
  import { useRouter } from 'vue-router' // Import useRouter
  import { generatePDF } from '@/utils/pdfTemplate'
  const collectionsData = ref([])
  const calendarUrl = ref('')

  const alertDialogTitle = ref('') // New reactive variable for alert dialog title
  const alertDialogMessage = ref('') // New reactive variable for alert dialog message

  const router = useRouter() // Initialize router

  const formData = ref({
    municipality: '',
    subDistrict: '',
    city: '',
    street: '',
    houseNumber: '',
    startDate: '',
    endDate: '',
    reminderEnabled: false,
    reminderTime: '1',
    notificationHour: '18'
  })

  const foundAddresses = ref([])
  const selectedAddressContracts = ref([])
  const selectedWasteObjectIds = ref([])
  const hasSearchResults = ref(false)
  const isSearching = ref(false)
  const currentStep = ref(1)
  const previewEvents = ref([])

  const isFormValid = computed(() => {
    if (currentStep.value === STEP_ADDRESS_INPUT) {
      return Boolean(
        formData.value.municipality && formData.value.street && formData.value.houseNumber
      )
    }
    if (currentStep.value === STEP_ADDRESS_SELECTION) {
      return Boolean(foundAddresses.value.length > 0)
    }
    if (currentStep.value === STEP_CONTRACT_SELECTION) {
      return selectedWasteObjectIds.value.length > 0
    }
    if (currentStep.value === STEP_SETTINGS) {
      return Boolean(formData.value.startDate && formData.value.endDate)
    }
    return false
  })

  const calendarLinks = computed(() => {
    return calendarUrl.value ? generateCalendarLinks(calendarUrl.value) : null
  })

  const stepIndicatorStep = computed(() => {
    if (currentStep.value <= STEP_ADDRESS_SELECTION) return 1
    if (currentStep.value === STEP_CONTRACT_SELECTION) return 2
    if (currentStep.value === STEP_SETTINGS) return 3
    return 4
  })

  const STEP_ADDRESS_INPUT = 1
  const STEP_ADDRESS_SELECTION = 2
  const STEP_CONTRACT_SELECTION = 3
  const STEP_SETTINGS = 4
  const STEP_GENERATION = 5

  /**
   * Returns true if the user must choose containers: i.e. at least one waste type
   * has multiple contracts with different schedules (e.g. general waste on different intervals).
   * If all contracts of the same type share the same schedule, selection is not needed.
   */
  function needsContractSelection(contracts) {
    const byType = new Map()
    for (const c of contracts) {
      const type = c.descriptionFmt || c.description || ''
      if (!byType.has(type)) byType.set(type, [])
      byType.get(type).push(c)
    }
    const scheduleKey = (c) =>
      JSON.stringify((c.scheduleIds || []).slice().sort((a, b) => a - b))
    for (const [, list] of byType) {
      if (list.length <= 1) continue
      const firstKey = scheduleKey(list[0])
      if (list.some((c) => scheduleKey(c) !== firstKey)) return true
    }
    return false
  }

  function prevStep() {
    if (currentStep.value > STEP_ADDRESS_INPUT) {
      currentStep.value--
    }
  }

  // New common function to open print window and render calendar
  const openPrintWindow = () => {
    try {
      // Prepare events data
      const eventsData = collectionsData.value.map(collection => ({
        date: collection.dateFmt || collection.date,
        type: collection.descriptionFmt || collection.type,
        weekDay: collection.weekDay,
        containerFormats: collection.containerFormats,
        contractNumbers: collection.contractNumbers
      }))

      // Log events data for debugging
      console.log('Events data being passed to pdfmake:', eventsData)

      // Generate PDF
      generatePDF(eventsData, formData.value)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Klaida generuojant PDF. Bandykite dar kartą.')
    }
  }

  // New function to handle printing (triggers print dialog)
  function printCalendar() {
    openPrintWindow()
  }

  // New function to reset form and navigate home
  function resetFormAndNavigateHome() {
    formData.value = {
      municipality: '',
      subDistrict: '',
      city: '',
      street: '',
      houseNumber: '',
      startDate: '',
      endDate: '',
      reminderEnabled: false,
      reminderTime: '1',
      notificationHour: '18'
    }
    foundAddresses.value = []
    selectedAddressContracts.value = []
    selectedWasteObjectIds.value = []
    hasSearchResults.value = false
    isSearching.value = false
    currentStep.value = STEP_ADDRESS_INPUT
    previewEvents.value = []
    calendarUrl.value = ''
    router.push('/')
  }

  async function handleDownloadIcs() {
    try {
      await downloadCalendarFromFeed(calendarUrl.value, 'atlieku-grafikas.ics')
      showAlertDialog('Sėkmingai!', 'Kalendoriaus failas atsisiųstas!')
    } catch (error) {
      console.error('Error downloading calendar from feed:', error)
      showAlertDialog('Klaida', 'Nepavyko atsisiųsti kalendoriaus. Prašome bandyti vėliau.')
    }
  }

  async function handleSearch() {
    if (!formData.value.municipality || !formData.value.street || !formData.value.houseNumber) {
return
}

    try {
      isSearching.value = true
      const response = await api.getTrashBins({
        street: formData.value.street,
        municipality: formData.value.municipality,
        houseNumber: formData.value.houseNumber,
        subDistrict: formData.value.subDistrict,
        city: formData.value.city
      })

      const addresses = response.data || []

      // Group addresses by unique street, houseNumber, municipality, subDistrict, city
      const uniqueAddressesMap = new Map()
      addresses.forEach(addr => {
        const addressKey = `${addr.street}-${addr.house}-${addr.region}-${addr.subDistrict || ''}-${addr.city || ''}`
        if (!uniqueAddressesMap.has(addressKey)) {
          uniqueAddressesMap.set(addressKey, {
            street: addr.street,
            houseNumber: addr.house,
            municipality: addr.region,
            subDistrict: addr.subDistrict,
            city: addr.city,
            relatedCollections: []
          })
        }
        uniqueAddressesMap.get(addressKey).relatedCollections.push(addr)
      })

      const uniqueAddresses = Array.from(uniqueAddressesMap.values())

      if (uniqueAddresses.length > 0) {
        foundAddresses.value = uniqueAddresses.map(addr => ({
          id: `${addr.street}-${addr.houseNumber}-${addr.municipality}-${addr.subDistrict || ''}-${addr.city || ''}`,
          street: addr.street,
          houseNumber: addr.houseNumber,
          municipality: addr.municipality,
          subDistrict: addr.subDistrict,
          city: addr.city,
          relatedCollections: addr.relatedCollections
        }))
        currentStep.value = STEP_ADDRESS_SELECTION
      } else {
        showAlertDialog(
          'Adresas Nerastas',
          'Nerasta atliekų išvežimo grafikų šiuo adresu. Prašome patikrinti adresą ir bandyti dar kartą.'
        )
      }
    } catch (error) {
      console.error('Error searching addresses:', error)
      showAlertDialog('Klaida', 'Įvyko klaida tikrinant adresą. Prašome bandyti vėliau.')
    } finally {
      isSearching.value = false
    }
  }

  async function handleAddressSelected(selectedAddress) {
    formData.value.street = selectedAddress.street
    formData.value.houseNumber = selectedAddress.houseNumber
    formData.value.municipality = selectedAddress.municipality
    formData.value.subDistrict = selectedAddress.subDistrict
    formData.value.city = selectedAddress.city

    const contracts = selectedAddress.relatedCollections || []
    selectedAddressContracts.value = contracts
    const allIds = contracts.map((c) => c.wasteObjectId).filter(Boolean)
    selectedWasteObjectIds.value = [...allIds]

    if (needsContractSelection(contracts)) {
      currentStep.value = STEP_CONTRACT_SELECTION
    } else {
      await handleContractsConfirmed()
    }
  }

  async function handleContractsConfirmed() {
    const contracts = selectedAddressContracts.value
    const idsSet = new Set(selectedWasteObjectIds.value)
    const toFetch = contracts.filter((c) => c.wasteObjectId && idsSet.has(c.wasteObjectId))

    const processedCollections = []
    for (const contract of toFetch) {
      try {
        const scheduleDates = await api.getSchedule(contract.wasteObjectId)
        for (const date of scheduleDates) {
          processedCollections.push({
            date: date.dateFmt || date.date,
            type: contract.descriptionFmt || contract.type,
            descriptionFmt: contract.descriptionFmt || contract.type,
            weekDay: date.weekDay,
            containerFormats: contract.containerFmt,
            contractNumbers: contract.inventoryNumber
          })
        }
      } catch (scheduleError) {
        console.error(
          `Error fetching schedule for wasteObjectId ${contract.wasteObjectId}:`,
          scheduleError
        )
      }
    }

    collectionsData.value = processedCollections
    previewEvents.value = processedCollections
    hasSearchResults.value = processedCollections.length > 0

    if (hasSearchResults.value) {
      currentStep.value = STEP_SETTINGS
    } else {
      showAlertDialog(
        'Nepasirinkta',
        'Pasirinkite bent vieną konteinerį / grafiką.'
      )
    }
  }

  async function handleSubmit() {
    if (!isFormValid.value) return
    try {
      currentStep.value = STEP_GENERATION
      calendarUrl.value = generateFeedUrl({
        ...formData.value,
        collections: collectionsData.value,
        selectedWasteObjectIds: selectedWasteObjectIds.value
      })
      // Do not emit: keep success step inside this form to match live (trash.teletigras.lt)
    } catch (error) {
      console.error('GenerateForm: Error generating feed URL:', error)
      showAlertDialog('Klaida', 'Įvyko klaida. Prašome bandyti vėliau.')
    }
  }

  // function handleSearchComplete(found) {
  //   hasSearchResults.value = found
  // }

  function copyCalendarUrl() {
    navigator.clipboard
      .writeText(calendarUrl.value)
      .then(() => showAlertDialog('Nukopijuota!', 'Nuoroda nukopijuota į iškarpinę!'))
      .catch(() => showAlertDialog('Klaida', 'Nepavyko nukopijuoti nuorodos.'))
  }

  // Generic function to show the alert dialog
  function showAlertDialog(title, message) {
    alertDialogTitle.value = title
    alertDialogMessage.value = message
    showModal('alertDialog')
  }

  // const showEventsList = ref(false)

  // const showEventsModal = () => {
  //   showEventsList.value = true
  // }

  // const closeEventsModal = () => {
  //   showEventsList.value = false
  // }

//   const formatDate = dateString => {
//     if (!dateString) {
// return ''
// // }

//     // Handle both date formats: "2025-04-22" and "2025-04-22T00:00:00"
//     const date = new Date(dateString)

//     // Check if date is valid
//     if (isNaN(date.getTime())) {
//       console.error('Invalid date:', dateString)
//       return ''
//     }

//     return date.toLocaleDateString('lt-LT', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       weekday: 'long'
//     })
//   }
</script>

<template>
  <div class="generate-form">
    <!-- Main Form Content -->
    <form @submit.prevent="handleSubmit" class="form pt-0">
      <StepIndicator :current-step="stepIndicatorStep" class="mb-2" />

      <!-- Step 1: Address -->
      <div v-show="currentStep === STEP_ADDRESS_INPUT">
        <MunicipalitySelect v-model="formData.municipality" />
        <!-- <SubDistrictSelect v-model="formData.subDistrict" :municipality="formData.municipality" /> -->
        <CitySelect
          v-model="formData.city"
          :municipality="formData.municipality"
          :subDistrict="formData.subDistrict"
        />
        <StreetAutocomplete
          v-model:street="formData.street"
          v-model:houseNumber="formData.houseNumber"
          :municipality="formData.municipality"
          :subDistrict="formData.subDistrict"
          :city="formData.city"
        />
        <div class="d-grid mb-2">
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSearch"
            :disabled="
              !formData.municipality || !formData.street || !formData.houseNumber || isSearching
            "
          >
            <span
              v-if="isSearching"
              class="spinner-border spinner-border-sm me-2"
              role="status"
            />
            <i v-else class="bi bi-search me-2"/>
            {{ isSearching ? 'Tikrinama...' : 'Tęsti' }}
          </button>
        </div>
      </div>

      <!-- Step 2: Address Selection -->
      <div v-show="currentStep === STEP_ADDRESS_SELECTION">
        <AddressSelection :addresses="foundAddresses" @addressSelected="handleAddressSelected" />
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary" @click="prevStep">
            <i class="bi bi-arrow-left me-2"/>Atgal
          </button>
        </div>
      </div>

      <!-- Step 3: Container / schedule selection -->
      <div v-show="currentStep === STEP_CONTRACT_SELECTION">
        <ContractSelection
          :contracts="selectedAddressContracts"
          v-model="selectedWasteObjectIds"
        />
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary" @click="prevStep">
            <i class="bi bi-arrow-left me-2"/>Atgal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="selectedWasteObjectIds.length === 0"
            @click="handleContractsConfirmed"
          >
            Tęsti
          </button>
        </div>
      </div>

      <!-- Step 4: Settings -->
      <div v-show="currentStep === STEP_SETTINGS">
        <EventPreview :events="previewEvents" />

        <DateRangeSelection
          v-model:startDate="formData.startDate"
          v-model:endDate="formData.endDate"
        />
        <ReminderSettings
          v-model:enabled="formData.reminderEnabled"
          v-model:time="formData.reminderTime"
          v-model:notificationHour="formData.notificationHour"
        />

        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary" @click="prevStep">
            <i class="bi bi-arrow-left me-2"/>Atgal
          </button>
          <button type="submit" class="btn btn-primary flex-grow-1" :disabled="!isFormValid">
            <i class="bi bi-calendar-check me-2"/>Generuoti kalendorių
          </button>
        </div>
      </div>

      <!-- Step 4: Generation -->
      <div v-show="currentStep === STEP_GENERATION">
        <div class="text-center mb-4">
          <i class="bi bi-calendar2-check display-1 text-success"/>
          <h3 class="mt-3">Kalendorius sugeneruotas!</h3>
        </div>

        <div class="card mb-4">
          <div class="card-header">
            <h4 class="h6 mb-0">Kalendoriaus pridėjimo būdai</h4>
          </div>
          <div class="card-body">
            <!-- Direct Calendar Apps -->
            <div class="mb-4">
              <button 
                class="btn btn-link text-decoration-none p-0 mb-2 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#calendarApps"
                aria-expanded="true"
              >
                <i class="bi bi-chevron-down me-2"/>Pridėti tiesiai į kalendoriaus programą
              </button>
              <div class="collapse show" id="calendarApps">
                <div class="d-grid gap-2">
                  <a
                    :href="calendarLinks?.google"
                    target="_blank"
                    class="btn btn-lg btn-outline-primary"
                  >
                    <i class="bi bi-google me-2"/>Pridėti į Google Calendar
                  </a>
                  <a
                    :href="calendarLinks?.outlook"
                    target="_blank"
                    class="btn btn-lg btn-outline-primary"
                  >
                    <i class="bi bi-microsoft me-2"/>Pridėti į Outlook
                  </a>
                  <a :href="calendarLinks?.apple" class="btn btn-lg btn-outline-primary">
                    <i class="bi bi-apple me-2"/>Pridėti į Apple Calendar
                  </a>
                </div>
              </div>
            </div>

            <!-- PDF Export -->
            <div class="mb-4">
              <button 
                class="btn btn-link text-decoration-none p-0 mb-2 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#pdfExport"
                aria-expanded="true"
              >
                <i class="bi bi-chevron-down me-2"/>PDF formatas
              </button>
              <div class="collapse show" id="pdfExport">
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-lg btn-outline-primary"
                    @click="printCalendar"
                    :disabled="!collectionsData || collectionsData.length === 0"
                  >
                    <i class="bi bi-printer me-2"/>Atsisiųsti PDF
                  </button>
                </div>
              </div>
            </div>

             <!-- Manual Import Options -->
             <div class="mb-4">
              <button 
                class="btn btn-link text-decoration-none p-0 mb-2 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#manualImport"
                aria-expanded="false"
              >
                <i class="bi bi-chevron-down me-2"/>Rankinis importavimas
              </button>
              <div class="collapse" id="manualImport">
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-lg btn-outline-primary"
                    @click="handleDownloadIcs"
                  >
                    <i class="bi bi-download me-2"/>Atsisiųsti ICS failą
                  </button>
                  <button
                    class="btn btn-lg btn-outline-primary"
                    @click="copyCalendarUrl"
                  >
                    <i class="bi bi-link-45deg me-2"/>Kopijuoti kalendoriaus nuorodą
                  </button>
                </div>
              </div>
            </div>

            <!-- Reminder Instructions -->
            <div class="alert alert-info mt-4">
              <button 
                class="btn btn-link text-decoration-none p-0 mb-2 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#reminderInstructions"
                aria-expanded="true"
              >
                <i class="bi bi-chevron-down me-2"/>Kaip įjungti priminimus
              </button>
              <div class="collapse show" id="reminderInstructions">
                <p class="mb-2">
                  Galite nustatyti papildomus priminimus savo kalendoriaus programoje:
                </p>
                <div class="ms-3">
                  <strong>Google Calendar - reikia nusistatyti rankiniu būdu:</strong>
                  <ol class="mb-2 small">
                    <li>Eikite į kalendoriaus nustatymus (3 taškai prie kalendoriaus pavadinimo)</li>
                    <li>Pasirinkite "Notifications"</li>
                    <li>Nustatykite numatytuosius priminimus visiems įvykiams</li>
                  </ol>
                  <strong>Outlook:</strong>
                  <ol class="mb-2 small">
                    <li>Atidarykite kalendoriaus nustatymus</li>
                    <li>Pasirinkite "Calendar options"</li>
                    <li>Nustatykite "Default reminders"</li>
                  </ol>
                  <strong>Apple Calendar:</strong>
                  <ol class="mb-2 small">
                    <li>Eikite į Calendar nustatymus</li>
                    <li>Pasirinkite "Alerts"</li>
                    <li>Nustatykite numatytuosius priminimus</li>
                  </ol>
                </div>
              </div>
            </div>

           
          </div>
        </div>

        <div class="text-center">
          <button type="button" class="btn btn-outline-primary" @click="resetFormAndNavigateHome">
            <i class="bi bi-arrow-left me-2"/>Generuoti kitą kalendorių
          </button>
        </div>
      </div>
    </form>

    <!-- Alert Dialog Component -->
    <AlertDialog :title="alertDialogTitle" :message="alertDialogMessage" />
  </div>
</template>
