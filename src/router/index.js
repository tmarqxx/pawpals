import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import PetDetail from '@/views/PetDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pet/:id',
    name: 'Pet',
    component: PetDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
