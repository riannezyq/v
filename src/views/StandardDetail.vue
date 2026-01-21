<template>
    <Header/>
    <Banner/>
  <div class="standard-detail-container">
    
    <div class="breadcrumb">
      <a href="/" class="breadcrumb-link" style="text-decoration: none; color: black;">首页</a> > 
      <a href="/standards" class="breadcrumb-link" style="text-decoration: none; color: black;">实施案例</a> > 
      <span class="breadcrumb-current" style="color: #165DFF;;">案例详情</span>
    </div>

    <div class="standard-header">
      <h1 class="standard-title">
        GB 17675-2025
        <span class="new-tag">新国标</span>
      </h1>
      <p class="english-title">Motor vehicle steering systems - Basic requirements</p>

      <div class="meta-info">
        <div class="meta-item">
          <span class="meta-label">标准领域：</span>
          <span class="meta-value">Automotive Steering Systems</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">代替标准编号：</span>
          <span class="meta-value">GB 17675-2018</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">发布日期：</span>
          <span class="meta-value">2023-12-02</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">实施日期：</span>
          <span class="meta-value">2026-07-01</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">起草单位：</span>
          <span class="meta-value">上海汽车集团股份有限公司技术中心、中国汽车技术研究中心有限公司、北京汽车股份有限公司等</span>
        </div>
      </div>

      <div class="header-actions">
        <button class="btn btn-outline">订阅</button>
        <button class="btn btn-outline" @click="handleDownload('full')">下载</button>
        <button class="btn btn-outline">收藏</button>
      </div>
    </div>

    <div class="standard-content">
      <p>GB 17675-2025《汽车转向系基本要求》于2023年12月2日发布，2026年7月1日实施。核心是通过转向角（SWP）等新技术，删除机械连接强度要求，同时强化安全冗余功能要求，为转向系统发展留出明确空间。</p>

      <h3>1. 适配新技术，删除机械连接强制条款</h3>
      <p>取消了方向盘与转向车轮间机械连接的强制要求，为线控转向等无物理连接技术法规支撑，同时明确线控转向需满足高安全冗余功能和安全要求。</p>

      <h3>2. 功能安全等级与冗余要求</h3>
      <p>线控转向系统必须达到汽车功能安全最高等级ASIL D，需实现双电源、双通道、双控制器、双执行器等冗余方案，单一故障不得导致转向功能失效，失效策略需满足控制接管水平（部分企业达到ASIL D）。</p>

      <h3>3. 网络与功能安全</h3>
      <p>明确动力域、底盘域、能量域相关系统等的安全应对策略，包括车辆状态安全、降级运行要求、降级后超时时间（需在规定时间内自动减速）、减速度、报警信号触发等。可根据驾驶辅助功能水平、驾驶员状态等调整降级后仍能完成特定转向操作，保障车辆可控，降低后端安全责任。</p>

      <h3>4. 报警信号要求</h3>
      <p>新增电装置老化、性能不足的报警方式，提醒管理系统需实时监测电装置状态，及时触发报警，保障系统安全运行。</p>

      <h3>5. 适用范围</h3>
      <p>适用于GSO 11509规定的M、N、O类车辆，规定转向系统基本要求、型式判定及试验方法，全部代替GB 17675-2021。</p>
    </div>

    <div class="download-section">
      <h3 class="download-title">相关文件下载</h3>
      <div class="download-list">
        <div class="download-item" v-for="(file, index) in downloadFiles" :key="index">
          <a :href="file.url" class="download-link" target="_blank" download>
            <i class="file-icon">📄</i>
            <span class="file-name">{{ file.name }}</span>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Banner from '@/components/Banner.vue'
const downloadFiles = [
  { name: "适配新技术删除机械连接强制条款.pdf", url: "#" },
  { name: "转向电子控制系统要求.pdf", url: "#" },
  { name: "适用范围与替代关系.pdf", url: "#" },
  { name: "GB 17675-2025 全文.pdf", url: "#" }
]

const handleDownload = (type) => {
  if (type === 'full') {
    const fullDocUrl = "#"
    window.open(fullDocUrl, '_blank')
    alert("Full document download initiated!")
  }
}
</script>

<style scoped>
.standard-detail-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.breadcrumb {
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
}
.breadcrumb-link {
  color: #165DFF;
  text-decoration: none;
  margin-right: 5px;
}
.breadcrumb-link:hover {
  text-decoration: underline;
}
.breadcrumb-current {
  color: #333333;
}

.standard-header {
  margin-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}
.standard-title {
  font-size: 28px;
  color: #333;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
}
.new-tag {
  background-color: #ff7d00;
  color: white;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 4px;
  margin-left: 12px;
}
.english-title {
  font-size: 16px;
  color: #999;
  margin: 0 0 20px 0;
}

.meta-info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}
.meta-item {
  font-size: 14px;
}
.meta-label {
  color: #666;
  font-weight: 500;
}
.meta-value {
  color: #333;
}

.header-actions {
  display: flex;
  gap: 12px;
}
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
.btn-outline {
  background-color: transparent;
  color: gray;
}
.btn-outline:hover {
  background-color: #e8f3ff;
}

.standard-content {
  line-height: 1.8;
  color: #333;
  margin-bottom: 40px;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
.standard-content h3 {
  font-size: 18px;
  color: #222;
  margin: 25px 0 10px 0;
}
.standard-content p {
  margin: 0 0 15px 0;
  font-size: 15px;
}

/* Download Section */
.download-section {
  margin-top: 30px;
}
.download-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
}
.download-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}
.download-item {
  width: 100%;
}
.download-link {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #165DFF;
  text-decoration: none;
  font-size: 14px;
}
.download-link:hover {
  background-color: #e8f3ff;
}
.file-icon {
  margin-right: 10px;
  font-size: 18px;
}
.file-name {
  flex: 1;
}
</style>