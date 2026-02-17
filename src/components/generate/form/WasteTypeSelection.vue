<script setup>
  const props = defineProps({
    modelValue: Object
  })

  const emit = defineEmits(['update:modelValue'])

  function updateWasteType(type, checked) {
    emit('update:modelValue', {
      ...props.modelValue,
      [type]: checked
    })
  }
</script>

<template>
  <div class="mb-4">
    <label class="form-label">Atliekų tipai</label>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="mixedWaste"
        :checked="modelValue?.mixed"
        @change="updateWasteType('mixed', $event.target.checked)"
      />
      <label class="form-check-label" for="mixedWaste">
        <span class="badge bg-secondary me-2"><i class="bi bi-trash"/></span>
        Mišrios atliekos
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="paperWaste"
        :checked="modelValue?.paper"
        @change="updateWasteType('paper', $event.target.checked)"
      />
      <label class="form-check-label" for="paperWaste">
        <span class="badge bg-primary me-2"><i class="bi bi-newspaper"/></span>
        Popierius
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="plasticWaste"
        :checked="modelValue?.plastic"
        @change="updateWasteType('plastic', $event.target.checked)"
      />
      <label class="form-check-label" for="plasticWaste">
        <span class="badge bg-warning text-dark me-2"><i class="bi bi-cup-straw"/></span>
        Plastikas, metalas
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="glassWaste"
        :checked="modelValue?.glass"
        @change="updateWasteType('glass', $event.target.checked)"
      />
      <label class="form-check-label" for="glassWaste">
        <span class="badge bg-success me-2"><i class="bi bi-cup"/></span>
        Stiklas
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="bioWaste"
        :checked="modelValue?.bio"
        @change="updateWasteType('bio', $event.target.checked)"
      />
      <label class="form-check-label" for="bioWaste">
        <span class="badge bg-danger me-2"><i class="bi bi-apple"/></span>
        Maisto atliekos
      </label>
    </div>
  </div>
</template>
