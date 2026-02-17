<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import PrintableCalendar from '@/components/generate/PrintableCalendar.vue'

  const route = useRoute()
  const events = ref([])
  const address = ref({})

  onMounted(() => {
    // Get data from URL parameters
    const eventsParam = route.query.events
    const addressParam = route.query.address

    if (eventsParam) {
      events.value = JSON.parse(eventsParam)
    }
    if (addressParam) {
      address.value = JSON.parse(addressParam)
    }
  })
</script>

<template>
  <div class="print-view">
    <PrintableCalendar :events="events" :address="address" />
  </div>
</template>

<style>
  /* Base styles */
  .print-view {
    padding: 20px;
  }

  /* Print styles */
  @media print {
    /* Remove all margins and padding */
    @page {
      margin: 0;
      padding: 0;
      size: auto;
    }

    /* Remove headers and footers */
    @page :first {
      margin-top: 0;
    }

    @page :left {
      margin-left: 0;
    }

    @page :right {
      margin-right: 0;
    }

    /* Force black and white */
    * {
      color: black !important;
      background: white !important;
      border-color: black !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Remove all decorative elements */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
      background-image: none !important;
    }

    /* Remove margins and padding */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Hide navigation and other non-printable elements */
    nav,
    header,
    footer,
    .no-print {
      display: none !important;
    }

    /* Ensure calendar takes full page */
    .print-view {
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      height: 100% !important;
    }

    /* Remove any text colors */
    .text-danger,
    .text-success,
    .text-primary {
      color: black !important;
    }

    /* Remove any background colors */
    .bg-light,
    .bg-dark,
    .bg-primary {
      background: white !important;
    }

    /* Remove any borders except calendar grid */
    * {
      border-color: black !important;
    }

    /* Ensure proper page breaks */
    .calendar-container {
      page-break-inside: avoid;
    }

    .next-year-container {
      page-break-before: always;
    }
  }
</style>
