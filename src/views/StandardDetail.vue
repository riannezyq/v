<template>
  <div class="standard-detail-container">
    <Header />
    <Banner />
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="/">首页</a> > 
      <a href="/standards">实施案例</a> > 
      <span>案例详情</span>
    </div>

    <!-- Standard Header -->
    <div class="standard-header">
      <h1>{{ standard.title }}<span class="new-tag">新国标</span></h1>
      <p class="english-title">{{ standard.englishTitle }}</p>
      
      <div class="meta-info">
        <div><span>标准领域：</span>{{ standard.standardScope }}</div>
        <div><span>代替标准编号：</span>{{ standard.replaceStandard }}</div>
        <div><span>发布日期：</span>{{ standard.publishDate }}</div>
        <div><span>实施日期：</span>{{ standard.implementDate }}</div>
        <div><span>起草单位：</span>{{ standard.draftUnit }}</div>
      </div>

      <div class="header-actions">
        <button class="btn btn-outline">订阅</button>
        <button class="btn btn-outline" @click="handleDownload('full')">下载</button>
        <button class="btn btn-outline">收藏</button>
      </div>
    </div>

    <!-- Standard Content -->
    <div class="standard-content" v-html="standard.content"></div>

    <!-- Download Links -->
    <div class="download-section">
      <div class="download-item" v-for="file in downloadFiles" :key="file.name">
        <a :href="`/api/standards/download/${file.url}`" class="download-link">
          <i class="icon-pdf"></i> {{ file.name }}
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Banner from '@/components/Banner.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const standard = ref({})
const downloadFiles = ref([
  { name: "适配新技术删除机械连接强制条款.pdf", url: "adapt-new-tech.pdf" },
  { name: "适配新技术删除机械连接强制条款.pdf", url: "steering-control.pdf" },
  { name: "适配新技术删除机械连接强制条款.pdf", url: "scope-relation.pdf" },
  { name: "适用范围与替代关系.pdf", url: "scope-relation.pdf" },
  { name: "适用范围与替代关系.pdf", url: "scope-relation.pdf" },
  { name: "适配新技术删除机械连接强制条款.pdf", url: "adapt-new-tech.pdf" },
  { name: "适配新技术删除机械连接强制条款.pdf", url: "steering-control.pdf" },
  { name: "适配新技术删除机械连接强制条款.pdf", url: "scope-relation.pdf" },
  { name: "适用范围与替代关系.pdf", url: "scope-relation.pdf" }
])

onMounted(() => {
  const title = route.params.title
  axios.get(`/api/standards/${title}`)
    .then(res => standard.value = res.data)
    .catch(err => console.error(err))
})

const handleDownload = (type) => {
  if (type === 'full') {
    window.open(`/api/standards/download/${standard.value.title}.pdf`, '_blank')
  }
}
</script>

<style scoped>
.standard-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.breadcrumb {
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}
.standard-header h1 {
  font-size: 24px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.new-tag {
  background: #ff7d00;
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 10px;
}
.english-title {
  color: #999;
  margin-bottom: 20px;
}
.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}
.header-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}
.standard-content {
  line-height: 1.8;
  margin-bottom: 40px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 4px;
}
.download-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}
.download-link {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
  color: #165DFF;
  text-decoration: none;
}
.download-link:hover {
  background: #e8f3ff;
}
.icon-pdf {
  margin-right: 8px;
  color: #e53935;
}
</style>