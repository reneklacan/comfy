<template>
  <button @click="emit('nextStep')">Next Step</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// const props = defineProps({
//   nextStep: {
//     type: Function,
//     required: true
//   },
// })

const emit = defineEmits<{
  (e: 'nextStep'): void
}>()
</script>
