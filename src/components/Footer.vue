<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img src="@/assets/logo.png" alt="中汽中心" class="logo-img" />
        <span class="logo-text">{{ footerBrandName }}</span>
      </div>

      <div class="friendship-links">
        <div class="link-title-bar">
          <div class="line"><img src="@/assets/yejiaoline1.png" alt=""></div>
          <h4>{{ linkTitle }}</h4>
          <div class="line"><img src="@/assets/yejiaoline2.png" alt=""></div>
        </div>

        <div class="link-groups">
          <div class="link-col" v-for="(linkGroup, index) in friendLinks" :key="index">
            <a 
              v-for="(link, linkIndex) in linkGroup" 
              :key="linkIndex"
              :href="link.url" 
              target="_blank"
              class="footer-link"
              @mouseover="hoverLink = link.name"
              @mouseleave="hoverLink = null"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="contact-info">
        <span v-for="(contact, idx) in contactInfo" :key="idx">{{ contact }}</span>
      </div>

      <div class="copyright">{{ copyrightText }}</div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'


const footerLogo = ref('@/assets/logo.png') 
const footerBrandName = ref('中汽中心')
const linkTitle = ref('友情链接')

const friendLinks = ref([
  [
    { name: '中国汽车技术研究中心有限公司', url: '#' },
    { name: '国家标准化管理委员会', url: '#' },
    { name: '工业与信息化部人才交流中心', url: '#' }
  ],
  [
    { name: '中汽数据有限公司', url: '#' },
    { name: '中国汽车工业信息网', url: '#' },
    { name: '中国智能交通协会', url: '#' }
  ],
  [
    { name: 'IAMTS官网', url: '#' },
    { name: '中国汽车工业协会', url: '#' },
    { name: '车载产品安全漏洞专业库', url: '#' }
  ],
  [
    { name: 'C-ASAM中文官网', url: '#' },
    { name: '中国机械工业联合会', url: '#' }
  ]
])

const contactInfo = ref([
  '联系电话: 022-60633170',
  '联系邮箱: xiaoxiao@catarc.cn',
  '地址: 上海市浦东新区张江高科技园区' 
])

const hoverLink = ref(null)

const copyrightText = computed(() => {
  const currentYear = new Date().getFullYear()
  return `${currentYear} 中汽数据中心 版权所有 | 京ICP备17070993号-12`
})


const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>

.app-footer {
  width: 100%;
  background: #00509d; 
  color: #ffffff;
  padding: 20px 0;
  margin-top: 40px;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}
.logo-img {
  width: 42px;
  height: auto;
}

.friendship-links {
  margin-bottom: 15px;
}
.link-title-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 12px;
}

.link-title-bar h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}
.link-groups {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.link-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
.footer-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #ffd166; /* subtle gold hover color (matches your app's theme) */
  text-decoration: none;
}
.contact-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 14px;
  padding-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.copyright {
  font-size: 12px;
  color: #cccccc;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>