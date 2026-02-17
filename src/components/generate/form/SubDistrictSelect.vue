<script setup>
  import { ref, watch, computed } from 'vue'
  import { debounce } from '@/utils/helpers'
  import api from '@/services/api'

  const props = defineProps({
    municipality: String,
    modelValue: String
  })

  const emit = defineEmits(['update:modelValue'])

  const allSubDistricts = ref([])
  const filteredSubDistricts = ref([])
  const searchTerm = ref(props.modelValue)
  const showSuggestions = ref(false)
  const isLoading = ref(false)

  // Debounced function to fetch subdistricts
  const debouncedFetchSubDistricts = debounce(async municipality => {
    if (!municipality) {
      allSubDistricts.value = []
      filteredSubDistricts.value = []
      return
    }
    isLoading.value = true
    try {
      const response = await api.getSubDistricts(municipality)
      allSubDistricts.value = response.subDistricts || []
      filterSuggestions() // Filter suggestions immediately after fetching
    } catch (error) {
      console.error('Error fetching subdistricts:', error)
      allSubDistricts.value = []
    } finally {
      isLoading.value = false
    }
  }, 300)

  watch(
    () => props.municipality,
    newMunicipality => {
      debouncedFetchSubDistricts(newMunicipality)
      searchTerm.value = '' // Clear search term when municipality changes
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
        const selectedItem = allSubDistricts.value.find(item => item.value === newValue)
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
      filteredSubDistricts.value = allSubDistricts.value
    } else {
      const lowerCaseSearchTerm = searchTerm.value.toLowerCase()
      filteredSubDistricts.value = allSubDistricts.value.filter(subDistrict =>
        subDistrict.label.toLowerCase().includes(lowerCaseSearchTerm)
      )
    }
  }

  function selectSubDistrict(subDistrict) {
    searchTerm.value = subDistrict.label
    emit('update:modelValue', subDistrict.value)
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
    <label for="subDistrictInput" class="form-label">Pasirinkite seniūniją (nebūtina)</label>
    <input
      type="text"
      id="subDistrictInput"
      class="form-control"
      v-model="searchTerm"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :disabled="isDisabled"
      placeholder="Pradėkite rašyti seniūnijos pavadinimą..."
      autocomplete="off"
    />
    <div
      v-if="isLoading"
      class="spinner-border spinner-border-sm text-primary position-absolute end-0 me-4 top-50 translate-middle-y"
      role="status"
    />
    <div
      v-if="showSuggestions && filteredSubDistricts.length > 0"
      class="dropdown-menu d-block w-100 shadow-sm"
      style="max-height: 200px; overflow-y: auto"
    >
      <button
        type="button"
        class="dropdown-item"
        v-for="subDistrict in filteredSubDistricts"
        :key="subDistrict.value"
        @click="selectSubDistrict(subDistrict)"
      >
        {{ subDistrict.label }}
      </button>
    </div>
    <small class="text-muted"
v-if="isDisabled"
      >Prieš ieškant seniūnijos, pasirinkite savivaldybę</small
    >
  </div>
</template>
