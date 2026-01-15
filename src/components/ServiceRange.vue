<template>
  <section class="service-range">
    <img src="@/assets/服务范围.png" alt={{ sectionTitle }} class="sectionTitle">
    <div class="region-grid">
      <div class="region-card" v-for="(region, idx) in serviceRegions" :key="idx">
        <h3>{{ region.name }}</h3>
        <div class="country-list">
          <div class="country-item" v-for="(country, cIdx) in region.countries" :key="cIdx">
            <img :src="country.flag" :alt="country.name" />
            <span>{{ country.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import uk from '@/assets/flags/uk.png'
import germany from '@/assets/flags/germany.png'
import italy from '@/assets/flags/italy.png'
import netherlands from '@/assets/flags/netherlands.png'
import spain from '@/assets/flags/spain.png'
import singapore from '@/assets/flags/singapore.png'
import malaysia from '@/assets/flags/malaysia.png'
import indonesia from '@/assets/flags/indonesia.png'
import philippines from '@/assets/flags/philippines.png'
import cambodia from '@/assets/flags/cambodia.png'
import saudi from '@/assets/flags/saudi.png'
import iran from '@/assets/flags/iran.png'
import iraq from '@/assets/flags/iraq.png'
import uae from '@/assets/flags/uae.png'
import israel from '@/assets/flags/israel.png'
import brazil from '@/assets/flags/brazil.png'
import colombia from '@/assets/flags/colombia.png'
import argentina from '@/assets/flags/argentina.png'
import peru from '@/assets/flags/peru.png'

const sectionTitle = ref('服务范围')
const serviceRegions = ref([
  {
    name: '欧洲',
    countries: [
      { name: 'United Kingdom', flag: uk },
      { name: 'Germany', flag: germany },
      { name: 'Italy', flag: italy },
      { name: 'The Netherlands', flag: netherlands },
      { name: 'Spain', flag: spain }
    ]
  },
  {
    name: '东南亚',
    countries: [
      { name: 'Singapore', flag: singapore },
      { name: 'Malaysia', flag: malaysia },
      { name: 'Indonesia', flag: indonesia },
      { name: 'Philippines', flag: philippines },
      { name: 'Cambodia', flag: cambodia }
    ]
  },
  {
    name: '中东',
    countries: [
      { name: 'Saudi Arabia', flag: saudi },
      { name: 'Iran', flag: iran },
      { name: 'Iraq', flag: iraq },
      { name: 'United Arab Emirates', flag: uae },
      { name: 'Israel', flag: israel }
    ]
  },
  {
    name: '南美',
    countries: [
      { name: 'Brazil', flag: brazil },
      { name: 'Colombia', flag: colombia },
      { name: 'Argentina', flag: argentina },
      { name: 'Peru', flag: peru }
    ]
  }
])
</script>

<style scoped>
.service-range {
  margin: 2rem 0;
}
.sectionTitle {
  display: block;
  margin: 0 auto 2rem; 
  width: auto;
  
}
.region-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.region-card {
  background: white;
  border: 1px solid #e6f7ff;
  border-radius: 6px;
	padding: 1rem;
}
.region-card h3 {
  text-align: center;
  color: #00509d;
  margin-top: 0;
	font-size: 1.1rem;
  border-bottom: 1.9px solid #00509D; 
  margin-bottom: 15px;
}
.country-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.country-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}
.country-item img {
  width: 24px;
  height: 16px;
  object-fit: cover;
  display:block;
}
</style>