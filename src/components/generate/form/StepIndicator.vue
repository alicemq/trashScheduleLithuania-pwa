<script setup>
  const props = defineProps({
    currentStep: {
      type: Number,
      required: true
    }
  })

  const steps = [
    { number: 1, title: 'Adresas' },
    { number: 2, title: 'Konteineriai' },
    { number: 3, title: 'Nustatymai' },
    { number: 4, title: 'Generavimas' }
  ]
</script>

<template>
  <div class="steps mb-0">
    <div class="step-progress">
      <div class="progress" style="height: 2px">
        <div
          class="progress-bar"
          :style="{ width: steps.length > 1 ? `${((props.currentStep - 1) / (steps.length - 1)) * 100}%` : '0%' }"
        />
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div
        v-for="step in steps"
        :key="step.number"
        class="step-item text-center"
        :class="{
          active: step.number === props.currentStep,
          completed: step.number < props.currentStep
        }"
      >
        <div class="step-number">{{ step.number }}</div>
        <div class="step-title">{{ step.title }}</div>
      </div>
    </div>
  </div>
</template>
