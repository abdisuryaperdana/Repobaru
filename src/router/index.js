import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Project',
      name: 'Project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('@/views/Contact.vue')
    },
    {
      path: '/project1',
      name: 'project1',
      component: ()=> import('@/views/project1View.vue')
    },
    {
      path: '/project2',
      name: 'project2',
      component: ()=> import('@/views/project2View.vue')
    },
    {
      path: '/project3',
      name: 'project3',
      component: ()=> import('@/views/project3View.vue')
    }
  ]
})

export default router
