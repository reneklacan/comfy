<script setup lang="ts">
import { ref, computed } from 'vue'

import Service from './Service.vue'
import Location from './Location.vue'
import Provider from './Provider.vue'
import Detail from './Detail.vue'
import Payment from './Payment.vue'
import Summary from './Summary.vue'

const steps = [
  { name: 'Služba', href: '#', component: Service },
  { name: 'Miesto', href: '#', component: Location },
  { name: 'Poskytovateľ', href: '#', component: Provider },
  { name: 'Detail', href: '#', component: Detail },
  // { name: 'Platba', href: '#', component: Payment },
  { name: 'Súhrn', href: '#', component: Summary },
]

const currentStepIndex = ref(0)

const currentTabComponent = computed(() => steps[currentStepIndex.value].component)

const nextStep = () => {
  if (currentStepIndex.value < steps.length - 1) {
    currentStepIndex.value++
  }
}
</script>

<template>
  <div class="w-full">
    <div class="border-b border-gray-200 w-full mb-10">
      <nav class="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
        <a
          v-for="(step, stepIndex) in steps"
          :key="step.name"
          :href="step.href"
          :class="[stepIndex == currentStepIndex ? 'border-indigo-500 text-indigo-600 font-bold' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'block whitespace-nowrap py-4 px-1 md:px-4 border-b-2 font-medium text-sm']"
          :aria-current="step.current ? 'page' : undefined"
          @click.prevent="currentStepIndex = stepIndex"
        >{{ step.name }}</a>
      </nav>
    </div>
    <component
      :is="currentTabComponent"
      @next-step="nextStep"
    />
  </div>
</template>
