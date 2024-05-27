<template>
     <div class="px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
               <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Todos los tutores</h1>
               </div>
               <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex ">
                    <MagnifyingGlassIcon class="mt-0.5 mr-0.5 h-5 w-5" />
                    <input type="text" placeholder="Buscar...">
               </div>
          </div>
          <div class="mt-8 flow-root">
               <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                         <table class="min-w-full divide-y divide-gray-300">
                              <thead>
                                   <tr>
                                        <th scope="col"
                                             class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                             Nombre
                                        </th>
                                        <th scope="col"
                                             class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cursos
                                        </th>
                                        <th scope="col"
                                             class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actividad
                                        </th>
                                        <th scope="col"
                                             class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Puntaje
                                        </th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                             <span class="sr-only">Edit</span>
                                        </th>
                                   </tr>
                              </thead>
                              <tbody class="divide-y divide-gray-200 bg-white">
                                   <tr v-for="person in people" :key="person.email">
                                        <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                             <div class="flex items-center">
                                                  <div class="h-11 w-11 flex-shrink-0">
                                                       <img class="h-11 w-11 rounded-full" :src="person.image" alt="" />
                                                  </div>
                                                  <div class="ml-4">
                                                       <div class="font-medium text-gray-900">{{ person.name }}</div>
                                                       <div class="mt-1 text-gray-500">{{ person.career }}</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                             <div class="text-gray-900">{{ person.courses }}</div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                             <span v-if="person.active"
                                                  class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                  Activa
                                             </span>
                                             <span v-if="!person.active"
                                                  class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                                  No Activa
                                             </span>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ person.grades
                                             }}
                                        </td>
                                        <td
                                             class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                             <a href="/tutor" class="text-green-600 hover:text-green-900">
                                                  Visitar
                                                  <span class="sr-only">, {{ person.grades }}
                                                  </span>
                                             </a>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const people = [
     {
          name: 'Jimena Díaz',
          courses: 'Química General, Biología 1, Pensamiento Cuantitativo',
          career: 'Ciencias de la Computación',
          grades: '87',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Carlos López',
          courses: 'Matemáticas Discretas, Física 1, Programación 1',
          career: 'Ingeniería en Software',
          grades: '92',
          active: false,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'María Pérez',
          courses: 'Algoritmos, Estructuras de Datos, Cálculo 2',
          career: 'Ciencias de la Computación',
          grades: '85',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Juan García',
          courses: 'Redes de Computadoras, Sistemas Operativos, Inteligencia Artificial',
          career: 'Ingeniería en Sistemas',
          grades: '90',
          active: false,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Ana Martínez',
          courses: 'Programación 2, Bases de Datos, Análisis de Algoritmos',
          career: 'Ciencias de la Computación',
          grades: '88',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'José Hernández',
          courses: 'Química Orgánica, Biología 2, Física 2',
          career: 'Bioquímica',
          grades: '84',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Laura Gómez',
          courses: 'Cálculo 1, Programación 1, Álgebra Lineal',
          career: 'Matemáticas',
          grades: '91',
          active: false,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Miguel Sánchez',
          courses: 'Física Moderna, Termodinámica, Química Física',
          career: 'Física',
          grades: '89',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Elena Ramírez',
          courses: 'Ingeniería de Software, Gestión de Proyectos, Seguridad Informática',
          career: 'Ingeniería en Software',
          grades: '93',
          active: false,
          image: 'src/assets/no-profile-picture-15257.png',
     },
     {
          name: 'Diego Torres',
          courses: 'Ciencias Ambientales, Ecología, Biología Marina',
          career: 'Biología',
          grades: '86',
          active: true,
          image: 'src/assets/no-profile-picture-15257.png',
     },
]
</script>