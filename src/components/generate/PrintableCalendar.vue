<script setup>
  import { defineProps, computed, ref, onMounted, nextTick } from 'vue'
  import Calendar from 'js-year-calendar' // Correct import for js-year-calendar
  import 'js-year-calendar/dist/js-year-calendar.min.css' // Styles
  import 'js-year-calendar/locales/js-year-calendar.lt' // Lithuanian locale

  const props = defineProps({
    events: {
      type: Array,
      default: () => {
        // Try to get events from URL parameters
        const urlParams = new URLSearchParams(window.location.search)
        const eventsParam = urlParams.get('events')
        return eventsParam ? JSON.parse(eventsParam) : []
      }
    },
    address: {
      type: Object,
      default: () => {
        // Try to get address from URL parameters
        const urlParams = new URLSearchParams(window.location.search)
        const addressParam = urlParams.get('address')
        return addressParam ? JSON.parse(addressParam) : {}
      }
    }
  })

  const calendarRef = ref(null)
  const nextYearCalendarRef = ref(null) // Ref for the next year calendar container
  const showNextYearCalendar = ref(false) // Controls visibility of next year's calendar
  const currentYear = new Date().getFullYear() // Make currentYear reactive if needed, but constant enough here

  const TRASH_INITIALS_MAP = {
    'Mišrios komunalinės': 'MK',
    'Antrinės žaliavos (Popierius/plastikas)': 'PL',
    Popierius: 'P',
    Plastikas: 'PL',
    Stiklas: 'S',
    'Maisto atliekos': 'M',
    'Žaliųjų atliekų': 'Ž'
    // Add more as needed based on actual event types
  }

  const addressInfo = computed(() => {
    const parts = []
    if (props.address.street && props.address.houseNumber) {
      parts.push(`${props.address.street} ${props.address.houseNumber}`)
    }
    if (props.address.city) {
      parts.push(props.address.city)
    }
    if (props.address.subDistrict) {
      parts.push(props.address.subDistrict)
    }
    if (props.address.municipality) {
      parts.push(props.address.municipality)
    }
    return parts.join(', ')
  })

  const dataSource = computed(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Normalize today to start of day for comparison

    return props.events
      .filter(event => {
        const eventDate = new Date(event.date)
        eventDate.setHours(0, 0, 0, 0) // Normalize event date to start of day
        return eventDate >= today // Filter out events strictly before today
      })
      .map((event, index) => ({
        id: index, // Unique ID for each event
        name: event.type,
        startDate: new Date(event.date),
        endDate: new Date(event.date),
        trashType: event.type // Custom property for coloring
      }))
  })

  const customDayRenderer = (element, date) => {
    const eventsForDay = dataSource.value.filter(
      event => event.startDate.toDateString() === date.toDateString()
    )

    // Clear existing background color from JS (for robustness)
    element.style.backgroundColor = 'transparent'
    element.style.backgroundImage = 'none' // Ensure no background images

    if (eventsForDay.length > 0) {
      // 1. Get the current day number text content from the element
      let dayNumberText = ''

      // Check for direct text node or a span that js-year-calendar might use for the number
      for (let i = 0; i < element.childNodes.length; i++) {
        const node = element.childNodes[i]
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
          dayNumberText = node.textContent.trim()
          break
        }
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === 'SPAN' &&
          node.textContent.trim() !== ''
        ) {
          dayNumberText = node.textContent.trim()
          break
        }
      }

      // Clear the original content of the <td> to re-structure it
      while (element.firstChild) {
        element.removeChild(element.firstChild)
      }

      // Create a container for the day number
      const dayNumberDiv = document.createElement('div')
      dayNumberDiv.classList.add('day-number') // New class for styling
      dayNumberDiv.textContent = dayNumberText
      element.appendChild(dayNumberDiv)

      // Create a container for the initials
      const initialsContainer = document.createElement('div')
      initialsContainer.classList.add('day-initials-container')

      const uniqueTrashTypes = new Set()
      eventsForDay.forEach(event => uniqueTrashTypes.add(event.trashType))

      uniqueTrashTypes.forEach(trashType => {
        const initial = TRASH_INITIALS_MAP[trashType] || trashType.substring(0, 1).toUpperCase()
        const initialSpan = document.createElement('span')
        initialSpan.classList.add('event-initial-label')
        initialSpan.textContent = initial
        initialSpan.title = trashType
        initialsContainer.appendChild(initialSpan)
      })

      element.appendChild(initialsContainer)

      // Remove any conflicting inline width/max-width set by js-year-calendar on the td itself
      element.style.removeProperty('width')
      element.style.removeProperty('max-width')

      // Apply flex styles to the td itself to arrange contents
      element.style.setProperty('display', 'flex', 'important')
      element.style.setProperty('flex-direction', 'row', 'important')
      element.style.setProperty('justify-content', 'space-between', 'important')
      element.style.setProperty('align-items', 'flex-start', 'important')
      element.style.setProperty('gap', '8px', 'important') // Adjust as needed for spacing between number and initials

      element.classList.add('day-has-events')
    } else {
      // For days without events, ensure default styling and remove event class
      element.style.setProperty('display', '', 'important') // Reset display
      element.style.setProperty('flex-direction', '', 'important')
      element.style.setProperty('justify-content', '', 'important')
      element.style.setProperty('align-items', '', 'important')
      element.style.setProperty('gap', '', 'important')
      element.classList.remove('day-has-events') // Remove event class if no events
    }
  }

  const hasNextYearEvents = computed(() => {
    const nextYear = currentYear + 1
    return props.events.some(event => new Date(event.date).getFullYear() === nextYear)
  })

  onMounted(() => {
    const today = new Date()
    const currentMonthIndex = today.getMonth() // 0-indexed month
    let deletedMonthsCount = 0 // Move to outer scope

    const calendarContainer = calendarRef.value // Declare here to make it accessible
    let nextYearCalendarContainer = null // Declare here for conditional assignment

    // Initialize Current Year Calendar
    if (calendarContainer) {
      new Calendar(calendarContainer, {
        weekStart: 1,
        displayWeekNumber: true,
        language: 'lt',
        style: 'custom',
        minDate: today,
        displayHeader: false,
        dataSource: dataSource.value,
        customDayRenderer: customDayRenderer,
        startYear: currentYear,
        minYear: currentYear,
        maxDate: new Date(currentYear, 11, 31) // End of current year
      })

      nextTick(() => {
        // Wrap current year adjustments in nextTick
        // Force grid-template-columns with JavaScript
        const monthsContainer = calendarContainer.querySelector('.months-container')
        if (monthsContainer) {
          monthsContainer.style.setProperty('display', 'grid', 'important') // Ensure display is grid
          monthsContainer.style.setProperty('grid-template-columns', 'repeat(3, 1fr)', 'important')
          monthsContainer.style.removeProperty('width') // Remove fixed width if any
        }

        // Force weekday header styles with JavaScript
        const weekdayHeaders = calendarContainer.querySelectorAll(
          '.calendar .week-days .day-header'
        ) // Corrected selector
        weekdayHeaders.forEach(th => {
          th.style.removeProperty('width') // Remove fixed width
          th.style.removeProperty('min-width') // Remove min-width
          th.style.setProperty('width', 'calc(100% / 7)', 'important')
          th.style.setProperty('min-width', '0', 'important')
          th.style.setProperty('padding', '6px 4px', 'important')
          th.style.setProperty('font-size', '0.8em', 'important')
          th.style.setProperty('text-align', 'center', 'important')
          th.style.setProperty('vertical-align', 'middle', 'important')
          th.style.setProperty('flex', '1', 'important') // Add flex to ensure even distribution
        })

        // Delete past months of the current year and count them
        for (let i = 0; i < currentMonthIndex; i++) {
          const monthElement = calendarContainer.querySelector(
            `.month-container[data-month-id="${i}"]`
          )
          if (monthElement) {
            monthElement.remove()
            deletedMonthsCount++
          }
        }

        // Initialize Next Year Calendar (conditionally)
        if (hasNextYearEvents.value) {
          // Only generate if there are events next year
          showNextYearCalendar.value = true
          nextTick(() => {
            if (nextYearCalendarRef.value) {
              nextYearCalendarContainer = nextYearCalendarRef.value

              const nextYearStart = currentYear + 1
              new Calendar(nextYearCalendarContainer, {
                weekStart: 1,
                displayWeekNumber: true,
                language: 'lt',
                style: 'custom',
                displayHeader: false,
                dataSource: dataSource.value,
                customDayRenderer: customDayRenderer,
                startYear: nextYearStart,
                minYear: nextYearStart,
                maxDate: new Date(nextYearStart, 11, 31), // Generate full next year
                enableRangeSelection: false,
                enableContextMenu: false,
                enableWeekNumber: true,
                minDate: new Date(nextYearStart, 0, 1),
                disabledDays: [], // No disabled days
                disabledWeekDays: [], // No disabled weekdays
                disabledDates: [], // No disabled dates
                disabledDateRanges: [], // No disabled date ranges
                disabledYears: [], // No disabled years
                disabledMonths: Array.from({ length: 12 }, (_, i) => i >= deletedMonthsCount) // Disable months we don't want to show
              })

              setTimeout(() => {
                // Add a small delay for js-year-calendar to settle
                // Force grid-template-columns with JavaScript
                const nextYearMonthsContainer =
                  nextYearCalendarContainer.querySelector('.months-container')
                if (nextYearMonthsContainer) {
                  nextYearMonthsContainer.style.setProperty('display', 'grid', 'important') // Ensure display is grid
                  nextYearMonthsContainer.style.setProperty(
                    'grid-template-columns',
                    'repeat(3, 1fr)',
                    'important'
                  )
                  nextYearMonthsContainer.style.removeProperty('width') // Remove fixed width if any
                }

                // Force weekday header styles with JavaScript
                const nextYearWeekdayHeaders = nextYearCalendarContainer.querySelectorAll(
                  '.calendar .week-days .day-header'
                ) // Corrected selector
                nextYearWeekdayHeaders.forEach(th => {
                  th.style.removeProperty('width') // Remove fixed width
                  th.style.removeProperty('min-width') // Remove min-width
                  th.style.setProperty('width', 'calc(100% / 7)', 'important')
                  th.style.setProperty('min-width', '0', 'important')
                  th.style.setProperty('padding', '6px 4px', 'important')
                  th.style.setProperty('font-size', '0.8em', 'important')
                  th.style.setProperty('text-align', 'center', 'important')
                  th.style.setProperty('vertical-align', 'middle', 'important')
                  th.style.setProperty('flex', '1', 'important') // Add flex to ensure even distribution
                })

                // Initialize next year calendar if there are events for next year
                if (hasNextYearEvents.value) {
                  const initNextYearCalendar = async () => {
                    // Delete months from next year calendar to match the number of deleted months from current year
                    const allNextYearMonths =
                      nextYearCalendarContainer.querySelectorAll('.month-container')
                    console.log('Next year container before deletion:', {
                      container: nextYearCalendarContainer,
                      months: Array.from(allNextYearMonths).map(month => ({
                        id: month.getAttribute('data-month-id'),
                        month: month.getAttribute('data-month'),
                        year: month.getAttribute('data-year'),
                        html: month.innerHTML
                      }))
                    })
                    console.log('Next year months before deletion:', allNextYearMonths.length)
                    console.log('Months to keep:', deletedMonthsCount)

                    const monthsToKeep = Math.min(deletedMonthsCount, allNextYearMonths.length)

                    // Keep only the first 'monthsToKeep' months
                    for (let i = allNextYearMonths.length - 1; i >= monthsToKeep; i--) {
                      const monthElement = allNextYearMonths[i]
                      if (monthElement) {
                        console.log('Removing month:', {
                          index: i,
                          id: monthElement.getAttribute('data-month-id'),
                          month: monthElement.getAttribute('data-month'),
                          year: monthElement.getAttribute('data-year')
                        })
                        monthElement.remove()
                      }
                    }

                    const remainingMonths =
                      nextYearCalendarContainer.querySelectorAll('.month-container')
                    console.log('Next year container after deletion:', {
                      container: nextYearCalendarContainer,
                      months: Array.from(remainingMonths).map(month => ({
                        id: month.getAttribute('data-month-id'),
                        month: month.getAttribute('data-month'),
                        year: month.getAttribute('data-year'),
                        html: month.innerHTML
                      }))
                    })
                    console.log('Next year months after deletion:', remainingMonths.length)

                    // Force a complete rerender of the next year container
                    const forceRerender = async () => {
                      // Store the parent element
                      const parent = nextYearCalendarContainer.parentElement
                      // Remove the container from DOM
                      parent.removeChild(nextYearCalendarContainer)
                      await nextTick()
                      // Re-add the container to DOM
                      parent.appendChild(nextYearCalendarContainer)
                      await nextTick()
                    }
                    await forceRerender()

                    // --- MERGE LOGIC STARTS HERE ---
                    // Get the months from the next year calendar after its own initial trim
                    const nextYearMonthsToMove = Array.from(
                      nextYearCalendarContainer.querySelectorAll('.month-container')
                    )
                    console.log('Months to move to current year:', nextYearMonthsToMove.length)

                    // Get the months container of the current year calendar
                    const currentYearMonthsInnerContainer =
                      calendarContainer.querySelector('.months-container')

                    if (currentYearMonthsInnerContainer) {
                      nextYearMonthsToMove.forEach(monthElement => {
                        console.log('Moving month:', monthElement.getAttribute('data-month-id'))
                        currentYearMonthsInnerContainer.appendChild(monthElement)
                      })
                    } else {
                      console.error(
                        'Current year months inner container (.months-container) not found for merging.'
                      )
                    }

                    // Hide or remove the next year calendar container after merging its months
                    if (nextYearCalendarContainer.parentNode) {
                      nextYearCalendarContainer.parentNode.removeChild(nextYearCalendarContainer)
                    }
                    // --- MERGE LOGIC ENDS HERE ---
                  }
                  initNextYearCalendar()
                }
              }, 200) // Increased delay to 200ms
            }
          })
        }
      })
    }
  })
