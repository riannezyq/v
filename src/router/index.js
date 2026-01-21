import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegulationComparison from '../views/RegulationComparison.vue'
import CaseList from '../views/CaseList.vue'
import StandardDetail from '../views/StandardDetail.vue'

const routes = [
   { path: '/', redirect:'/Home' },
  { path: '/Home', component: Home },
  { path: '/RegulationComparison', component: RegulationComparison },
  { path: '/CaseList', component: CaseList },
  { path: '/StandardDetail', component: StandardDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
