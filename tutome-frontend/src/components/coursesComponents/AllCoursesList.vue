<template>
     <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
          <li v-for="client in Courses" :key="client.id" class="overflow-visible rounded-xl border border-gray-200">
               <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 relative">
                    <component :is="client.icon" class="h-6 w-6 shrink-0 text-black" />
                    <div class="text-sm font-medium leading-6 text-gray-900">{{ client.name }}</div>
                    <Menu as="div" class="relative ml-auto">
                         <MenuButton class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                              <span class="sr-only">Open options</span>
                              <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
                         </MenuButton>
                         <transition enter-active-class="transition ease-out duration-100"
                              enter-from-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-from-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95">
                              <MenuItems
                                   class="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                   <MenuItem v-for="relationship in client.relationship" :key="relationship"
                                        v-slot="{ active }">
                                   <a href="#"
                                        :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{
                                             relationship }}</a>
                                   </MenuItem>
                              </MenuItems>
                         </transition>
                    </Menu>
               </div>
          </li>
     </ul>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon, CalculatorIcon, BugAntIcon, BeakerIcon, LanguageIcon, GlobeEuropeAfricaIcon, PhotoIcon, RocketLaunchIcon, HeartIcon, CommandLineIcon } from '@heroicons/vue/20/solid'

const Courses = [
     {
          id: 1,
          name: 'Matematicas',
          icon: CalculatorIcon,
          relationship: ['Álgebra', 'Cálculo', 'Geometria', 'Trigonometría']

     },
     {
          id: 2,
          name: 'Biología',
          icon: BugAntIcon,
          relationship: ['Ciencias Vida', 'Anatomía', 'Genética', 'Biología Molecular']

     },
     {
          id: 3,
          name: 'Química',
          icon: BeakerIcon,
          relationship: ['Química 1', 'Química General', 'Química Organica', 'Bioquímica']

     },
     {
          id: 4,
          name: 'Física',
          icon: RocketLaunchIcon,
          relationship: ['Fisica Clasica', 'Espacio', 'Fisica Moderna', 'Relatividad']
     },
     {
          id: 5,
          name: 'Arte',
          icon: PhotoIcon,
          relationship: ['Fotografía', 'Guitarra', 'Piano', 'Dibujo']

     },
     {
          id: 6,
          name: 'Idiomas',
          icon: LanguageIcon,
          relationship: ['Español', 'Ingles', 'Alemán', 'Catalán']

     },
     {
          id: 7,
          name: 'Salud',
          icon: HeartIcon,
          relationship: ['ITS', 'Corazón', 'Cuerpo Humano', 'Virus']
     },
     {
          id: 8,
          name: 'Historia',
          icon: GlobeEuropeAfricaIcon,
          relationship: ['WWI', 'WWII', 'Guerra Fria', 'Imperio Romano']
     },
     {
          id: 9,
          name: 'Informatica',
          icon: CommandLineIcon,
          relationship: ['Python', 'Java', 'JavaScript', 'Arduino']
     },
]
</script>
