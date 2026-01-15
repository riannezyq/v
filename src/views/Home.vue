<script setup>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import ServiceNav from '../components/ServiceNav.vue'
import ServiceRange from '../components/ServiceRange.vue'
import ContentCards from '../components/ContentCards.vue'
import CaseStudies from '../components/CaseStudies.vue'
import Footer from '../components/Footer.vue'

import { ref } from 'vue'
const searchQuery = ref('')
const activeNav = ref('法规')
const quickTags = ref(['热门搜索','网络安全','数据安全','隐私标记','个人信息保护','数据安全管理'])

const handleSearch = () => {
  alert(`搜索关键词: ${searchQuery.value}`)
}

const changeNav = (navName) => {
  activeNav.value = navName
}
</script>

<template>
  <div class="home-page">
    <Header />
    <Banner/>
    <ServiceNav />
    <ServiceRange />
    <ContentCards />
    <CaseStudies />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.home-page { width:100%; background:#E4F1FE; }
.quick-tags { display:flex; gap:0.5rem; flex-wrap:wrap; }
.tag-btn { padding:0.3rem 0.8rem; background:#e6f7ff; color:#00509d; border:none; border-radius:4px; font-size:0.8rem; cursor:pointer; }
.tag-btn.active { background:#00509d; color:white; }
</style>