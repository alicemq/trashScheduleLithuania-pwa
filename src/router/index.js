import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ICalFeed from '@/components/feed/ICalFeed.vue'
import PrintView from '@/views/PrintView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/generate',
      name: 'generate',
      component: () => import('../views/GenerateView.vue')
    },
    {
      path: '/print',
      name: 'print',
      component: PrintView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: () => import('../views/Changelog.vue')
    },
    {
      path: '/feed/ical',
      name: 'ical-feed',
      component: ICalFeed
    }
  ]
})

export default router
