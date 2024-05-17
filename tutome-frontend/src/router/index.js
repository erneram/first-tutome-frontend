import { createRouter, createWebHistory } from 'vue-router'
import UserView from '@/views/UserView.vue'
import TutorView from '@/views/TutorView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeScreen from '@/views/HomeScreen.vue'
import NavigationView from '@/views/NavigationView.vue'
import CoursesView from '@/views/CoursesView.vue'

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
          {
               path: '/',
               component: NavigationView,
               children: [
                    {
                         path: '/home',
                         component: HomeScreen
                    },
                    {
                         path: '/tutor',
                         component: TutorView
                    },
                    {
                         path: '/student',
                         component: UserView
                    },
                    {
                         path: '/courses',
                         component: CoursesView
                    },
               ]
          },
          {
               path: '/login',
               component: LoginView
          },
     ]
})

export default router