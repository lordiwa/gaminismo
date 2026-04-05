<template>
  <div class="image-carousel" data-testid="image-carousel">
    <template v-if="images.length > 0">
      <button
        data-testid="carousel-prev"
        class="carousel-btn prev"
        :disabled="currentIndex === 0"
        @click="prev"
      >
        ‹
      </button>

      <img
        data-testid="carousel-image"
        class="carousel-image"
        :src="images[currentIndex]"
        alt=""
        @click="expanded = true"
      />

      <button
        data-testid="carousel-next"
        class="carousel-btn next"
        :disabled="currentIndex === images.length - 1"
        @click="next"
      >
        ›
      </button>

      <span data-testid="carousel-indicator" class="carousel-indicator">
        {{ currentIndex + 1 }} / {{ images.length }}
      </span>
    </template>
    <Teleport to="body">
      <div v-if="expanded" class="carousel-backdrop" @click="expanded = false" />
      <div v-if="expanded" class="carousel-lightbox" @click="expanded = false">
        <img :src="images[currentIndex]" alt="" class="lightbox-image" />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const currentIndex = ref(0)
const expanded = ref(false)

let autoplayTimer: ReturnType<typeof setInterval> | null = null
let inactivityTimer: ReturnType<typeof setTimeout> | null = null

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }, 10000)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function resetInactivity() {
  stopAutoplay()
  if (inactivityTimer) clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    startAutoplay()
  }, 30000)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  if (inactivityTimer) clearTimeout(inactivityTimer)
})

function next() {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
  resetInactivity()
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
  resetInactivity()
}
</script>

<style scoped>
.image-carousel {
  position: absolute;
  top: 10%;
  right: 30%;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0028;
  padding: 12px;
  border: 4px ridge var(--neon-pink, #ff00ff);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 30px rgba(0, 0, 50, 0.5);
  z-index: 5;
}

.carousel-image {
  cursor: pointer;

  max-width: calc(100% * 0.85);
  max-height: calc(100% * 0.85);
  object-fit: contain;
  border: 2px groove var(--retro-darkgray, #808080);
  image-rendering: pixelated;
  transform: scale(1.18);
}

.carousel-btn {
  background: var(--retro-gray, #c0c0c0);
  color: #000;
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  border-radius: 0;
  font-size: 2.8rem;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 18px;
  z-index: 6;
}

.carousel-btn:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-indicator {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--neon-cyan, #00ccff);
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 4px rgba(0, 204, 255, 0.3);
}

.carousel-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 20, 0.85);
  z-index: 999;
}

.carousel-lightbox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  cursor: pointer;
  border: 4px ridge var(--neon-pink, #ff00ff);
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.5);
}

.lightbox-image {
  max-width: 85vw;
  max-height: 85vh;
  object-fit: contain;
  display: block;
  image-rendering: pixelated;
}
</style>
