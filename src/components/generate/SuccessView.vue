<script setup>
  import { showModal } from '@/utils/modalHelper'
  import InstructionsModal from './InstructionsModal.vue'
  import PrintableCalendar from './PrintableCalendar.vue'
  import AlertDialog from '../common/AlertDialog.vue'
  import { downloadCalendarFromFeed } from '@/services/calendarService'
  import { createApp, h, ref } from 'vue'

  const props = defineProps({
    calendarUrl: String,
    collectionsData: Array,
    formData: Object
  })

  const downloadError = ref('')

  async function handleDownloadIcs() {
    try {
      downloadError.value = ''
      await downloadCalendarFromFeed(props.calendarUrl, 'atlieku-grafikas.ics')
      showAlertDialog('Sėkmingai!', 'Kalendoriaus failas atsisiųstas!')
    } catch (error) {
      console.error('Error downloading calendar from feed:', error)
      downloadError.value = 'Nepavyko atsisiųsti. Bandykite vėliau.'
      showAlertDialog('Klaida', 'Nepavyko atsisiųsti kalendoriaus. Prašome bandyti vėliau.')
    }
  }

  const alertDialogTitle = ref('')
  const alertDialogMessage = ref('')

  function showAlertDialog(title, message) {
    alertDialogTitle.value = title
    alertDialogMessage.value = message
    showModal('alertDialog')
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showAlertDialog('Nukopijuota!', 'URL nukopijuotas į iškarpinę!')
      })
      .catch(err => {
        console.error('Nepavyko nukopijuoti teksto:', err)
        showAlertDialog('Klaida', 'Nepavyko nukopijuoti teksto.')
      })
  }

  function showInstructionsModal() {
    showModal('deviceInstructionsModal')
  }

  function printCalendar() {
    // Create a hidden iframe with the print route
    const printFrame = document.createElement('iframe')
    printFrame.style.display = 'none'
    printFrame.src = `${window.location.origin}/print`
    document.body.appendChild(printFrame)

    // Wait for iframe to load
    printFrame.onload = () => {
      const frameDoc = printFrame.contentWindow.document

      // Create a temporary container to render the calendar
      const tempContainer = document.createElement('div')
      const vueApp = createApp({
        render() {
          return h(PrintableCalendar, {
            events: props.collectionsData.map(collection => ({
              date: collection.dateFmt,
              type: collection.descriptionFmt,
              weekDay: collection.weekDay,
              containerFormats: collection.containerFmt || 'Nenurodytas',
              contractNumbers: collection.inventoryNumber
            })),
            address: props.formData
          })
        }
      })
      vueApp.mount(tempContainer)

      // Wait for the calendar to render
      setTimeout(() => {
        frameDoc.body.innerHTML = tempContainer.innerHTML
        frameDoc.head.innerHTML = `
        <title>Atliekų Išvežimo Grafikas</title>
        <style>
          body { font-family: sans-serif; margin: 20px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
          .text-center { text-align: center; }
          .mb-4 { margin-bottom: 1.5rem; }
          .mt-5 { margin-top: 3rem; }
        </style>
      `

        // Wait for content to render, then print
        setTimeout(() => {
          printFrame.contentWindow.focus()
          printFrame.contentWindow.print()
          // Remove the iframe after printing
          setTimeout(() => {
            document.body.removeChild(printFrame)
          }, 1000)
        }, 500)
      }, 100)
    }
  }
</script>

<template>
  <div class="card shadow-sm mb-4">
    <div class="card-header bg-success text-white">
      <h2 class="h5 m-0">
        <i class="bi bi-check-circle me-2"/>Atliekų išvežimo grafikas Lietuvoje sėkmingai
        sugeneruotas
      </h2>
    </div>
    <div class="card-body">
      <div class="alert alert-info">
        <p><strong>Sveikiname!</strong> Jūsų atliekų išvežimo kalendorius paruoštas.</p>
        <p>
          Pasirinkite vieną iš žemiau pateiktų būdų, kad pridėtumėte jį į savo mobilųjį įrenginį ar
          kompiuterį.
        </p>
      </div>

      <div class="d-flex flex-column">
        <div class="mb-4">
          <h5 class="mb-3">1. Atsisiųskite .ics failą</h5>
          <p>Atsisiųskite kalendoriaus failą ir importuokite jį į savo kalendoriaus programą.</p>
          <button type="button" class="btn btn-primary" @click="handleDownloadIcs">
            <i class="bi bi-download me-2"/>Atsisiųsti .ics failą
          </button>
          <p v-if="downloadError" class="text-danger small mt-2">{{ downloadError }}</p>
        </div>

        <div class="mb-4">
          <h5 class="mb-3">2. Naudokite kalendoriaus URL</h5>
          <p>Nukopijuokite URL ir pridėkite jį kaip prenumeruojamą kalendorių savo įrenginyje.</p>
          <div class="input-group mb-3">
            <input 
              type="text" 
              class="form-control" 
              :value="calendarUrl" 
              readonly 
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="copyToClipboard(calendarUrl)"
            >
              <i class="bi bi-clipboard me-1"/>Kopijuoti
            </button>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="mb-3">3. Spausdinti kalendorių</h5>
          <p>Atspausdinkite sugeneruotą atliekų išvežimo grafiką.</p>
          <button class="btn btn-info text-white" @click="printCalendar">
            <i class="bi bi-printer me-2"/>Spausdinti grafiką
          </button>
        </div>

        <div class="mb-4">
          <h5 class="mb-3">Kaip importuoti kalendorių?</h5>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-secondary" @click="showInstructionsModal">
              <i class="bi bi-apple me-2"/>iOS / iPhone
            </button>
            <button class="btn btn-outline-secondary" @click="showInstructionsModal">
              <i class="bi bi-android2 me-2"/>Android
            </button>
            <button class="btn btn-outline-secondary" @click="showInstructionsModal">
              <i class="bi bi-google me-2"/>Google Calendar
            </button>
          </div>
        </div>

        <hr class="my-4" />

        <div class="text-center">
          <button class="btn btn-outline-primary" @click="$emit('reset')">
            <i class="bi bi-arrow-left me-2"/>Grįžti ir sukurti naują kalendorių
          </button>
        </div>
      </div>
    </div>
  </div>
  <InstructionsModal />

  <AlertDialog :title="alertDialogTitle" :message="alertDialogMessage" />
</template>
