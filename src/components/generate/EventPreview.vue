<script setup>
  import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
  import { Collapse } from 'bootstrap'

  const props = defineProps({
    events: {
      type: Array,
      default: () => []
    }
  })

  const collapseElement = ref(null)
  let bsCollapse = null
  const isExpanded = ref(false) // Changed to false to start collapsed

  onMounted(() => {
    if (collapseElement.value) {
      bsCollapse = new Collapse(collapseElement.value, { toggle: false })

      // Listen for Bootstrap collapse events to update isExpanded
      collapseElement.value.addEventListener('shown.bs.collapse', () => {
        isExpanded.value = true
      })
      collapseElement.value.addEventListener('hidden.bs.collapse', () => {
        isExpanded.value = false
      })
    }
  })

  onBeforeUnmount(() => {
    if (bsCollapse) {
      bsCollapse.dispose()
      // Remove event listeners to prevent memory leaks
      if (collapseElement.value) {
        collapseElement.value.removeEventListener('shown.bs.collapse', () => {})
        collapseElement.value.removeEventListener('hidden.bs.collapse', () => {})
      }
    }
  })

  function toggleCollapse() {
    if (bsCollapse) {
      bsCollapse.toggle()
    }
  }

  const sortedEvents = computed(() => {
    return [...props.events].sort((a, b) => new Date(a.date) - new Date(b.date))
  })
</script>

<template>
  <div class="card shadow-sm mb-2 event-preview-card">
    <div class="card-header bg-primary text-white py-2">
      <h3 class="h6 m-0 d-flex justify-content-between align-items-center">
        Peržiūra
        <button
          class="btn btn-sm btn-light"
          type="button"
          @click="toggleCollapse"
          :aria-expanded="isExpanded"
          aria-controls="eventPreviewCollapse"
        >
          <i :class="[isExpanded ? 'bi-chevron-up' : 'bi-chevron-down']"/>
        </button>
      </h3>
    </div>
    <div
      :class="['collapse', { show: isExpanded }]"
      id="eventPreviewCollapse"
      ref="collapseElement"
    >
      <div class="card-body py-1">
        <p v-if="events.length === 0" class="text-muted mb-0">
          Nerasta jokių atliekų išvežimo įvykių pasirinktam laikotarpiui ir adresui.
        </p>
        <div v-else class="event-preview-list" style="max-height: 300px; overflow-y: auto">
          <ul class="list-group list-group-flush">
            <li
              v-for="(event, index) in sortedEvents"
              :key="`${event.date}-${event.type}-${event.containerFormats}-${index}`"
              class="list-group-item"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{{ event.date }}</strong> - {{ event.type }}
                  <small v-if="event.containerFormats"
class="text-muted d-block"
                    >Konteineris: {{ event.containerFormats }}</small
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .event-preview-card {
    margin-bottom: 0.5rem;
  }

  .event-preview-card .card-header {
    min-height: 42px;
  }

  .event-preview-list .list-group-item {
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
  }

  .event-preview-list .list-group-item:last-child {
    border-bottom: none;
  }
</style>
