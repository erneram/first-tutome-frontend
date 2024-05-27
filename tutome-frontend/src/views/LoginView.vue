<template>
     <div class="min-h-screen flex items-center justify-center bg-gray-100">
          <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
               <h2 class="text-2xl font-bold mb-6 text-center">TutoMe</h2>
               <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                         <label for="email" class="block text-gray-700">Email</label>
                         <input v-model="email" type="email" id="email"
                              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your email" />
                    </div>
                    <div class="mb-6">
                         <label for="password" class="block text-gray-700">Password</label>
                         <input v-model="password" type="password" id="password"
                              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your password" />
                    </div>
                    <button @click="login" type="submit"
                         class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                         Entrar
                    </button>
               </form>
          </div>
     </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const email = ref('');
const password = ref('');
const route = useRouter()
const handleSubmit = () => {
     // Aquí puedes manejar la lógica de inicio de sesión
     console.log('Email:', email.value);
     console.log('Password:', password.value);
     router.push('/home')
};
</script>