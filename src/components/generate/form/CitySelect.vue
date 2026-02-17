<script setup>
  import { ref, watch, computed } from 'vue'
  import { debounce } from '@/utils/helpers'
  import api from '@/services/api'

  const props = defineProps({
    municipality: String,
    subDistrict: String,
    modelValue: String
  })

  const emit = defineEmits(['update:modelValue'])

  const allCities = ref([])
  const filteredCities = ref([])
  const searchTerm = ref(props.modelValue)
  const showSuggestions = ref(false)
  const isLoading = ref(false)

  // Debounced function to fetch cities
  const debouncedFetchCities = debounce(async (municipality, subDistrict) => {
    if (!municipality) {
      allCities.value = []
      filteredCities.value = []
      return
    }
    isLoading.value = true
    try {
      const response = await api.getCities(municipality, subDistrict)
      allCities.value = response.cities || []
      filterSuggestions() // Filter suggestions immediately after fetching
    } catch (error) {
      allCities.value = []
    } finally {
      isLoading.value = false
    }
  }, 300)

  watch(
    () => [props.municipality, props.subDistrict],
    ([newMunicipality, newSubDistrict]) => {
      debouncedFetchCities(newMunicipality, newSubDistrict)
      searchTerm.value = '' // Clear search term when municipality or subDistrict changes
    },
    { immediate: true }
  )

  watch(searchTerm, () => {
    filterSuggestions()
  })

  watch(
    () => props.modelValue,
    newValue => {
      if (newValue) {
        const selectedItem = allCities.value.find(item => item.value === newValue)
        if (selectedItem && selectedItem.label !== searchTerm.value) {
          searchTerm.value = selectedItem.label
        }
      } else {
        searchTerm.value = ''
      }
    }
  )

  function filterSuggestions() {
    if (!searchTerm.value) {
      filteredCities.value = allCities.value
    } else {
      const lowerCaseSearchTerm = searchTerm.value.toLowerCase()
      filteredCities.value = allCities.value.filter(city =>
        city.label.toLowerCase().includes(lowerCaseSearchTerm)
      )
    }
  }

  function selectCity(city) {
    searchTerm.value = city.label
    emit('update:modelValue', city.value)
    showSuggestions.value = false
  }

  function handleInput(event) {
    searchTerm.value = event.target.value
    showSuggestions.value = true // Show suggestions when user types
  }

  function handleFocus() {
    filterSuggestions()
    showSuggestions.value = true // Show suggestions when input is focused
  }

  function handleBlur() {
    // Hide suggestions when input loses focus
    // A small delay is needed to allow click event on suggestion to fire
    setTimeout(() => {
      showSuggestions.value = false
    }, 100)
  }

  const isDisabled = computed(() => !props.municipality)
</script>

<template>
  <div class="mb-2 position-relative">
    <label for="cityInput" class="form-label">Pasirinkite miestą (nebūtina)</label>
    <input
      type="text"
      id="cityInput"
      class="form-control"
      v-model="searchTerm"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :disabled="isDisabled"
      placeholder="Pradėkite rašyti miesto pavadinimą..."
      autocomplete="off"
    />
    <div
      v-if="isLoading"
      class="spinner-border spinner-border-sm text-primary position-absolute end-0 me-4 top-50 translate-middle-y"
      role="status"
    />
    <div
      v-if="showSuggestions && filteredCities.length > 0"
      class="dropdown-menu d-block w-100 shadow-sm"
      style="max-height: 200px; overflow-y: auto"
    >
      <button
        type="button"
        class="dropdown-item"
        v-for="city in filteredCities"
        :key="city.value"
        @click="selectCity(city)"
      >
        {{ city.label }}
      </button>
    </div>
    <small class="text-muted"
v-if="isDisabled"
      >Prieš ieškant miesto, pasirinkite savivaldybę</small
    >
  </div>
</template>
