<script setup>
  import GenerateForm from '@/components/generate/GenerateForm.vue'
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <!-- Breadcrumbs -->
        <nav aria-label="breadcrumb" class="mb-2">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/">Pradžia</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">Kalendoriaus generavimas</li>
          </ol>
        </nav>

        <GenerateForm />
      </div>
    </div>
  </div>
</template>
