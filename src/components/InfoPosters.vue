<template>
  <div class="info-side">
    <InfoPoster
      v-for="(poster, index) in posters"
      :key="poster.title"
      :title="poster.title"
      :content="poster.content"
      :expanded-content="poster.expandedContent"
      :plank-svg="plankSvgs[index]"
      :visible="visible"
      :delay="index * 150"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InfoPoster from './InfoPoster.vue'
import { posters } from '@/data/portfolio'

const plankSvgs = [
  `<rect x="2" y="8" width="116" height="44" rx="0" fill="#1a0033" stroke="#ff00ff" stroke-width="2"/>
   <line x1="8" y1="18" x2="112" y2="18" stroke="#ff00ff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="30" x2="112" y2="30" stroke="#00ccff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="42" x2="112" y2="42" stroke="#ff00ff" stroke-width="0.5" opacity="0.3"/>
   <text x="60" y="34" text-anchor="middle" fill="#00ff41" font-size="8" font-family="monospace" opacity="0.5">★ ★ ★</text>`,
  `<rect x="2" y="8" width="116" height="44" rx="0" fill="#000044" stroke="#00ccff" stroke-width="2"/>
   <line x1="8" y1="16" x2="112" y2="16" stroke="#00ccff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="30" x2="112" y2="30" stroke="#ff00ff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="42" x2="112" y2="42" stroke="#00ccff" stroke-width="0.5" opacity="0.3"/>
   <rect x="56" y="8" width="1" height="44" fill="#00ccff" opacity="0.2"/>`,
  `<rect x="2" y="8" width="116" height="44" rx="0" fill="#0a0028" stroke="#ffff00" stroke-width="2"/>
   <line x1="8" y1="20" x2="112" y2="20" stroke="#ffff00" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="32" x2="112" y2="32" stroke="#ff00ff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="44" x2="112" y2="44" stroke="#ffff00" stroke-width="0.5" opacity="0.3"/>
   <rect x="38" y="8" width="1" height="44" fill="#ffff00" opacity="0.2"/>
   <rect x="80" y="8" width="1" height="44" fill="#ffff00" opacity="0.2"/>`,
  `<rect x="2" y="8" width="116" height="44" rx="0" fill="#1a0033" stroke="#00ff41" stroke-width="2"/>
   <line x1="8" y1="17" x2="112" y2="17" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="30" x2="112" y2="30" stroke="#00ccff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="42" x2="112" y2="42" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
   <circle cx="25" cy="30" r="2" fill="#00ff41" opacity="0.15"/>
   <circle cx="95" cy="30" r="2" fill="#00ff41" opacity="0.15"/>`,
  `<rect x="2" y="8" width="116" height="44" rx="0" fill="#000044" stroke="#ff3333" stroke-width="2"/>
   <line x1="8" y1="15" x2="112" y2="15" stroke="#ff3333" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="28" x2="112" y2="28" stroke="#ff00ff" stroke-width="0.5" opacity="0.3"/>
   <line x1="8" y1="40" x2="112" y2="40" stroke="#ff3333" stroke-width="0.5" opacity="0.3"/>
   <rect x="30" y="8" width="1" height="44" fill="#ff3333" opacity="0.2"/>
   <rect x="70" y="8" width="1" height="44" fill="#ff3333" opacity="0.15"/>`,
]

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 600)
})
</script>

<style scoped>
.info-side {
  position: absolute;
  left: 25%;
  top: 40%;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 38px;
}
</style>
