<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'

const emit = defineEmits<{
  (e: 'nextStep'): void
}>()

const people = [
  {
    name: 'Matej Liptak',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+421 948 123 456',
    imageUrl:
      'https://i.imgur.com/9enFeOA.jpeg',
  },
  // More people...
]
const orders = [
  {
    number: 'Lopej, Podbrezová',
    href: '#',
    invoiceHref: '#',
    createdDate: 'Jul 6, 2021',
    createdDatetime: '2021-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: 'Do hodiny',
    rating: 5,
    ratingCount: 47,
    products: [
      {
        id: 1,
        name: 'Matej Lipták',
        description:
          'Fyzioterapeut špecializujúci sa na klasické, športové a lymfodrenážne masáže, myofasicálne a mobilizačné techniky.',
        href: '#',
        price: 'od 50€',
        imageSrc: 'https://i.imgur.com/9enFeOA.jpeg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      // More products...
    ],
  },
  {
    number: 'Banská Bystrica',
    href: '#',
    invoiceHref: '#',
    createdDate: 'Jul 6, 2021',
    createdDatetime: '2021-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: 'Do 2 hodín',
    rating: 4,
    ratingCount: 34,
    products: [
      {
        id: 1,
        name: 'Ján Hruška',
        description:
          'Klasické, športové a lymfodrenážne masáže.',
        href: '#',
        price: 'od 30€',
        imageSrc: 'https://i.imgur.com/6bLd5Sm.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      // More products...
    ],
  },
  // More orders...
]
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
    <div
      v-for="order in orders"
      :key="order.number"
      class="col-span-1 flex flex-col  border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border cursor-pointer"
      @click.prevent="emit('nextStep')"
    >
      <!-- Products -->
      <h4 class="sr-only">Items</h4>
      <ul role="list" class="divide-y divide-gray-200 list-none">
        <li v-for="product in order.products" :key="product.id" class="col-span-1 flex flex-col p-4 sm:p-6">
          <div class="flex items-center sm:items-start">
            <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <div class="ml-6 flex-1 text-sm">
              <div class="font-medium text-gray-900 sm:flex sm:justify-between">
                <h5>{{ product.name }}</h5>
                <p class="mt-2 sm:mt-0">{{ product.price }}</p>
              </div>
              <p class="hidden text-gray-500 sm:mt-2 sm:block">{{ product.description }}</p>
            </div>
          </div>
        </li>
      </ul>

      <div class="flex items-center border-t border-gray-200 p-4 sm:p-6">
        <dl class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
          <div>
            <dt class="font-medium text-gray-900">Adresa</dt>
            <dd class="mt-1 text-gray-500">{{ order.number }}</dd>
          </div>
          <div class="hidden sm:block">
            <dt class="font-medium text-gray-900">Hodnotenie</dt>
            <dd class="text-gray-500">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[order.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                <div class="ml-1 mt-1 text-gray-500">({{ order.ratingCount }})</div>
              </div>
            </dd>
          </div>
          <div>
            <dt class="font-medium text-gray-900">Odozva</dt>
            <dd class="mt-1 text-gray-500">{{ order.total }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
