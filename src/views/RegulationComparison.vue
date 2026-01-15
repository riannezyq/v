<template>
  <div class="secondary-page">
    <Header />

    <Banner/>

    <div class="breadcrumb">
      <span>首页</span> > <span>出口法规监管网络</span> > <span>成员国法规对比</span>
    </div>

    <main class="main-content">
      <h2>成员国法规对比</h2>
      
      <div class="filter-container">
        <label>国家筛选:</label>
        <select v-model="selectedCountry" class="country-select">
          <option value="all">全部</option>
          <option v-for="country in countryList" :value="country">{{ country }}</option>
        </select>
        <button class="apply-btn" @click="applyFilter">应用筛选</button>
        <button class="reset-btn" @click="resetFilter">重置</button>
      </div>

      <div class="table-diagram-container">
        <div class="table-wrapper">
          <h3>法规数据统计</h3>
          <table class="regulation-table">
            <thead>
              <tr>
                <th>国家</th>
                <th v-for="cat in categoryList" :key="cat">{{ cat }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in tableData" :key="idx">
                <td>{{ row.country }}</td>
                <td 
                  v-for="(val, colIdx) in row.values" 
                  :key="colIdx"
                  :class="{ highlighted: val === 156 }"
                >
                  {{ val }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="diagram-wrapper">
          <h3>网络图展示</h3>
          <div id="networkChart" class="chart-content"></div>
        </div>
      </div>

    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import Banner from '@/components/Banner.vue'

const countryList = ref([
  "United Kingdom", "Germany", "Italy", "The Netherlands", 
  "Spain", "Singapore", "Malaysia", "United Arab Emirates",
  "Argentina", "Philippines"
])
const selectedCountry = ref("all")

const categoryList = ref([
  "法规类别1", "法规类别2", "法规类别3", "法规类别4", 
  "法规类别5", "法规类别6", "法规类别7"
])
const tableData = ref([
  { country: "United Kingdom", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Germany", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Italy", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "The Netherlands", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Spain", values: [2, 3, 2, 156, 10, 8, 15] },
  { country: "Singapore", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Malaysia", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "United Arab Emirates", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Argentina", values: [2, 3, 2, 6, 10, 8, 15] },
  { country: "Philippines", values: [2, 3, 2, 6, 10, 8, 15] }
])

const applyFilter = () => {
  console.log("筛选国家:", selectedCountry.value)
}
const resetFilter = () => {
  selectedCountry.value = "all"
}

onMounted(() => {
  const chart = echarts.init(document.getElementById('networkChart'))
  
  const option = {
    backgroundColor: 'transparent', 
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 1000,    
          edgeLength: 200,    
          gravity: 0.05,      
          layoutAnimation: false 
        },
        roam: false,
        label: {
          show: true,
          position: 'outside', 
          formatter: '{b}',
          fontSize: 12,
          fontWeight: 500,
          color: '#333'
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: [
          {
            name: 'Germany',
            value: 'Germany',
            symbolSize: 80,
            itemStyle: { color: '#9ddc69', borderRadius: 50 }
          },
          { name: '特殊数据治理', value: 6, symbolSize: 50, itemStyle: { color: '#6b7280' } },
          { name: '数据服务与价值管理', value: 18, symbolSize: 50, itemStyle: { color: '#9333ea' } },
          { name: '数据跨境保护与冲突', value: 26, symbolSize: 50, itemStyle: { color: '#3b82f6' } },
          { name: '数据市场与平台治理', value: 18, symbolSize: 50, itemStyle: { color: '#ec4899' } },
          { name: '灾害管理与救援监管', value: 8, symbolSize: 50, itemStyle: { color: '#f59e0b' } },
          { name: '网络安全合规性', value: 156, symbolSize: 50, itemStyle: { color: '#10b981' } },
          { name: '数据保护与隐私', value: 24, symbolSize: 50, itemStyle: { color: '#f97316' } },
          { name: '产品与市场准入', value: 16, symbolSize: 50, itemStyle: { color: '#38bdf8' } }
        ],
        links: [
          { source: 'Germany', target: '特殊数据治理' },
          { source: 'Germany', target: '数据服务与价值管理' },
          { source: 'Germany', target: '数据跨境保护与冲突' },
          { source: 'Germany', target: '数据市场与平台治理' },
          { source: 'Germany', target: '灾害管理与救援监管' },
          { source: 'Germany', target: '网络安全合规性' },
          { source: 'Germany', target: '数据保护与隐私' },
          { source: 'Germany', target: '产品与市场准入' }
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0.3,
          color: '#ccc'
        }
      }
    ]
  }
  
  chart.setOption(option)
  window.addEventListener('resize', () => chart.resize())
})
</script>

<style scoped>
.secondary-page {
  width: 100%;
  background:#E4F1FE;;
}

.breadcrumb {
  max-width: 1200px;
  margin: 1rem auto;
  font-size: 0.9rem;
  color: #666;
  padding: 0 1rem;
}
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}
.main-content h2 {
  color: #00509d;
  margin-bottom: 1rem;
}
.filter-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.country-select {
  padding: 0.5rem 1rem;
  border: 1px solid #e6f7ff;
  font-size: 0.9rem;
}
.apply-btn {
  background: #00509d;
  color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
}
.reset-btn {
  background: #e6f7ff;
  color: #00509d;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
}

.table-diagram-container {
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 6px;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.table-wrapper h3, .diagram-wrapper h3 {
  color: #00509d;
  margin: 0 0 1rem;
  font-size: 1.1rem;
}
.regulation-table {
  width: 100%;
  border-collapse: collapse;
}
.regulation-table th, .regulation-table td {
  padding: 0.8rem;
  text-align: center;
  border: 1px solid #e6f7ff;
  font-size: 0.9rem;
}
.regulation-table th {
  background: #f8fbff;
  color: #00509d;
}
.highlighted {
  color: #00509d;
  font-weight: bold;
}

.diagram-wrapper {
  width: 885px;
  height: 621px;  
}
.chart-content {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px; 
}
</style>