</script>

<template>
  <div class="printable-calendar-container">
    <h4 class="text-center">Atliekų Išvežimo Grafikas</h4>
    <p class="text-center text-muted address-info-margin">{{ addressInfo }}</p>

    <div v-if="events.length === 0" class="alert alert-warning text-center">
      Nerasta jokių atliekų išvežimo įvykių pasirinktam laikotarpiui ir adresui.
    </div>
    <div v-else>
      <!-- Current Year Calendar Container -->
      <div id="calendar-current-year-container" ref="calendarRef"/>
      <p class="text-danger text-center mt-2">Current Year Ends Here</p>

      <!-- Next Year Calendar Container (conditionally rendered) -->
      <div v-if="showNextYearCalendar" id="calendar-next-year-container" ref="nextYearCalendarRef">
        <!-- <h2 class="text-center mb-4">Atliekų Išvežimo Grafikas ({{ currentYear + 1 }} metai)</h2> -->
      </div>
    </div>

    <div class="text-center">
      <p>Sugeneravo: <a href="https://trash.teletigras.lt">trash.teletigras.lt</a></p>
    </div>
  </div>
</template>

<style>
  /* Base styles for v-year-calendar */
  .calendar {
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  .calendar .months-container {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 15px;
    box-sizing: border-box;
    width: 100%;
  }

  .calendar .month-container {
    margin-bottom: 0 !important;
    padding: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .calendar .calendar-header {
    display: none;
  }

  .calendar .month-title {
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .calendar table.month {
    width: 100% !important;
    table-layout: fixed !important;
    border-collapse: collapse;
  }

  .calendar .week-days .day-header {
    padding: 6px 4px !important;
    font-size: 0.8em !important;
    text-align: center !important;
    vertical-align: middle !important;
    width: calc(100% / 7) !important;
    min-width: 0 !important;
    border: none !important;
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .calendar table.month td {
    padding: 2px !important;
    height: 30px !important;
    vertical-align: top !important;
    font-size: 0.75em !important;
    position: relative;
    background-color: transparent !important;
    background-image: none !important;
    min-width: 0 !important;
  }

  .calendar table.month td .day-number {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto !important;
    font-size: 1em !important;
    flex-grow: 0;
    flex-shrink: 0;
    text-align: left;
    line-height: 1 !important;
  }

  .calendar table.month td.day-has-events {
    border: 1px solid #000 !important;
    background-color: transparent !important;
    background-image: none !important;
  }

  /* Event initials labels */
  .event-initial-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    border-radius: 3px;
    margin-left: 0;
    font-size: 0.7em;
    font-weight: bold;
    background-color: transparent !important;
    color: #333 !important;
    text-transform: uppercase;
    flex-shrink: 0;
    line-height: 1 !important;
  }

  .day-initials-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3px;
    justify-content: flex-end;
    align-items: flex-start;
    flex-grow: 1;
  }

  /* General print styles for the container */
  .printable-calendar-container {
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    display: flex;
    flex-direction: column; /* Changed from default (row) to column */
    flex-wrap: wrap;
    justify-content: center; /* Center horizontally (for individual items in column, if not taking full width) */
    align-items: center; /* Center items in the cross-axis (horizontally for column) */
    gap: 0px; /* No gap between the two calendar blocks */
  }

  .printable-calendar-container h4 {
    margin-bottom: 0.5rem; /* Reduced margin for the main heading */
  }

  .address-info-margin {
    margin-bottom: 0.5rem; /* Reduced margin for address info */
  }

  /* Print styles */
  @media print {
    @page {
      margin: 0;
      size: auto;
    }

    body {
      margin: 0;
      padding: 0;
    }

    /* Remove all colors and force black and white */
    * {
      color: black !important;
      background: white !important;
      border-color: black !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Remove headers and footers */
    @page {
      margin: 0;
    }

    /* Hide any elements that shouldn't print */
    .no-print {
      display: none !important;
    }

    /* Ensure calendar takes full page */
    .calendar {
      page-break-after: always;
      page-break-inside: avoid;
    }

    /* Remove any shadows or decorative elements */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
      background-image: none !important;
    }

    /* Calendar specific print styles */
    .printable-calendar-container {
      padding: 0 !important;
      margin: 0 !important;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }

    .calendar table.month {
      width: 100% !important;
      table-layout: fixed !important;
    }

    .calendar .months-container {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 10px !important;
    }

    .calendar .month-container {
      page-break-inside: avoid;
    }

    .calendar table.month td {
      border: 1px solid #000 !important;
    }

    .calendar table.month td.day-has-events {
      border: 2px solid #000 !important;
    }

    .event-initial-label {
      border: 1px solid #000 !important;
      background-color: white !important;
      color: black !important;
    }

    /* Hide non-essential elements */
    .text-danger,
    .text-muted,
    .alert,
    .text-center:not(.month-title) {
      display: none !important;
    }

    /* Block mouse events and remove any hover effects */
    .calendar,
    .calendar * {
      pointer-events: none !important;
      cursor: default !important;
    }

    /* Remove margins and padding from text elements */
    .printable-calendar-container h1,
    .printable-calendar-container p,
    .printable-calendar-container .text-center {
      margin: 0 !important;
      padding: 0 !important;
    }
  }
</style>
