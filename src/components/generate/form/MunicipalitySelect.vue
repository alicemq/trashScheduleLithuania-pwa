<script setup>
  const props = defineProps({
    modelValue: String
  })

  const emit = defineEmits(['update:modelValue'])

  const municipalities = [
    { id: 'Alytaus m. sav.', name: 'Alytaus m. sav.' },
    { id: 'Alytaus r. sav.', name: 'Alytaus r. sav.' },
    { id: 'Birštono sav.', name: 'Birštono sav.' },
    { id: 'Kaišiadorių r. sav.', name: 'Kaišiadorių r. sav.' },
    { id: 'Kauno m. sav.', name: 'Kauno m. sav.' },
    { id: 'Kauno r. sav.', name: 'Kauno r. sav.' },
    { id: 'Prienų r. sav.', name: 'Prienų r. sav.' },
    { id: 'Vilniaus m. sav.', name: 'Vilniaus m. sav.' }
  ]
</script>

<template>
  <div class="mb-2">
    <label for="municipality" class="form-label">Savivaldybė <span class="text-danger">*</span></label>
    <select
      id="municipality"
      class="form-select"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      required
    >
      <option value="">Pasirinkite savivaldybę</option>
      <option v-for="muni in municipalities" :key="muni.id" :value="muni.id">
        {{ muni.name }}
      </option>
    </select>
  </div>
</template>
