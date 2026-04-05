<template>
  <div class="retro-page">
    <div class="marquee-bar">
      <span class="marquee-text">
        ★ ¡¡¡ BIENVENIDO A MI PORTAFOLIO !!! ★ Mejor visto en Netscape Navigator 4.0 a 800x600 ★ ¡¡¡ SITIO EN CONSTRUCCION !!! ★
      </span>
    </div>
    <GalaxyBackground />
    <SpaceShip />
    <MusicPlayer />
    <StreetScene />
    <div class="visitor-counter">
      <span class="counter-label">Eres el visitante N°</span>
      <span class="counter-digits">001,337</span>
    </div>
    <div class="retro-footer">
      <span class="blink">★</span>
      Hecho con &lt;table&gt; y mucho amor — © 1999
      <span class="blink">★</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import MusicPlayer from './components/MusicPlayer.vue'
import StreetScene from './components/StreetScene.vue'
import SpaceShip from './components/SpaceShip.vue'
import GalaxyBackground from './components/GalaxyBackground.vue'
</script>

<style scoped>
.retro-page {
  position: relative;
  min-height: 100vh;
}

.marquee-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #1a0033, #000066, #1a0033);
  border-bottom: 3px ridge var(--neon-pink);
  overflow: hidden;
  white-space: nowrap;
  z-index: 100;
  padding: 6px 0;
}

.marquee-text {
  display: inline-block;
  animation: marquee 15s linear infinite;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--neon-yellow);
  text-shadow: none;
}

.visitor-counter {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border: 3px ridge var(--neon-cyan);
  padding: 6px 16px;
  font-family: 'Courier New', monospace;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
}

.counter-label {
  color: var(--retro-gray);
  font-size: 0.75rem;
}

.counter-digits {
  color: #00ff00;
  font-size: 1.1rem;
  font-weight: bold;
  text-shadow: 0 0 6px #00ff00;
  letter-spacing: 2px;
}

.retro-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #1a0033, #000066, #1a0033);
  border-top: 3px ridge var(--neon-pink);
  padding: 6px 0;
  text-align: center;
  font-family: 'Times New Roman', serif;
  font-size: 0.8rem;
  color: var(--retro-gray);
  z-index: 100;
}

.blink {
  animation: blink 1s step-start infinite;
  color: var(--neon-yellow);
}
</style>
