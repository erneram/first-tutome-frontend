<template>
     <div v-for="(person, index) in user" :key="index">
          <!-- Profile Section -->
          <div class="bg-white p-6">
               <div class="flex items-center">
                    <div class="flex-shrink-0">
                         <img class="mx-auto rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-50 lg:w-50"
                              :src="person.imageUrl" alt="" />
                    </div>
                    <div class="ml-6">
                         <div v-if="props.isTutor" class="flex items-center">
                              <StarIcon v-for="item in person.rate" :key="item" class="h-10 w-10 text-yellow-400" />
                         </div>
                         <div class="text-xl font-bold">{{ person.name }}</div>
                         <div class="mt-2 text-gray-600">{{ person.career }}</div>
                         <div class="text-gray-600">{{ person.courses }}</div>
                    </div>
               </div>
          </div>
          <!-- Contact Section -->
          <div v-if="props.visitorView" class="mt-6 bg-white p-6 rounded-lg shadow-md">
               <div class="text-xl font-bold mb-4">Contactar para</div>
               <div class="flex w-full space-x-4"></div>
               <div class="flex flex-center">
                    <input type="text" placeholder="¿En que necesitas ayuda?" class="w-full p-2 border rounded-md" />
                    <input type="date" class="ml-2 p-2 border rounded-md" />
               </div>
               <div class="w-fill flex justify-center">
                    <button
                         class="mt-2 bg-green-600 text-white rounded-md px-2 py-2 font-semibold border-green-700 hover:bg-green-700">Enviar!</button>
               </div>
          </div>

          <!-- Calendar Section -->
          <div v-if="!props.visitorView" class="mt-5 max-h-64 md:max-h-96 lg:max-h-[calc(100vh-200px)] overflow-y-auto">
               <UserCalendar />
          </div>

          <!-- Comments Section -->
          <div v-if="props.visitorView" class="mt-6 bg-white p-6 rounded-lg shadow-md">
               <div class="text-xl font-bold mb-4">Comentarios</div>
               <div class="bg-gray-100 p-4 rounded-md mb-4 flex items-start">
                    <div class="flex-shrink-0">
                         <img class="mx-auto rounded-full h-10 w-10" :src="person.imageUrl" alt="" />
                    </div>
                    <div class="ml-6">
                         <div>{{ person.comments }}</div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import UserCalendar from './UserCalendar.vue';

const props = defineProps({
     isTutor: {
          type: Boolean,
          default: false
     },
     visitorView: {
          type: Boolean,
          default: false
     }
})

const user = [
     {
          name: 'Francisco Del Valle',
          courses: 'Pensamiento Cuantitativo, Calculo 1, Calculo 2',
          career: 'Licenciatura en Ciencias de la Computacion y Tecnologias de la Informacion',
          rate: 5,
          imageUrl:
               'src/assets/no-profile-picture-15257.png',
          comments: 'Quiero dar un enorme agradecimiento a mi tutor de Cálculo 1 porque gracias a sus increíbles tutorías logré sacar 100 en mi examen. Es impresionante cómo puede hacer que cosas tan complicadas parezcan sencillas. Siempre tiene una manera clara y paciente de explicar cada tema, y no importa cuántas preguntas tenga, siempre está dispuesto a ayudarme. Además, su entusiasmo por la materia hace que las clases sean interesantes y hasta divertidas. De verdad, sin su ayuda, no creo que hubiera podido lograrlo. ¡Mil gracias por todo el apoyo y por hacer que aprender Cálculo sea mucho más fácil y ameno!'
     },
]
</script>