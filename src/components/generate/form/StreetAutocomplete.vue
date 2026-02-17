<script setup>
  import { ref, computed } from 'vue'
  import { debounce } from '@/utils/helpers'
  import api from '@/services/api'

  const props = defineProps({
    street: {
      type: String,
      default: ''
    },
    houseNumber: String,
    municipality: String,
    subDistrict: String,
    city: String
  })

  const emit = defineEmits(['update:street', 'update:houseNumber'])

  const streets = ref([])
  const isLoadingStreets = ref(false)
  const showStreetSuggestions = ref(false)

  // Add computed property for input state
  const isDisabled = computed(() => !props.municipality)

  // Add hover message when disabled
  const placeholderText = computed(() =>
    isDisabled.value ? 'Pirma pasirinkite savivaldybę' : 'Įveskite gatvės pavadinimą'
  )

  // Transform API response to array of strings
  const fetchStreets = debounce(async query => {
    if (!props.municipality || !query || query.length < 2) {
      streets.value = []
      showStreetSuggestions.value = false
      return
    }

    try {
      isLoadingStreets.value = true
      const response = await api.getStreets(
        props.municipality,
        props.subDistrict,
        props.city,
        query || ''
      )
      // Extract just the street names from the response
      streets.value = Array.isArray(response)
        ? response.map(street => (typeof street === 'object' ? street.value : street))
        : []
      showStreetSuggestions.value = streets.value.length > 0
    } catch (error) {
      console.error('Error fetching streets:', error)
      streets.value = []
    } finally {
      isLoadingStreets.value = false
    }
  }, 300)

  // Handle direct input changes
  function handleInput(event) {
    const value = event.target.value
    emit('update:street', value)

    if (value.length >= 2) {
      fetchStreets(value)
    } else {
      streets.value = []
      showStreetSuggestions.value = false
    }
  }

  // Simplified selection handler - now working with string values directly
  function selectStreet(street) {
    emit('update:street', street)
    showStreetSuggestions.value = false
  }
</script>

<template>
  <div>
    <!-- Street input -->
    <div class="mb-2 street-search-container">
      <label for="street" class="form-label">Gatvė <span class="text-danger">*</span></label>
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-signpost"/></span>
        <input
          type="text"
          class="form-control"
          id="street"
          :value="street"
          @input="handleInput"
          :placeholder="placeholderText"
          :disabled="isDisabled"
          :title="isDisabled ? 'Pirma pasirinkite savivaldybę' : ''"
          autocomplete="off"
          required
        />
        <div
          v-if="isLoadingStreets"
          class="spinner-border spinner-border-sm text-primary position-absolute end-0 me-4 top-50 translate-middle-y"
          role="status"
        >
          <span class="visually-hidden">Kraunama...</span>
        </div>
      </div>

      <!-- Street suggestions dropdown -->
      <div
        v-if="showStreetSuggestions && streets.length > 0"
        class="dropdown-menu d-block w-100 shadow-sm"
      >
        <div class="p-2 text-muted small border-bottom">
          <i class="bi bi-info-circle me-1"/>
          Rasta {{ streets.length }} {{ streets.length === 1 ? 'gatvė' : 'gatvės' }}
        </div>
        <div style="max-height: 200px; overflow-y: auto">
          <button
            type="button"
            class="dropdown-item"
            v-for="street in streets"
            :key="street"
            @click="selectStreet(street)"
          >
            {{ street }}
          </button>
        </div>
      </div>
      <small class="text-muted"
v-if="!isDisabled"
        >Pradėkite rašyti ir pasirinkite gatvę iš sąrašo</small
      >
      <small class="text-muted" v-else>
        <i class="bi bi-info-circle me-1"/>
        Prieš ieškant gatvės, pasirinkite savivaldybę
      </small>
    </div>

    <!-- House number input -->
    <div class="mb-2">
      <label for="houseNumber"
class="form-label"
        >Namo numeris <span class="text-danger">*</span></label
      >
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-house"/></span>
        <input
          type="text"
          class="form-control"
          id="houseNumber"
          :value="houseNumber"
          @input="$emit('update:houseNumber', $event.target.value)"
          placeholder="Pvz.: 1, 2A, 15B"
          required
        />
      </div>
    </div>
  </div>
</template>
