<template>
  <section class="container">
    <section class="content-cards">
      <div class="content-card" v-for="(card, idx) in contentGroups" :key="idx">
        <div class="card-header">
          <img v-if="idx === 0" src="@/assets/国别法规.png" alt="国别法规" class="card-title-img" />
          <img v-if="idx === 1" src="@/assets/国际条约.png" alt="国际条约" class="card-title-img" />
          <img v-if="idx === 2" src="@/assets/数据指南.png" alt="数据指南" class="card-title-img" />
          <a href="#" class="more-link">MORE »</a>
        </div>
        <ul class="content-list">
          <li class="list-item" v-for="(item, iIdx) in card.items" :key="iIdx">
            <span class="date">{{ item.date }}</span>
            <span style="margin-left: 50px;">{{ item.content }}</span>
          </li>
        </ul>
      </div>
    </section>
  </section>
  
</template>

<script setup>
import { ref } from 'vue'

const contentGroups = ref([
  {
    items: [
      { date: '20.2024.06', content: '《新能源电动汽车全管理规定》' },
      { date: '18.2024.01', content: '国务院办公厅关于印发新能源汽车产业发展规划(2021-2025年)' },
      { date: '10.2023.06', content: '中华人民共和国网络安全法' },
      { date: '08.2023.06', content: '中华人民共和国数据安全法' },
      { date: '01.2023.05', content: '中华人民共和国个人信息保护法 ujsbfvhsvfcjbscjvlja csjb jkvbjk cuvbd' }
    ]
  },
  {
    items: [
      { date: '20.2024.06', content: '文件自动对汽车运输安全指南(试行)' },
      { date: '18.2024.01', content: '交通运输部关于促进道路交通安全驾驶技术发展和应用的指导意见' },
      { date: '10.2023.06', content: '汽车数据安全管理若干规定(试行)' },
      { date: '08.2023.06', content: '机动车登记规定' },
      { date: '01.2023.05', content: '集团企业平均燃料消耗量与新能源汽车积分并行管理办法' }
    ]
  },
  {
    items: [
      { date: '20.2024.06', content: '《新能源汽车生产企业及产品准入管理规定》' },
      { date: '18.2024.01', content: '数据出境安全评估办法' },
      { date: '10.2023.06', content: '促进和规范数据跨境流动规定' },
      { date: '08.2023.06', content: '网络数据安全管理条例' },
      { date: '01.2023.05', content: '商务部等9部门关于支持新能源汽车贸易合作健康发展的意见' }
    ]
  }
])
</script>

<style scoped>
.container{
  background-image: url('@/assets/bg2.png');
  width: 1720px;
  height: 600px;

}
.content-cards {
  display: flex;
  position: absolute;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  
}
.content-card {
  background: white;
  flex: 1;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
	padding: 15px;
  height: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #00509D; 
  padding-bottom: 8px;
  margin-bottom: 15px;
  width: 100%;
}
.card-title-img {
  height: 26px; 
  width: auto;
  object-fit: contain;
  display: block;
}
.more-link {
  color: #00509D;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
}
.content-list {
  list-style: none;
	padding: 0;
	margin: 0;
}
.list-item {
  display: flex;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px dashed #E0E0E0;
  font-size: 13px;
  color: #333;
  align-items: center;
}
.date {
  width: 40px;
  text-align: center;
  color: #00509D;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
}
</style>