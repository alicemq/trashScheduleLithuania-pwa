const CALENDAR_HEADER = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Atliekų Išvežimo Grafikai//LT',
  'CALSCALE:GREGORIAN',
  'X-WR-CALNAME:Atliekų Išvežimo Grafikas',
  'X-WR-TIMEZONE:Europe/Vilnius'
].join('\r\n')

const CALENDAR_FOOTER = 'END:VCALENDAR'

class ICalGenerator {
  static foldLine(line) {
    if (line.length <= 75) {
return line
}

    let result = ''
    let pos = 0

    while (pos < line.length) {
      if (pos > 0) {
        result += '\r\n '
      }
      result += line.substr(pos, pos === 0 ? 75 : 74)
      pos += pos === 0 ? 75 : 74
    }

    return result
  }

  static formatDate(date) {
    const d = new Date(date)
    if (isNaN(d.getTime())) {
      throw new Error(`Invalid date: ${date}`)
    }
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  static createEvent(collection, reminder, formData, index) {
    try {
      const uniqueId = `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`
      const uid = `trash-${uniqueId}@trash-schedule.lt`

      let description = 'Nepamiršk išnešti konteinerio!'

      if (formData.street) {
        const addressParts = [`${formData.street} ${formData.houseNumber}`]
        if (formData.city) {
          addressParts.push(formData.city)
        }
        if (formData.subDistrict) {
          addressParts.push(formData.subDistrict)
        }
        if (formData.municipality) {
          addressParts.push(formData.municipality)
        }
        description += `\nAdresas: ${addressParts.join(', ')}`
      }
      if (collection.containerFormats) {
        description += `\nKonteineris: ${collection.containerFormats}`
      }
      if (collection.contractNumbers) {
        description += `\nSutarties Nr.: ${collection.contractNumbers}`
      }
      description += '\n\nSugeneravo: https://trash.teletigras.lt'

      const event = [
        'BEGIN:VEVENT',
        this.foldLine(`UID:${uid}`),
        this.foldLine(`DTSTAMP:${this.formatDate(new Date())}`),
        this.foldLine(`DTSTART;VALUE=DATE:${collection.date.replace(/-/g, '')}`),
        this.foldLine(`SUMMARY:${collection.type}`),
        this.foldLine(`DESCRIPTION:${description}`),
        this.foldLine('TRANSP:TRANSPARENT')
      ]

      if (reminder?.enabled) {
        // Convert days to hours and add specified hour
        const hoursBeforeEvent = Number(reminder.time) * 24 + Number(reminder.hour)
        event.push(
          'BEGIN:VALARM',
          'ACTION:DISPLAY',
          'DESCRIPTION:Nepamiršk išnešti konteinerio!',
          `TRIGGER:-PT${hoursBeforeEvent}H`, // Using hours format
          'END:VALARM'
        )
      }

      event.push('END:VEVENT')
      return event.join('\r\n')
    } catch (error) {
      console.error('Failed to create event:', error)
      return ''
    }
  }

  static generateCalendar(collections, reminderSettings, formData) {
    const calendar = [CALENDAR_HEADER]

    collections.forEach((collection, index) => {
      const event = this.createEvent(collection, reminderSettings, formData, index)
      if (event) {
        calendar.push(event)
      }
    })

    calendar.push(CALENDAR_FOOTER)
    return calendar.join('\r\n')
  }
}

export default ICalGenerator
