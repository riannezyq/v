<template>
  <div class="service-nav">
    <div 
      class="nav-item" 
      v-for="(item, idx) in serviceNavItems" 
      :key="idx"
      @click="selectNavItem(item.name)"
      :class="{ active: activeNavItem === item.name }"
    >
      <div class="icon"><img src="@/assets/jianguan.png" alt="" class="jianguan"></div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const serviceNavItems = ref([
  { name: '国别法规' },
  { name: '国际条约' },
  { name: '数据指南' },
  { name: '实施案例' },
  { name: '出口法规监管网络' }
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