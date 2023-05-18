import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/login/LoginComponent.vue'
import CoursesView from '../views/courses/CoursesView.vue'
import LibraryView from '../views/library/LibraryView.vue'
import ProfileView from '../views/profile/ProfileView.vue'
import ProgressView from '../views/progress/ProgressView.vue'
import MyClassView from '../views/myclasses/MyclassesView.vue'
import HomeView from '../views/home/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/home',
      component : HomeView,
      children : [
        {
          path : '',
          name : 'Courses',
          component : CoursesView
        },
        {
          path : 'myclass',
          name : 'Myclasses',
          component : MyClassView
        },
        {
          path : 'library',
          name : 'Library',
          component : LibraryView
        },
        {
          path : 'progress',
          name : 'Progress',
          component : ProgressView
        },
    
        {
          path : 'profile',
          name : 'Profile',
          component : ProfileView
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

  ]
})

export default router
