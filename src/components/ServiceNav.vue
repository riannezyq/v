<template>
  <div class="service-nav">
    <RouterLink 
      class="nav-item" 
      v-for="(item, idx) in serviceNavItems" 
      :key="item.id" 
      :to="item.path" 
      :class="{ active: activeNavItem === item.name }"
      @click="selectNavItem(item.name)"
    >
      <div class="icon"><img src="@/assets/jianguan.png" alt="" class="jianguan"></div> 
      <span>{{ item.name }}</span>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const serviceNavItems = ref([
  { id: 1, name: '国别法规'},
  { id: 2, name: '国际条约'},
  { id: 3, name: '数据指南'},
  { id: 4, name: '实施案例', path: '/CaseList' },
  { id: 5, name: '出口法规监管网络', path: '/RegulationComparison'}
])
const activeNavItem = ref('国别法规')

const selectNavItem = (name) => {
  activeNavItem.value = name
}
</script>

<style scoped>
.service-nav {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: 1rem auto;
  padding: 1rem 0;
  border-bottom: 1px solid #e6f7ff;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  color: #333;
  text-decoration: none; 
 }
.nav-item.active {
  color: #00509d;
  font-weight: 600;
}
.nav-item.active .icon {
  background: transparent;
  color: white;
}
.jianguan{
  width: 70px;
  height: 70px;
}
</style>