<template>
  <div class="border-b border-gray-200 w-full">
    <nav class="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
      <a
        v-for="tab in tabs"
        :key="tab.name"
        :href="tab.href"
        :class="[tab.current ? 'border-indigo-500 text-indigo-600 font-bold' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'block whitespace-nowrap py-4 px-1 md:px-4 border-b-2 font-medium text-sm']"
        :aria-current="tab.current ? 'page' : undefined"
      >{{ tab.name }}</a>
    </nav>
  </div>
</template>

<script setup>
import Location from './Location.vue'
import Provider from './Provider.vue'
import Detail from './Detail.vue'
import Payment from './Payment.vue'
import Summary from './Summary.vue'

const tabs = [
  { name: 'Miesto', href: '#', current: true, component: Location },
  { name: 'Poskytovatel', href: '#', current: false, component: Provider },
  { name: 'Detail', href: '#', current: false, component: Detail },
  { name: 'Platba', href: '#', current: false, component: Payment },
  { name: 'Suhrn', href: '#', current: false, component: Summary },
]

</script>
