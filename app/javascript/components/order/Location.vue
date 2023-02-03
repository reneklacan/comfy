<template>
  <div class="flex items-center mb-3">
    <div class="flex-1 relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
      <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">Vyhľadaj</label>
      <GMapAutocomplete
        class="block w-full outline-0 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Chaty Urbanove Sestry"
        @place_changed="setPlace"
        :options="{ bounds: slovakiaBounds }"
      />

    </div>
    <button
      type="submit"
      :class="[marker ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'text-white bg-blue-600 disabled:opacity-25', 'mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent  px-4 py-2 font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm']"
      :disabled="!marker"
      @click.prevent="emit('nextStep')"
    >Potvrdit</button>
  </div>

  <GMapMap
    class=""
    :center="center"
    :zoom="16"
    style="height: 50vh"
  >
    <GMapMarker
      v-if="marker"
      :position="marker"
    />
  </GMapMap>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'

const emit = defineEmits<{
  (e: 'nextStep'): void
}>()

const lopejCoords = { lat: 48.81789620400199, lng: 19.50352265639249 }
const slovakiaBounds = { north: 49.672979, south: 47.634747, east: 22.681599, west: 16.691754 }

const center = ref(lopejCoords)
const marker = ref(null)

function setPlace(place: any) {
  console.log(place)
  console.log(place.geometry.location.lat())
  console.log(place.geometry.location.lng())
  center.value = {
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng()
  }

  marker.value = center.value
}
</script>
