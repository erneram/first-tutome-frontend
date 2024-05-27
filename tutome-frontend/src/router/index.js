import { createRouter, createWebHistory } from 'vue-router'
import TutorProfileView from '@/views/TutorProfileView.vue'
import TutorsView from '@/views/TutorsView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeScreen from '@/views/HomeScreen.vue'
import NavigationView from '@/views/NavigationView.vue'
import CoursesView from '@/views/CoursesView.vue'
import CommunityView from '@/views/CommunityView.vue'
import UserProfileView from '@/views/UserProfileView.vue'

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
          {
               path: '/',
               component: NavigationView,
               redirect: '/home',
               children: [
                    {
                         path: '/home',
                         component: HomeScreen
                    },
                    {
                         path: '/tutors',
                         component: TutorsView
                    },
                    {
                         path: '/courses',
                         component: CoursesView
                    },
                    {
                         path: '/community',
                         component: CommunityView
                    },
                    {
                         path: '/profile',
                         component: UserProfileView
                    },
                    {
                         path: '/tutor',
                         component: TutorProfileView
                    }
               ]
          },
          {
               path: '/login',
               component: LoginView
          },
     ]
})

export default router