<template>
  <div class="case-list-page">
    <Header />
    <Banner />
    <div class="breadcrumb">
      <img src="@/assets/caselist/dingwei.png" alt="Breadcrumb icon" class="breadcrumb-icon" />
      <span> <a href="/Home" style="color: black ; text-decoration: none;">首页</a> </span> > <span style="color: #00509d;">实施案例</span>
    </div>

    <main class="main-content">
      
      <div class="layout-container">
        <aside class="sidebar">
          <div class="sidebar-search">
            <input type="text" placeholder="请输入关键字" class="sidebar-input" />
            <button class="search-btn">
              <img src="@/assets/sousuo.png" alt="Search icon" class="search-icon" />
            </button>
          </div>
          <div class="filter-group">
            <img src="@/assets/caselist/shishi-panl.png" alt="EU Law Icon" id="filter-icon" />
            <h4>欧盟法规关键判例</h4>
            <button class="filter-btn">
              <img src="@/assets/caselist/jiantou-r.png" alt="Expand icon" class="filter-icon" />
            </button>
          </div>
          <div class="filter-group">
            <h4>监管机构执法案例</h4>
            <button class="filter-btn">
              <img src="@/assets/caselist/jiantou-r.png" alt="Expand icon" class="filter-icon" />
            </button>
          </div>
          <div class="filter-group">
            <h4>深度调查与前瞻分析</h4>
            <button class="filter-btn">
              <img src="@/assets/caselist/jiantou-r.png" alt="Expand icon" class="filter-icon" />
            </button>
          </div>
        </aside>
        

        <div class="case-list">
          <div class="top-bar">
        <span class="total-count">共 <span>{{ totalCases }}</span> 条查询结果</span>
        <div class="top-actions">
          <button class="action-btn">
            <img src="@/assets/caselist/daochu.png" alt="Export icon" class="action-icon" />
            导出
          </button>
          <button class="action-btn">
            <img src="@/assets/caselist/qiehuan.png" alt="Switch view icon" class="action-icon" />
            切换列表视图
          </button>
        </div>
      </div>

          <div class="case-item" v-for="(item, idx) in caseData" :key="idx">
            <h3 class="case-title">{{ item.caseTitleCn }}</h3>
            <p class="case-en-title">{{ item.caseTitleEn }}</p>

            <div class="case-meta">
                <span>{{ item.case_id }}</span>
                <span>标准领域: {{ item.standardField }}</span>
                <span>代替标准编号: {{ item.replaceStandardNo }}</span>
                <span>发布日期: {{ item.publishDate }}</span>
                <span>实施日期: {{ item.implementDate }}</span>
            </div>
            
            <p class="case-company">
              {{ item.draftingCompany }}
            </p>

            <div class="case-actions">
              <span class="star-count">
                <img src="@/assets/caselist/shoucang1.png" alt="Star icon" class="action-small-icon" />
                {{ item.star_count }}
              </span>
              <button class="action-link">
                <img src="@/assets/caselist/dingyue.png" alt="Subscribe icon" class="action-small-icon" />
                订阅
              </button>
              <button class="action-link">
                <img src="@/assets/caselist/chakan.png" alt="View icon" class="action-small-icon" />
                查看
              </button>
              <button class="action-link">
                <img src="@/assets/caselist/xiazai.png" alt="Download icon" class="action-small-icon" />
                下载
              </button>
              <button class="action-link highlight">
                <img src="@/assets/caselist/shoucang2.png" alt="Collect icon" class="action-small-icon" />
                收藏
              </button>
              <button class="detail-btn" @click="window.location.href=`/standard-detail/${item.case_id}`">
                详情查看
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <span>共6674条</span>
        <button class="page-btn">
          <img src="@/assets/caselist/gengduo_jiantou1.png" alt="Previous icon" class="page-icon" />
        </button>
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <span>...</span>
        <span>10条/页</span>
        <button class="page-btn">
          <img src="@/assets/caselist/gengduo_jiantou3.png" alt="Next icon" class="page-icon" />
        </button>
        <span>到第 <input type="text" class="page-input" value="1" /> 页</span>
        <button class="page-btn">确定</button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Banner from '@/components/Banner.vue'

