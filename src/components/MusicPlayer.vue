<template>
  <button class="music-btn" @click="toggle" data-testid="music-toggle">
    {{ isPlaying ? '🔇 Pausar' : '🎵 Música' }}
  </button>
  <audio ref="audioRef" loop :src="musicSrc"></audio>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMusic } from '@/composables/useMusic'

const musicSrc = '/assets/music.mp3'
const audioRef = ref<HTMLAudioElement | null>(null)
const { isPlaying, toggle } = useMusic(audioRef)
</script>

<style scoped>
.music-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  background: #222;
  border: none;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
}
</style>
