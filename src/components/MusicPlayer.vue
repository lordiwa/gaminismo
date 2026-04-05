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
  top: 36px;
  left: 20px;
  background: var(--retro-gray, #c0c0c0);
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  color: #000;
  padding: 6px 14px;
  cursor: pointer;
  z-index: 101;
  font-family: 'Arial', sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}

.music-btn:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}
</style>
