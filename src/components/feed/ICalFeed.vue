<script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import api from '@/services/api'
  import { generateCalendar } from '@/services/calendarService'

  const route = useRoute()

  onMounted(async () => {
    try {
      // Get query parameters
      const params = {
        municipality: route.query.m,
        street: route.query.s,
        houseNumber: route.query.h,
        startDate: new Date().toISOString().split('T')[0], // Today
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 year ahead
        reminderEnabled: route.query.r === '1',
        reminderTime: route.query.rt || '1',
        notificationHour: route.query.rh || '18'
      }

      // Get collections for address
      const collections = await api.getCollections(params)

      if (!collections || collections.length === 0) {
        throw new Error('No collections found for this address')
      }

      // Generate calendar with collections and reminder settings
      const calendarData = await generateCalendar({
        ...params,
        collections
      })

      // Set response headers and output calendar data directly
      document.body.innerHTML = ''
      const preElement = document.createElement('pre')
      preElement.style.whiteSpace = 'pre-wrap'
      preElement.textContent = calendarData
      document.body.appendChild(preElement)

      // Set content type header for the browser
      const meta = document.createElement('meta')
      meta.httpEquiv = 'Content-Type'
      meta.content = 'text/calendar; charset=utf-8'
      document.head.appendChild(meta)
    } catch (error) {
      console.error('Failed to generate feed:', error)
      document.body.innerHTML = `<div class="alert alert-danger">Failed to generate calendar: ${error.message}</div>`
    }
  })
</script>

<template>
  <pre>Generating calendar...</pre>
</template>
