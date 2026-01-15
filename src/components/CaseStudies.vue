<template>
  <section class="case-studies">
    <img src="@/assets/实施案例.png" alt={{ sectionTitle }} class="sectionTitle">
    <div class="case-grid">
      <div class="case-card" v-for="(caseItem, idx) in caseStudies" :key="idx">
        <img :src="caseItem.image" :alt="caseItem.title" class="case-img" />
        <h4>{{ caseItem.title }}</h4>
        <p>{{ caseItem.description }}</p>
        <button class="view-btn" @click="viewCase(caseItem.id)"><img src="@/assets/xiangqing.png" alt="" srcset=""></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' 

import case1 from '@/assets/case1.png'
import case2 from '@/assets/case2.png'
import case3 from '@/assets/case3.png'

const router = useRouter()

const sectionTitle = ref('实施案例')
const caseStudies = ref([
  {
    id: 1,
    title: '实施案例名称',
    image: case1,
    description: '实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位。'
  },
  {
    id: 2,
    title: '实施案例名称',
    image: case2,
    description: '实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位。'
  },
  {
    id: 3,
    title: '实施案例名称',
    image: case3,
    description: '实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位实施案例名称描述文字占位。'
  }
])

const viewCase = (caseId) => {
  router.push(`/case/${caseId}`) 
}
</script>

<style scoped>
.case-studies {
  max-width: 1200px;
  margin: 2rem auto;
}
.sectionTitle {
  display: block;
  margin: 0 auto 2rem; 
  width: auto;
}
.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.case-card {
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 1rem;
}
.case-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.case-card h4 {
  padding: 1rem 1rem 0.5rem;
  margin: 0;
  color: #00509d;
}
.case-card p {
  padding: 0 1rem 1rem;
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
.view-btn {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background: #ffffff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  right: 0;
}
.view-btn img{
  position: absolute;
  bottom: 0; 
  right: 0;
}
</style>