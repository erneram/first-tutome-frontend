<template>
     <div class="flex flex-col items-center justify-center">
          <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               <li v-for="person in displayMoreTutors" :key="person.email"
                    class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                    <div class="flex flex-1 flex-col p-8">
                         <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="person.imageUrl" alt="" />
                         <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
                         <dl class="mt-1 flex flex-grow flex-col justify-between">
                              <div class="flex justify-center mt-2">
                                   <StarIcon v-for="item in person.rate" :key="item" class="h-5 w-5 text-yellow-400" />
                              </div>
                              <dd class="text-sm text-gray-500">{{ person.title }}</dd>
                              <dt class="sr-only">Role</dt>
                              <dd class="mt-3">
                                   <span
                                        class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {{ person.role }}
                                   </span>
                              </dd>
                         </dl>
                    </div>
               </li>
          </ul>
          <div class="mt-4 text-center">
               <button v-if="!showAll" @click="toggleShowAll" class="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Mostrar más
               </button>
               <button v-if="showAll" @click="toggleShowAll" class="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Mostrar menos
               </button>
          </div>
     </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'

const tierTutors = [
     {
          name: 'Jane Cooper',
          title: 'Pensamiento Cuantitativo, Química General',
          role: 'Activa',
          rate: 3,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Ernesto Ascencio',
          title: 'Programación orientada a objetos, Cálculo 1',
          role: 'Activa',
          rate: 5,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Hugo Barillas',
          title: 'Física 2, Física 3',
          role: 'Activa',
          rate: 3,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Jose Lopez',
          title: 'Microeconomía',
          role: 'Activa',
          rate: 4,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Ana Ruiz',
          title: 'Química Orgánica, Biología Molecular',
          role: 'Inactiva',
          rate: 5,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Carlos Gomez',
          title: 'Álgebra Lineal, Cálculo 3',
          role: 'Activa',
          rate: 2,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Laura Fernandez',
          title: 'Estadística, Probabilidad',
          role: 'Inactiva',
          rate: 4,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Miguel Rodriguez',
          title: 'Filosofía, Literatura',
          role: 'Activa',
          rate: 3,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Sofia Alvarez',
          title: 'Historia, Geografía',
          role: 'Inactiva',
          rate: 4,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Diego Torres',
          title: 'Ciencias Ambientales, Ecología',
          role: 'Activa',
          rate: 5,
          imageUrl: 'src/assets/no-profile-picture-15257.png',
     },
]

const showAll = ref(false)
const windowWidth = ref(window.innerWidth)

const toggleShowAll = () => {
     showAll.value = !showAll.value
}

const displayMoreTutors = computed(() => {
     if (windowWidth.value >= 1024) {
          return showAll.value ? tierTutors : tierTutors.slice(0, 4)
     } else {
          return showAll.value ? tierTutors : tierTutors.slice(0, 3)
     }
})

watch(windowWidth, (newWidth) => {
     if (newWidth >= 1024) {
          showAll.value = tierTutors.length <= 4
     } else {
          showAll.value = tierTutors.length <= 3
     }
})

window.addEventListener('resize', () => {
     windowWidth.value = window.innerWidth
})

</script>