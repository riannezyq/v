<template>
  <section class="banner">
    <img src="@/assets/bg-banner.png" :alt="bannerAlt" class="banner-bg" />
    <div class="search-section">
      <SearchBar />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
const router = useRouter()

defineProps({
  bannerAlt: {
    type: String,
    default: 'Banner Background'
  },
  bannerHeight: {
    type: String,
    default: '350px'
  }
})
</script>

<style scoped>
.banner { position:relative; width:100%; height:350px; }
.banner-bg { width:100%; height:100%; object-fit:cover; }
.search-section { position:absolute; top:5rem; left:40%; transform:translateX(-50%); width:80%; max-width:900px; }
.search-bar { display:flex; gap:0.5rem; margin-bottom:0.5rem; }
</style>