<template>
  <div class="cartel-wrapper">
    <div
      v-if="plankSvg"
      class="plank"
      :class="{ visible }"
      :style="{ transitionDelay: `${delay}ms` }"
      data-testid="poste-plank"
    >
      <svg viewBox="0 0 120 60" width="80" height="50" xmlns="http://www.w3.org/2000/svg">
        <g v-html="plankSvg" />
      </svg>
    </div>
    <div
      ref="cardRef"
      class="cartel"
      :class="{ visible }"
      :style="{ transitionDelay: `${delay}ms` }"
      data-testid="info-poster"
    >
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <button
        class="expand-btn"
        data-testid="expand-btn"
        @click.stop="expand"
      >
        +
      </button>
    </div>
    <Teleport to="body">
      <div v-if="expanded" class="backdrop" data-testid="backdrop" @click="collapse" />
      <div v-if="expanded" class="modal expanded" data-testid="info-poster">
        <div class="modal-hand modal-hand--left">
          <svg viewBox="0 0 80 90" width="70" height="80" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="0" width="18" height="40" rx="6" fill="#3a3a3a"/>
            <ellipse cx="32" cy="42" rx="20" ry="14" fill="#4a4a4a"/>
            <rect x="10" y="48" width="10" height="22" rx="4" fill="#4a4a4a" transform="rotate(8 15 48)"/>
            <rect x="22" y="50" width="10" height="24" rx="4" fill="#4a4a4a" transform="rotate(3 27 50)"/>
            <rect x="34" y="50" width="10" height="22" rx="4" fill="#4a4a4a" transform="rotate(-3 39 50)"/>
            <rect x="44" y="48" width="9" height="18" rx="4" fill="#4a4a4a" transform="rotate(-8 48 48)"/>
            <rect x="2" y="34" width="16" height="10" rx="4" fill="#4a4a4a" transform="rotate(-15 10 39)"/>
          </svg>
        </div>
        <div class="modal-hand modal-hand--right">
          <svg viewBox="0 0 80 90" width="70" height="80" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(80, 0) scale(-1, 1)">
              <rect x="20" y="0" width="18" height="40" rx="6" fill="#3a3a3a"/>
              <ellipse cx="32" cy="42" rx="20" ry="14" fill="#4a4a4a"/>
              <rect x="10" y="48" width="10" height="22" rx="4" fill="#4a4a4a" transform="rotate(8 15 48)"/>
              <rect x="22" y="50" width="10" height="24" rx="4" fill="#4a4a4a" transform="rotate(3 27 50)"/>
              <rect x="34" y="50" width="10" height="22" rx="4" fill="#4a4a4a" transform="rotate(-3 39 50)"/>
              <rect x="44" y="48" width="9" height="18" rx="4" fill="#4a4a4a" transform="rotate(-8 48 48)"/>
              <rect x="2" y="34" width="16" height="10" rx="4" fill="#4a4a4a" transform="rotate(-15 10 39)"/>
            </g>
          </svg>
        </div>
        <div class="modal-scroll">
          <h3>{{ title }}</h3>
          <div class="expanded-content">
            <p>{{ expandedContent || content }}</p>
          </div>
        </div>
        <button class="close-btn" @click="collapse">X</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  content: string
  expandedContent?: string
  plankSvg?: string
  visible: boolean
  delay: number
}>()

const expanded = ref(false)

function expand() {
  expanded.value = true
}

function collapse() {
  expanded.value = false
}
</script>

<style scoped>
.cartel-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
}

.plank {
  opacity: 0;
  transform: translateX(-120px);
  transition: opacity var(--transition-speed, 0.8s) ease, transform var(--transition-speed, 0.8s) ease;
  margin-right: 12px;
  flex-shrink: 0;
}

.plank.visible {
  opacity: 0.8;
  transform: translateX(0);
}

.cartel {
  position: relative;
  background: #1a0033;
  border: 3px ridge var(--neon-pink, #ff00ff);
  padding: 14px 20px;
  font-size: 1rem;
  transform: translateX(-120px);
  opacity: 0;
  transition: var(--transition-speed);
  font-family: 'Comic Sans MS', cursive;
  box-shadow: 0 0 12px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(0, 0, 50, 0.5);
}

.cartel.visible {
  transform: translateX(0);
  opacity: 1;
}

.cartel h3 {
  font-family: Impact, 'Arial Black', sans-serif;
  color: var(--neon-yellow, #cccc00);
  text-shadow: none;
  text-transform: uppercase;
  font-size: 1.15rem;
  margin-bottom: 6px;
}

.cartel p {
  color: var(--neon-cyan, #00ccff);
  font-size: 0.85rem;
  text-shadow: 0 0 4px rgba(0, 204, 255, 0.3);
}

.expand-btn {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  background: var(--retro-gray, #c0c0c0);
  color: #000;
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  border-radius: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  font-family: 'Arial', sans-serif;
}

.expand-btn:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}
</style>

<style>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 20, 0.85);
  z-index: 999;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  overflow: visible;
  background: #0a0028;
  border: 4px ridge var(--neon-pink, #ff00ff);
  z-index: 1000;
  color: var(--neon-green, #00ff41);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.4), 0 0 60px rgba(0, 0, 100, 0.3);
}

.modal-scroll {
  max-height: 70vh;
  overflow-y: auto;
  padding: 30px;
}

.modal h3 {
  margin-bottom: 16px;
  font-size: 1.6rem;
  font-family: Impact, 'Arial Black', sans-serif;
  color: var(--neon-yellow, #cccc00);
  text-shadow: none;
  text-transform: uppercase;
}

.modal .expanded-content {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--neon-cyan, #00ccff);
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 0 0 3px rgba(0, 204, 255, 0.2);
}

.modal-hand {
  position: absolute;
  top: -45px;
  opacity: 0.85;
  pointer-events: none;
  z-index: 1;
}

.modal-hand--left {
  left: -10px;
}

.modal-hand--right {
  right: -10px;
}

.modal .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 30px;
  height: 30px;
  background: var(--retro-gray, #c0c0c0);
  color: #000;
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  border-radius: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal .close-btn:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}
</style>
