<template>
     <div class="flex h-screen">
          <!-- Sidebar de Cursos -->
          <div class="w-1/4 bg-gray-100 p-4 overflow-y-auto">
               <div class="flex items-center text-xl font-bold mb-4 mr-2">
                    <GlobeAltIcon class="text-green-600 h-6 w-6 mr-2" />Comunidad
               </div>
               <div class="text-xl font-bold mb-4">Cursos</div>
               <ul>
                    <li v-for="course in Courses" :key="course.id" class="mb-4">
                         <div @click="toggle(course.id)" class="flex items-center cursor-pointer">
                              <component :is="course.icon" class="h-6 w-6 mr-2" />
                              <div class="font-semibold">{{ course.name }}</div>
                         </div>
                         <transition name="slide-fade">
                              <ul v-if="course.id === activeCourse" class="ml-8 mt-2">
                                   <li v-for="rel in course.relationship" :key="rel" class="text-gray-600">{{ rel }}
                                   </li>
                              </ul>
                         </transition>
                    </li>
               </ul>
          </div>

          <!-- Sección Principal -->
          <div class="w-3/4 p-4 flex flex-col">
               <!-- Título -->
               <div class="text-2xl font-bold mb-4">Comunidad</div>

               <!-- Comentarios -->
               <div class="flex-1 overflow-y-auto">
                    <div v-for="comment in comments" :key="comment.id" class="bg-white p-4 rounded-lg shadow-md mb-4">
                         <div class="flex items-center">
                              <img class="h-8 w-8 rounded-full mr-4" :src="comment.imageUrl" alt="User Image" />
                              <div class="font-semibold">{{ comment.name }}</div>
                         </div>
                         <div class="mt-2">{{ comment.text }}</div>
                    </div>
               </div>

               <!-- Input Fijo -->
               <div class="fixed bottom-4 right-4 w-96 bg-white p-4 rounded-lg shadow-md flex items-center">
                    <input type="text" placeholder="Pregunta algo..." class="flex-1 p-2 border rounded-md mr-2" />
                    <button class="bg-blue-500 text-white p-2 rounded-md">Enviar</button>
               </div>
          </div>
     </div>
</template>

<script setup>
import { ref } from 'vue'
import { GlobeAltIcon, CalculatorIcon, BugAntIcon, BeakerIcon, LanguageIcon, GlobeEuropeAfricaIcon, PhotoIcon, RocketLaunchIcon, HeartIcon, CommandLineIcon } from '@heroicons/vue/20/solid'
// Datos de ejemplo
const Courses = [
     { id: 1, name: 'Matematicas', icon: CalculatorIcon, relationship: ['Álgebra', 'Cálculo', 'Geometria', 'Trigonometría'] },
     { id: 2, name: 'Biología', icon: BugAntIcon, relationship: ['Ciencias Vida', 'Anatomía', 'Genética', 'Biología Molecular'] },
     { id: 3, name: 'Química', icon: BeakerIcon, relationship: ['Química 1', 'Química General', 'Química Organica', 'Bioquímica'] },
     { id: 4, name: 'Física', icon: RocketLaunchIcon, relationship: ['Fisica Clasica', 'Espacio', 'Fisica Moderna', 'Relatividad'] },
     { id: 5, name: 'Arte', icon: PhotoIcon, relationship: ['Fotografía', 'Guitarra', 'Piano', 'Dibujo'] },
     { id: 6, name: 'Idiomas', icon: LanguageIcon, relationship: ['Español', 'Ingles', 'Alemán', 'Catalán'] },
     { id: 7, name: 'Salud', icon: HeartIcon, relationship: ['ITS', 'Corazón', 'Cuerpo Humano', 'Virus'] },
     { id: 8, name: 'Historia', icon: GlobeEuropeAfricaIcon, relationship: ['WWI', 'WWII', 'Guerra Fria', 'Imperio Romano'] },
     { id: 9, name: 'Informatica', icon: CommandLineIcon, relationship: ['Python', 'Java', 'JavaScript', 'Arduino'] }
]

const comments = ref([
     { id: 1, name: 'Mateo Lucas', imageUrl: 'src/assets/no-profile-picture-15257.png', text: 'Estoy teniendo problemas para entender cómo se aplica la segunda ley de Newton en problemas de dinámica. Por ejemplo, si tengo un bloque de 5 kg en una superficie horizontal sin fricción, y se le aplica una fuerza constante de 20 N hacia la derecha, ¿cómo calculo la aceleración del bloque y qué significan realmente las fuerzas en este contexto?' },
     { id: 2, name: 'Ricardo Giron', imageUrl: 'src/assets/no-profile-picture-15257.png', text: 'Estoy tratando de entender cómo usar las integrales para encontrar el área bajo una curva. Si tengo una función que describe una parábola y quiero saber el área entre el eje x y la curva desde el punto donde x es 0 hasta donde x es 3, ¿cómo debería hacerlo? ¿Podrías explicarme los pasos que debo seguir para calcular esta área usando integrales?' },
     { id: 3, name: 'Valentino Arriaga', imageUrl: 'src/assets/no-profile-picture-15257.png', text: 'Estoy estudiando la Revolución Francesa y tengo algunas dudas sobre las causas principales que llevaron a este evento. ¿Podrías explicar cuáles fueron las razones económicas, sociales y políticas que desencadenaron la Revolución Francesa? Me gustaría entender cómo cada una de estas razones contribuyó al estallido del conflicto en 1789.' },
     { id: 4, name: 'Cristiano Ronaldo', imageUrl: 'src/assets/no-profile-picture-15257.png', text: 'Estoy investigando sobre la Segunda Guerra Mundial y me gustaría entender mejor las principales causas que llevaron al estallido del conflicto. ¿Podrías explicar cómo factores como el Tratado de Versalles, la Gran Depresión, y el ascenso de los regímenes totalitarios en Alemania e Italia contribuyeron al inicio de la guerra en 1939?' },
     { id: 5, name: 'Leonel Messi', imageUrl: 'src/assets/no-profile-picture-15257.png', text: 'Estoy estudiando sobre las estrellas y me gustaría entender mejor su ciclo de vida. ¿Podrías explicar cuáles son las etapas principales en la formación y evolución de una estrella? Además, ¿qué procesos ocurren en cada etapa y cómo varían las características de las estrellas a lo largo de su ciclo de vida?' },
])

const activeCourse = ref(null)

const toggle = (id) => {
     activeCourse.value = activeCourse.value === id ? null : id
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
     transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active in <2.1.8 */
     {
     transform: translateY(10px);
     opacity: 0;
}
</style>