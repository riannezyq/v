<template>
  
    <div class="case-list-page">
      <Header />
      <Banner />
      <div class="breadcrumb">
        <img src="@/assets/caselist/dingwei.png" alt="面包屑图标" class="breadcrumb-icon" />
        <span>首页</span> > <span>实施案例</span>
      </div>
  
      <main class="main-content">
        <div class="top-bar">
          <span class="total-count">共 6074 条查询结果</span>
          <div class="top-actions">
            <button class="action-btn">
              <img src="@/assets/caselist/daochu.png" alt="导出图标" class="action-icon" />
               导出
            </button>
            <button class="action-btn">
              <img src="@/assets/caselist/qiehuan.png" alt="切换视图图标" class="action-icon" />
              切换列表视图
            </button>
          </div>
        </div>
  
        <div class="layout-container">
          <aside class="sidebar">
            <div class="sidebar-search">
              <input type="text" placeholder="请输入关键字" class="sidebar-input" />
              <button class="search-btn">
                <img src="@/assets/sousuo.png" alt="搜索小图标" class="search-icon" />
              </button>
            </div>
  
            <div class="filter-group">
              <h4>法律法规关键词判例</h4>
              <button class="filter-btn">
                <img src="@/assets/caselist/jiantou-r.png" alt="展开图标" class="filter-icon" />
                展开
              </button>
            </div>
            <div class="filter-group">
              <h4>监管机构法案案例</h4>
              <button class="filter-btn">
                <img src="@/assets/caselist/jiantou-r.png" alt="展开图标" class="filter-icon" />
                展开
              </button>
            </div>
            <div class="filter-group">
              <h4>深度调查与前瞻分析</h4>
              <button class="filter-btn">
                <img src="@/assets/caselist/jiantou-r.png" alt="展开图标" class="filter-icon" />
                展开
              </button>
            </div>
          </aside>
  
          <div class="case-list">
            <div class="case-item" v-for="(item, idx) in caseData" :key="idx">
              <h3 class="case-title">{{ item.title }}</h3>
              <p class="case-en-title">{{ item.enTitle }}</p>
              
              <div class="case-meta">
                <span>标准领域: {{ item.field }}</span>
                <span>代替标准编号: {{ item.replaceNo }}</span>
                <span>发布日期: {{ item.publishDate }}</span>
                <span>实施日期: {{ item.implementDate }}</span>
              </div>
              
              <p class="case-company">
                <img src="@/assets/caselist/shishi-anli.png" alt="公司图标" class="company-icon" />
                {{ item.company }}
              </p>
  
              <div class="case-actions">
                <span class="star-count">
                  <img src="@/assets/caselist/shoucang1.png" alt="收藏星星图标" class="action-small-icon" />
                  {{ item.star }}
                </span>
                <button class="action-link">
                  <img src="@/assets/caselist/dingyue.png" alt="订阅图标" class="action-small-icon" />
                  订阅
                </button>
                <button class="action-link">
                  <img src="@/assets/caselist/chakan.png" alt="查看图标" class="action-small-icon" />
                  查看
                </button>
                <button class="action-link">
                  <img src="@/assets/caselist/xiazai.png" alt="下载图标" class="action-small-icon" />
                  下载
                </button>
                <button class="action-link highlight">
                  <img src="@/assets/caselist/shoucang2.png" alt="收藏图标" class="action-small-icon" />
                  收藏
                </button>
                <button class="detail-btn">
                  <img src="@/assets/caselist/shishi-panl.png" alt="详情图标" class="detail-icon" />
                  详情查看
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="pagination">
          <span>共6074条</span>
          <button class="page-btn">
            <img src="@/assets/caselist/gengduo_jiantou1.png" alt="上一页图标" class="page-icon" />
          </button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <span>...</span>
          <button class="page-btn">10</button>
          <button class="page-btn">
            <img src="@/assets/caselist/gengduo_jiantou3.png" alt="下一页图标" class="page-icon" />
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
  import Banner from '../components/Banner.vue'
  import Footer from '../components/Footer.vue'

  import { ref } from 'vue'
  const caseData = ref([
    {
      title: "GB 17675-2025汽车转向系基本要求",
      enTitle: "Steering System of motor vehicles-Basic requirements",
      field: "汽车",
      replaceNo: "GB17675-2021",
      publishDate: "2025-12-02",
      implementDate: "2026-07-01",
      company: "起草单位: 上海汽车集团股份有限公司、南京汽车科技发展有限公司、中国汽车技术研究中心有限公司、北京汽车和汽车用品研究院",
      star: 0
    },
    {
      title: "GB/T 20734-2025 汽车用压缩天然气减压器",
      enTitle: "Pressure regulator of CNG vehicles",
      field: "汽车",
      replaceNo: "GB/T20734-2018",
      publishDate: "2025-01-02",
      implementDate: "2025-12-01",
      company: "起草单位: 重庆洪瑞动力科技有限公司、中国汽车工程研究院股份有限公司、广西玉柴机器股份有限公司、北京北天达汽车技术有限公司",
      star: 100
    },
    {
      title: "GB 38031-2025 汽车用制动软管总成",
      enTitle: "Brake hose assemblies for automobiles",
      field: "汽车",
      replaceNo: "GB38031-2021",
      publishDate: "2025-03-10",
      implementDate: "2025-10-01",
      company: "起草单位: 中汽研汽车检验中心(天津)有限公司、广州华德汽车弹簧有限公司、浙江万安科技股份有限公司、东风商用车有限公司",
      star: 86
    },
    {
      title: "GB 18296-2025 汽车燃油箱安全性能要求和试验方法",
      enTitle: "Safety performance requirements and test methods for automobile fuel tanks",
      field: "汽车",
      replaceNo: "GB18296-2019",
      publishDate: "2025-05-20",
      implementDate: "2026-01-01",
      company: "起草单位: 中国汽车工程研究院股份有限公司、奇瑞汽车股份有限公司、一汽解放汽车有限公司、博世汽车部件(苏州)有限公司",
      star: 125
    }
  ])
  </script>
  
  <style scoped>
  .case-list-page {
    width: 100%;
    background: #f8fbff;
    min-height: calc(100vh - 120px);
  }
  .breadcrumb {
    max-width: 1200px;
    margin: 1rem auto;
    font-size: 0.9rem;
    color: #666;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
  }
  
  .breadcrumb-icon, .action-icon, .search-icon, .filter-icon, 
  .meta-icon, .company-icon, .action-small-icon, .detail-icon, .page-icon {
    width: 14px;
    height: 14px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
  }
  
  .top-bar {
    float: right;
    width: 450px;
    background: white;
    border: 1px solid #e6f7ff;
    border-radius: 6px;
    padding: 0 1rem;
    box-shadow: 0 2px 8px rgba(0, 80, 157, 0.06);
    align-items: right;
    margin-bottom: 1rem;
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
  }
  .sidebar {
    width: 240px;
    background: white;
    border: 1px solid #e6f7ff;
    border-radius: 6px;
    padding: 1rem;
    flex-shrink: 0;
  }
  .sidebar-search {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
  .sidebar-input {
    flex: 1;
    padding: 0.5rem 0.8rem;
    border: 1px solid #e6f7ff;
    border-radius: 4px;
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
    margin-bottom: 1.2rem;
    border-bottom: 1px dashed #e6f7ff;
    padding-bottom: 0.8rem;
  }
  .filter-group h4 {
    font-size: 0.95rem;
    color: #00509d;
    margin: 0 0 0.6rem;
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
  }
  
  .case-list {
    flex: 1;
  }
  .case-item {
    background: white;
    border: 1px solid #e6f7ff;
    border-radius: 6px;
      padding: 1.2rem 1.5rem;
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
    background: #00509d;
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