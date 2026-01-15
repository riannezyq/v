<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo-area" @click="goHome">
        <img src="@/assets/logo.png" alt="全球数据治理合规工具库-LOGO" class="logoimg" />
        <span class="logotext">|全球数据治理合规工具库</span>
      </div>

      <div class="user-area">
        <div class="user">
          <img src="@/assets/yonghu.png" alt="user" >
        <span v-if="isUserLoggedIn" class="user-info">{{ userInfo }}</span>
        </div> 
        <p class="separator">|</p>

        <div class="lang">
          <span 
          class="lang-switch" 
          @click="toggleLanguage"
          :class="{ active: currentLang === 'zh' }" style="font-weight: bold;">
            {{ langText }}
          </span>
        </div>

        <p class="separator">|</p>
        
        <div class="cn">
          <img src="@/assets/china.png" alt="flag" class="icon">
          <span class="country" style="font-weight: bold;">{{ currentCountry }}</span>
        </div>
 
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' 

const router = useRouter()

const isUserLoggedIn = ref(true) 
const userInfo = ref('用户: 奇数公司')

const currentLang = ref('zh') 
const langText = ref('中文 / EN')

const currentCountry = ref('中国')

const goHome = () => {
  router.push('/') 
}

const toggleLanguage = () => {
  if (currentLang.value === 'zh') {
    currentLang.value = 'en'
    langText.value = 'CN / English'
    systemName.value = 'Global Data Governance Compliance Toolkit'
    currentCountry.value = 'China'
  } else {
    currentLang.value = 'zh'
    langText.value = '中文 / EN'
    systemName.value = '全球数据治理合规工具库'
    currentCountry.value = '中国'
  }
  console.log('切换语言为:', currentLang.value)
}
</script>

<style scoped>
.app-header {
  width: 100%;
  background: white;
  color: #00509d;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
}
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; 
}
.logo-area {
  left: 0%;
  display: flex;
  align-items: center;
  cursor: pointer; 
}
.logoimg {
  height: 36px; 
  width: auto;
  object-fit: scale-down;
}
.logotext {
  font-weight: bold;
  font-size: large;
  margin-left: 6px;
}

.user-area {
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: right; 
  gap: 0.5rem; 
}
.user {
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 4px; 
}
.user img {
  height: 16px; 
  width: auto;
}
.separator {
  margin: 0; 
  line-height: 1; 
}
.lang {
  white-space: nowrap;
}
.lang-switch {
  cursor: pointer;
  transition: color 0.2s ease;
}
.lang-switch.active {
  color: #00509d;
  font-weight: 500;
}
.cn {
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 4px; 
}
.cn .icon {
  height: 16px; 
  width: auto;
}
.country {
  white-space: nowrap;
}
</style>