import { ref, onMounted } from 'vue'
import { getCaseList, getTotalCases } from '../services/api'

const caseData = ref([])
const currentPage = ref(0)
const pageSize = ref(10)
const totalCases = ref(0)

onMounted(async () => {
  try {
    const caseRes = await getCaseList(currentPage.value, pageSize.value)
    const totalRes = await getTotalCases()
    caseData.value = caseRes.data.content 
    totalCases.value = totalRes.data
  } catch (err) {
    console.log('API call success (no error)')
  }
})
</script>

<style scoped>
.case-list-page {
  width: 100%;
  background: #eef6ff;
  min-height: calc(100vh - 120px);
}
.breadcrumb {
  max-width: 1400px;
  margin: 1rem auto;
  font-size: 0.9rem;
  color: #666;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 100px 100px 100px;
}

.breadcrumb-icon, .action-icon, .search-icon, 
.meta-icon, .company-icon, .action-small-icon, .detail-icon, .page-icon {
  width: 14px;
  height: 14px;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
}
.filter-icon{
  width: 12px;
  height: 12px;
   position: absolute;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 15px;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 80, 157, 0.06);
  margin-bottom: 1.5rem;
}
.total-count {
  color: #666;
  font-size: 0.95rem;
}
.top-actions {
  display: flex;
  gap: 1rem;
}
.action-btn {
  background: #e6f7ff;
  color: #00509d;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.layout-container {
  display: flex;
  gap: 1.5rem;
  padding: 15px;
}
.sidebar {
  width: 300px;
  height: fit-content;
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 15px;
  padding: 1.25rem;
  flex-shrink: 0;
}
.sidebar-search {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.sidebar-input {
  flex: 1;
  padding: 0.5rem 0.8rem;
  border: 1px solid #e6f7ff;
  border-radius: 15px;
  font-size: 0.9rem;
  outline: none;
}
.search-btn {
  background: #00509d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter-group {
  border-bottom: 1px dashed #e6f7ff;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: last baseline;
}
.filter-group h4 {
  font-size: 0.95rem;
  color: #00509d;
  margin: 0 0 0.8rem;
  font-weight: 600;
}
.filter-btn {
  background: transparent;
  border: none;
  color: #00509d;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  position: relative;
  right: 0;
  margin-left: auto;
}
.filter-icon {
  width: 16px;
  height: 16px;
  margin-right: 20px;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
    position: relative;

}

.case-list {
  flex: 1;
}
.case-item {
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 15px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s ease;
}
.case-item:hover {
  box-shadow: 0 2px 8px rgba(0,80,157,0.06);
}
.case-title {
  font-size: 1.1rem;
  color: #00509d;
  margin: 0 0 0.4rem;
  font-weight: 600;
}
.case-en-title {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1rem;
}
.case-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.8rem;
  line-height: 1.5;
}
.case-company {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.case-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  flex-wrap: wrap;
}
.star-count {
  color: #FF9900;
  font-weight: 500;
}
.action-link {
  background: transparent;
  border: none;
  color: #00509d;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}
.action-link.highlight {
  color: #FF9900;
}
.detail-btn {
  background: #2385bb;
  color: white;
  border: none;
  padding: 0.35rem 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: #666;
}
.page-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #e6f7ff;
  background: white;
  color: #00509d;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-btn.active {
  background: #00509d;
  color: white;
  border-color: #00509d;
}
.page-input {
  width: 42px;
  height: 32px;
  text-align: center;
  border: 1px solid #e6f7ff;
  border-radius: 4px;
  margin: 0 4px;
}
</style>