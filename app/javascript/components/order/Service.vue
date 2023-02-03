<script setup lang="ts">

const emit = defineEmits<{
  (e: 'nextStep'): void
}>()
const files = [
  {
    title: 'Masaz',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
]
</script>

<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 xl:gap-x-8 list-none">

    <div
      class="cursor-pointer group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
      @click.prevent="emit('nextStep')"
    >
      <img src="https://masazetatry.sk/storage/app/uploads/public/05c/936/191/thumb__400_400_0_0_crop.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center group-hover:opacity-75" />
      <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
      <div class="flex items-end p-6">
        <div>
          <h3 class="font-semibold text-white">
            Masáž
          </h3>
        </div>
      </div>
    </div>

    <div
      class="cursor-pointer group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
      @click.prevent="emit('nextStep')"
    >
      <img src="https://static.wixstatic.com/media/dd47c7_296b360a71784044b4f51f6cb0e1ae6c~mv2.jpg/v1/fill/w_922,h_937,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dd47c7_296b360a71784044b4f51f6cb0e1ae6c~mv2.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center group-hover:opacity-75" />
      <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
      <div class="flex items-end p-6">
        <div>
          <h3 class="font-semibold text-white">
            Yoga
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
