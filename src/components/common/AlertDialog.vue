<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Pranešimas'
    },
    message: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div
    class="modal fade"
    id="alertDialog"
    tabindex="-1"
    aria-labelledby="alertDialogLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="alertDialogLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Gerai</button>
        </div>
      </div>
    </div>
  </div>
</template>
