import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

// Register fonts
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs

// Constants
const MONTHS = [
  'Sausis',
  'Vasaris',
  'Kovas',
  'Balandis',
  'Gegužė',
  'Birželis',
  'Liepa',
  'Rugpjūtis',
  'Rugsėjis',
  'Spalis',
  'Lapkritis',
  'Gruodis'
]

// Event type to initial mapping
const TRASH_INITIALS_MAP = {
  'Mišrios komunalinės': 'MK',
  'Antrinės žaliavos (Popierius/plastikas)': 'PPL',
  'Antrinės žaliavos (Stiklas)': 'S',
  Popierius: 'P',
  Plastikas: 'PL',
  Stiklas: 'S',
  'Maisto atliekos': 'M',
  'Žaliųjų atliekų': 'Ž',
  'Mišrios komunalinės atliekos': 'MK',
  'Antrinės žaliavos': 'AN'
}

// Helper function to create legend
const createLegend = events => {
  // Get unique event types and create legend
  const uniqueTypes = [...new Set(events.map(event => event.type))].filter(Boolean)

  if (uniqueTypes.length === 0) {
    return {
      text: 'Nėra atliekų išvežimo grafikų',
      style: 'legend'
    }
  }

  const legendItems = uniqueTypes.map(type => ({
    text: `${TRASH_INITIALS_MAP[type] || type.substring(0, 1).toUpperCase()} - ${type}`,
    style: 'legendText'
  }))

  return {
    text: legendItems.map(item => item.text).join('    '),
    style: 'legendText',
    margin: [0, 0, 0, 10]
  }
}

// Helper function to create month table
function createMonthTable(events, year, month) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startingDay = firstDay.getDay() || 7 // Convert Sunday (0) to 7
  const daysInMonth = lastDay.getDate()

  // Create calendar grid
  const calendar = []
  let currentWeek = Array(7).fill({
    text: '',
    style: 'emptyCell',
    border: [false, false, false, false]
  })

  // Add day headers
  const weekdays = ['P', 'A', 'T', 'K', 'P', 'Š', 'S']
  calendar.push(
    weekdays.map(day => ({
      columns: [
        {
          text: day,
          width: 12,
          style: 'weekdayHeader'
        },
        {
          text: '',
          width: 18,
          style: 'eventInitials'
        }
      ],
      border: [false, false, false, false],
      fillColor: '#f0f0f0' // Light gray background for weekdays
    }))
  )

  // Fill in days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayIndex = (startingDay + day - 2) % 7
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.date)
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      )
    })

    if (dayEvents.length > 0) {
      // Group events by type
      const groupedEvents = dayEvents.reduce((acc, event) => {
        const type = event.type.trim()
        if (!acc[type]) {
          acc[type] = []
        }
        acc[type].push(event)
        return acc
      }, {})

      // Create cell with events
      currentWeek[dayIndex] = {
        columns: [
          {
            text: day.toString(),
            width: 12,
            style: 'dayNumber',
            margin: [2, 1, 0, 0]
          },
          {
            stack: Object.keys(groupedEvents).map(type => ({
              text: TRASH_INITIALS_MAP[type] || type,
              style: 'eventInitials',
              margin: [0, 1, 0, 0]
            })),
            width: 15,
            style: 'eventInitials'
          }
        ],
        style: 'dayWithEvents',
        border: [true, true, true, true]
      }
    } else {
      currentWeek[dayIndex] = {
        columns: [
          {
            text: day.toString(),
            width: 12,
            style: 'dayNumber'
          },
          {
            text: '',
            width: 15,
            style: 'eventInitials'
          }
        ],
        style: 'dayCell',
        border: [false, false, false, false]
      }
    }

    // Start new week if it's the last day of the week or month
    if (dayIndex === 6 || day === daysInMonth) {
      calendar.push([...currentWeek])
      currentWeek = Array(7).fill({
        text: '',
        style: 'emptyCell',
        border: [false, false, false, false]
      })
    }
  }

  return {
    table: {
      headerRows: 1,
      widths: Array(7).fill('*'),
      body: calendar
    },
    layout: {
      defaultBorder: false,
      // eslint-disable-next-line no-unused-vars
      paddingLeft: function (i, node) {
        return 0
      },
      // eslint-disable-next-line no-unused-vars
      paddingRight: function (i, node) {
        return 0
      },
      // eslint-disable-next-line no-unused-vars
      paddingTop: function (i, node) {
        return 0
      },
      // eslint-disable-next-line no-unused-vars
      paddingBottom: function (i, node) {
        return 0
      }
    }
  }
}

