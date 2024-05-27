<template>
  <div>
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis Cursos</h2>
    </div>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex rounded-md shadow-sm">
        <div
          :class="[project.bgColor, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">
          {{ project.initials }}</div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
            <p class="text-gray-500">{{ project.members }} Members</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const projects = [
  { name: 'Pensamiento Cuantitativo', initials: 'PENSA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Quimica General', initials: 'QUI', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Ciencias de la vida', initials: 'BIO', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'Programación Basica', initials: 'PRO', href: '#', members: 8, bgColor: 'bg-green-500' },
]
</script>
