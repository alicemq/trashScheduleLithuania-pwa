<script setup>
  const props = defineProps({
    enabled: Boolean,
    time: String,
    notificationHour: {
      type: String,
      default: '09' // Default to 9 AM
    }
  })

  const emit = defineEmits(['update:enabled', 'update:time', 'update:notificationHour'])

  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0')
    return { value: hour, label: `${hour}:00` }
  })
</script>

<template>
  <div class="mb-4">
    <label class="form-label">Priminimo nustatymai</label>
    <div class="form-check mb-2">
      <input
        class="form-check-input"
        type="checkbox"
        id="reminderEnabled"
        :checked="props.enabled"
        @change="emit('update:enabled', $event.target.checked)"
      />
      <label class="form-check-label" for="reminderEnabled"> Įjungti priminimą </label>
    </div>

    <div v-if="props.enabled" class="row g-3">
      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-clock"/></span>
          <select
            class="form-select"
            :value="props.notificationHour"
            @change="emit('update:notificationHour', $event.target.value)"
          >
            <option v-for="hour in hours" :key="hour.value" :value="hour.value">
              {{ hour.label }}
            </option>
          </select>
          <span class="input-group-text">val.</span>
        </div>
      </div>

      <div class="col-md-6">
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-alarm"/></span>
          <select
            class="form-select"
            :value="props.time"
            @change="emit('update:time', $event.target.value)"
          >
            <option value="0">Tą pačią dieną</option>
            <option value="1">1 dieną prieš</option>
            <option value="2">2 dienas prieš</option>
            <option value="7">1 savaitę prieš</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