// Helper function to generate months for a year
function generateMonths(events, _year) {
  const months = []
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Generate 12 months starting from current month
  for (let i = 0; i < 12; i++) {
    const monthIndex = (currentMonth + i) % 12
    const yearForMonth = currentYear + Math.floor((currentMonth + i) / 12)

    months.push({
      stack: [
        { text: `${MONTHS[monthIndex]} ${yearForMonth}`, style: 'monthHeader' },
        createMonthTable(events, yearForMonth, monthIndex)
      ],
      width: '33.33333%'
    })
  }

  // Create 3x4 grid layout using a table
  const rows = []
  for (let i = 0; i < 4; i++) {
    const row = months.slice(i * 3, (i + 1) * 3)
    rows.push(row)
  }

  return {
    stack: [
      {
        table: {
          headerRows: 0,
          widths: ['33%', '34%', '33%'],
          body: rows
        },
        layout: {
          // eslint-disable-next-line no-unused-vars
          hLineWidth: function (i, node) {
            return 1
          },
          // eslint-disable-next-line no-unused-vars
          vLineWidth: function (i, node) {
            return 1
          },
          // eslint-disable-next-line no-unused-vars
          hLineColor: function (i, node) {
            return 'black'
          },
          // eslint-disable-next-line no-unused-vars
          vLineColor: function (i, node) {
            return 'black'
          },
          // eslint-disable-next-line no-unused-vars
          paddingLeft: function (i, node) {
            return 20
          },
          // eslint-disable-next-line no-unused-vars
          paddingRight: function (i, node) {
            return 0
          },
          // eslint-disable-next-line no-unused-vars
          paddingTop: function (i, node) {
            return 10
          },
          // eslint-disable-next-line no-unused-vars
          paddingBottom: function (i, node) {
            return 10
          }
        }
      }
    ],
    alignment: 'center'
  }
}

// Main function to generate PDF
export function generatePDF(events, address) {
  const docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [20, 20, 20, 20],
    content: [
      {
        columns: [
          { text: 'Šiukšlų išvežimo grafikas', style: 'header' },
          { text: formatAddress(address), style: 'address' }
        ]
      },
      { text: createLegend(events), style: 'legend' },
      generateMonths(events, new Date().getFullYear())
    ],
    styles: {
      header: {
        fontSize: 12,
        bold: true,
        margin: [10, 0, 0, 5],
        width: 'auto'
      },
      address: {
        fontSize: 12,
        margin: [0, 0, 0, 10],
        alignment: 'right',
        width: '*'
      },
      subheader: {
        fontSize: 10,
        margin: [0, 0, 0, 5]
      },
      legend: {
        fontSize: 8,
        margin: [15, 0, 0, 5]
      },
      legendItem: {
        fontSize: 8,
        margin: [0, 0, 0, 0]
      },
      monthHeader: {
        fontSize: 8,
        bold: true,
        margin: [0, 0, 0, 2]
      },
      weekdayHeader: {
        fontSize: 7,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 2]
      },
      dayCell: {
        fontSize: 8,
        alignment: 'right',
        margin: [0, 0, 0, 0]
      },
      dayWithEvents: {
        fontSize: 8,
        alignment: 'center',
        margin: [0, 0, 0, 0]
      },
      emptyCell: {
        fontSize: 8,
        alignment: 'right',
        margin: [0, 0, 0, 0]
      },
      dayNumber: {
        fontSize: 8,
        alignment: 'center',
        margin: [0, 0, 0, 0]
      },
      eventInitials: {
        fontSize: 8,
        alignment: 'left',
        margin: [0, 0, 0, 0]
      }
    }
  }

  // Create and download PDF
  pdfMake.createPdf(docDefinition).download('atlieku-isvezimo-grafikas.pdf')
}

// Helper function to format address
const formatAddress = address => {
  const parts = []
  if (address.street && address.houseNumber) {
    parts.push(`${address.street} ${address.houseNumber}`)
  }
  if (address.city) {
    parts.push(address.city)
  }
  if (address.subDistrict) {
    parts.push(address.subDistrict)
  }
  if (address.municipality) {
    parts.push(address.municipality)
  }
  return parts.join(', ')
}
