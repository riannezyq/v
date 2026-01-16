import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegulationComparison from '../views/RegulationComparison.vue'
import CaseList from '../views/CaseList.vue'

const routes = [
  { path: '/Home', component: Home },
  { path: '/RegulationComparison', component: RegulationComparison },
  { path: '/CaseList', component: CaseList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router