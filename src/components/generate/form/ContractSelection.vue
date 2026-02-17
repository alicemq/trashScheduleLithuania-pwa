<script setup>
  import { ref, watch } from 'vue'

  const props = defineProps({
    contracts: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const selectedIds = ref(new Set(props.modelValue))

  watch(
    () => props.modelValue,
    (val) => {
      selectedIds.value = new Set(Array.isArray(val) ? val : [])
    },
    { immediate: true }
  )

  function toggle(wasteObjectId) {
    const next = new Set(selectedIds.value)
    if (next.has(wasteObjectId)) {
      next.delete(wasteObjectId)
    } else {
      next.add(wasteObjectId)
    }
    selectedIds.value = next
    emit('update:modelValue', Array.from(next))
  }

  function selectAll() {
    const all = props.contracts.map((c) => c.wasteObjectId).filter(Boolean)
    selectedIds.value = new Set(all)
    emit('update:modelValue', all)
  }

  function selectNone() {
    selectedIds.value = new Set()
    emit('update:modelValue', [])
  }

  /**
   * Effective frequency for display. When a contract has multiple schedules (e.g. two
   * 14-day schedules alternating), pickups are more frequent; we derive days from the
   * API frequency string and divide by schedule count.
   */
  function displayFrequency(contract) {
    const ids = contract.scheduleIds || []
    const scheduleCount = ids.length
    if (scheduleCount <= 1) {
      return contract.frequency || null
    }
    const days = parseDaysFromFrequency(contract.frequency)
    if (days == null || days <= 0) {
      return contract.frequency ? `${contract.frequency} (${scheduleCount} grafikai)` : null
    }
    const effectiveDays = Math.round(days / scheduleCount)
    if (effectiveDays <= 7) {
      return 'kas savaitę'
    }
    return `kas ${effectiveDays} dienų`
  }

  function parseDaysFromFrequency(frequency) {
    if (!frequency || typeof frequency !== 'string') return null
    const match = frequency.match(/kas\s+(\d+)\s*dienų/i)
    if (match) return parseInt(match[1], 10)
    if (/savaitę/i.test(frequency)) return 7
    return null
  }
</script>

<template>
  <div class="card shadow-sm mb-4">
    <div class="card-header bg-info text-white d-flex justify-content-between align-items-center">
      <h3 class="h6 m-0">Pasirinkite konteinerius / grafikus</h3>
      <div class="btn-group btn-group-sm">
        <button type="button" class="btn btn-light btn-sm" @click="selectAll">
          Visi
        </button>
        <button type="button" class="btn btn-light btn-sm" @click="selectNone">
          Nė vienas
        </button>
      </div>
    </div>
    <div class="card-body">
      <p class="text-muted small mb-3">
        Visi rasti konteineriai pažymėti. Nuimkite varnelę prie tų, kurių grafikų nereikia
        kalendoriuje.
      </p>
      <ul class="list-group list-group-flush">
        <li
          v-for="contract in contracts"
          :key="contract.wasteObjectId"
          class="list-group-item d-flex align-items-center"
        >
          <input
            type="checkbox"
            class="form-check-input me-3 flex-shrink-0"
            :id="`contract-${contract.wasteObjectId}`"
            :checked="selectedIds.has(contract.wasteObjectId)"
            @change="toggle(contract.wasteObjectId)"
          />
          <label :for="`contract-${contract.wasteObjectId}`" class="form-check-label flex-grow-1 mb-0">
            <strong>{{ contract.descriptionFmt }}</strong>
            <span v-if="contract.containerFmt" class="text-muted"> — {{ contract.containerFmt }}</span>
            <span v-if="displayFrequency(contract)" class="d-block small">{{ displayFrequency(contract) }}</span>
            <span v-if="contract.inventoryNumber" class="d-block small text-muted">
              Sutarties nr. {{ contract.inventoryNumber }}
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
