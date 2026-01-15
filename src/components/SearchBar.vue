<template>
  <div class="search-section">
    <div class="searchBarWrapper">
      <div class="search-bar">
        <select class="search-select">
          <option>全球</option>
        </select>
        <select class="search-select">
          <option>法律法规</option>
        </select>
        <input type="text" v-model="searchKeyword" placeholder="搜索任何合规信息" class="search-input"
        />
        <button class="search-btn" @click="handleSearch"><img src="@/assets/sousuo.png" alt="">搜索</button>
      </div>

    </div>
    
    <div class="quick-tags">
      <button class="tag-btn" @click="activeTag = item" :class="{active: activeTag === item}" v-for="item in tagList" :key="item">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchKeyword = ref('')

const activeTag = ref('热门搜索')

const tagList = ref([
  '热门搜索',
  '网络安全',
  '数据安全',
  '隐私标记',
  '个人信息保护',
  '数据安全管理'
])

const handleSearch = () => {
  if(searchKeyword.value) {
    console.log('执行搜索:', searchKeyword.value)
  } else {
    alert('请输入搜索关键词')
  }
}
</script>

<style scoped>
.search-section {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 1000px;
  z-index: 10;
}
.searchBarWrapper{
  width: 900px;
  height: 50px;
  border-radius: 8px;
  background: #ffffff40;
  padding: 5px;
  margin-bottom: 15px;
}

.search-bar {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  align-items: center;
}

.search-select {
  width: 110px;
  height: 38px;
	padding: 0 0.6rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.search-input {
  flex: 1;
  height: 38px;
	padding: 0 1rem;
  border: none;
	border-radius: 4px;
	font-size: 0.9rem;
	color: #333;
	background: #ffffff;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05);
	outline: none;
}

.search-btn {
  display: inline;
  width: 90px;
	height: 38px;
	background: #FF9900; 
	color: #ffffff;
	border: none;
	border-radius: 4px;
	font-size: 0.9rem;
	cursor: pointer;
	transition: background 0.2s ease;
}
.search-btn:hover {
  background: #e68a00;
}
.search-btn img{
  padding-right: 3px;
}

.quick-tags {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.tag-btn {
  background: url('@/assets/renmenshuju.png') no-repeat center / 100% 100%;
  background-size: cover;
  background-position: center;

  color: #00509D; 
  font-size: 0.8rem;
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.tag-btn.active {
  background: url('@/assets/renmen.png') no-repeat center / 100% 100%;
  color: #FFFFFF; 
}
</style>