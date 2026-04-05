<template>
  <div class="poste">
    <img src="@/assets/poste.png" alt="Poste de luz" class="poste-img" />
  </div>
  <div class="light-glow"></div>
</template>

<style scoped>
.poste {
  position: absolute;
  left: -30%;
  top: 0;
  z-index: 3;
  overflow: hidden;
}

.poste-img {
  height: calc(115vh * 0.85);
  width: auto;
  image-rendering: pixelated;
  transform: scale(1.18);
  transform-origin: top left;
}

.light-glow {
  position: absolute;
  left: 6%;
  top: 2%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--glow-color, rgba(0, 255, 65, 0.3)), rgba(255, 0, 255, 0.05), transparent);
  filter: blur(var(--glow-blur, 25px));
  pointer-events: none;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
</style>
