import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/world',
    name: 'World',
    component: () => import( '../views/World.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import( '../views/Characters.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import( '../views/Events.vue')
  },
  {
    path: '/lore',
    name: 'Lore',
    component: () => import( '../views/Lore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
