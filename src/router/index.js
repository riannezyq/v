import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegulationComparison from '../views/RegulationComparison.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/regulation-comparison', component: RegulationComparison }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router