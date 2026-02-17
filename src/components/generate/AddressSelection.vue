<script setup>
  import { defineEmits } from 'vue'

  defineProps({
    addresses: {
      type: Array,
      required: true
    }
  })

  const emit = defineEmits(['addressSelected'])

  function selectAddress(address) {
    emit('addressSelected', address)
  }
</script>

<template>
  <div class="card shadow-sm mb-4">
    <div class="card-header bg-info text-white">
      <h3 class="h5 m-0">Rasti adresai</h3>
    </div>
    <div class="card-body">
      <p v-if="addresses.length > 1">Rasta keli adresai. Pasirinkite tinkamiausią:</p>
      <p v-else>Rastas adresas. Patvirtinkite pasirinkimą:</p>

      <ul class="list-group">
        <li
          v-for="address in addresses"
          :key="address.id"
          class="list-group-item d-flex justify-content-between align-items-center py-0"
        >
          <div>
            <strong>{{ address.city }}</strong
            ><br />
            <small>{{ address.street }} {{ address.houseNumber }}</small>
            <small v-if="address.subDistrict" class="text-muted d-block">{{
              address.subDistrict
            }}</small>
          </div>
          <button type="button" class="btn btn-primary btn-sm" @click="selectAddress(address)">Pasirinkti</button>
        </li>
      </ul>
    </div>
  </div>
</template>
