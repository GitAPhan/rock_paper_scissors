import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import GamePage from '@/views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/gametime',
    name: 'GamePage',
    component: GamePage
  }
]

const router = new VueRouter({
  routes
})

export default router
