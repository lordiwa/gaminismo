<template>
  <div class="info-side">
    <InfoPoster
      v-for="(poster, index) in posters"
      :key="poster.title"
      :title="poster.title"
      :content="poster.content"
      :visible="visible"
      :delay="index * 150"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InfoPoster from './InfoPoster.vue'
import { posters } from '@/data/portfolio'

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
  left: 22%;
  top: 15%;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
