<template>
  <div class="bg-white py-16 sm:py-32">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis tutores</h2>
    </div>
    <div class="mx-auto max-w-7xl ">
      <div class="max-h-[calc(100vh-200px)] overflow-y-auto">
        <ul role="list"
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-8 text-center lg:max-w-none">
          <li v-for="person in people" :key="person.name" class="flex flex-col items-center">
            <img class="mx-auto rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-14 lg:w-14"
              :src="person.imageUrl" alt="" />
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

const people = [
  {
    name: 'Ernesto Ascencio',
    role: 'Pensamiento Cuantitativo',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Jose Carlos',
    role: 'Biologia 1',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Hugo Barillas',
    role: 'Calculo 2',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Josue Marroquin',
    role: 'Infraestructuras 1',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Maria Pineda',
    role: 'Calculo 1',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Humberto Garcia',
    role: 'Fisica 1',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Juan Lucas',
    role: 'Fisica 2',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  {
    name: 'Gerardo Guerra',
    role: 'Retos Ambientales',
    imageUrl:
      'src/assets/no-profile-picture-15257.png',
  },
  // More people...
]
</script>