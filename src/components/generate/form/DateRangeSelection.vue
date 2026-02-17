<script setup>
  const props = defineProps({
    startDate: String,
    endDate: String
  })

  const emit = defineEmits(['update:startDate', 'update:endDate'])

  // Initialize with today and one year from now if not provided
  if (!props.startDate) {
    const today = new Date()
    emit('update:startDate', today.toISOString().split('T')[0])

    const oneYearFromNow = new Date()
    oneYearFromNow.setFullYear(today.getFullYear() + 1)
    emit('update:endDate', oneYearFromNow.toISOString().split('T')[0])
  }
</script>

<template>
  <div class="row">
    <div class="col-md-6 mb-1">
      <label for="startDate"
class="form-label"
        >Pradžios data <span class="text-danger">*</span></label
      >
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-calendar"/></span>
        <input
          type="date"
          class="form-control"
          id="startDate"
          :value="startDate"
          @input="$emit('update:startDate', $event.target.value)"
          required
        />
      </div>
    </div>

    <div class="col-md-6 mb-4">
      <label for="endDate"
class="form-label"
        >Pabaigos data <span class="text-danger">*</span></label
      >
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-calendar"/></span>
        <input
          type="date"
          class="form-control"
          id="endDate"
          :value="endDate"
          @input="$emit('update:endDate', $event.target.value)"
          required
        />
      </div>
    </div>
  </div>
</template>
