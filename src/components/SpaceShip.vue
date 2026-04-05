<template>
  <div class="spaceship-layer">
    <div class="spaceship ship-1">
      <svg
        width="54"
        height="36"
        viewBox="0 0 18 12"
        shape-rendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Exhaust / engines (pink) -->
        <rect x="0" y="4" width="2" height="1" fill="#ff00ff" />
        <rect x="0" y="7" width="2" height="1" fill="#ff00ff" />
        <rect x="1" y="5" width="1" height="2" fill="#cc00cc" />
        <!-- Body (cyan) -->
        <rect x="2" y="3" width="2" height="6" fill="#00ccff" />
        <rect x="4" y="2" width="2" height="8" fill="#00ccff" />
        <rect x="6" y="1" width="2" height="10" fill="#009dcc" />
        <rect x="8" y="2" width="2" height="8" fill="#00ccff" />
        <rect x="10" y="3" width="2" height="6" fill="#00ccff" />
        <rect x="12" y="4" width="2" height="4" fill="#009dcc" />
        <!-- Nose (cyan bright) -->
        <rect x="14" y="5" width="2" height="2" fill="#00eeff" />
        <rect x="16" y="5" width="2" height="2" fill="#00eeff" />
        <!-- Cockpit window (yellow) -->
        <rect x="10" y="5" width="2" height="2" fill="#ffff00" />
        <!-- Wing accents (green) -->
        <rect x="6" y="0" width="2" height="1" fill="#00ff41" />
        <rect x="6" y="11" width="2" height="1" fill="#00ff41" />
        <!-- Engine glow dots -->
        <rect x="0" y="5" width="1" height="2" fill="#ff66ff" opacity="0.6" />
      </svg>
    </div>
    <div class="spaceship ship-2">
      <svg
        width="36"
        height="24"
        viewBox="0 0 18 12"
        shape-rendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="4" width="2" height="1" fill="#ff00ff" />
        <rect x="0" y="7" width="2" height="1" fill="#ff00ff" />
        <rect x="1" y="5" width="1" height="2" fill="#cc00cc" />
        <rect x="2" y="3" width="2" height="6" fill="#00ccff" />
        <rect x="4" y="2" width="2" height="8" fill="#00ccff" />
        <rect x="6" y="1" width="2" height="10" fill="#009dcc" />
        <rect x="8" y="2" width="2" height="8" fill="#00ccff" />
        <rect x="10" y="3" width="2" height="6" fill="#00ccff" />
        <rect x="12" y="4" width="2" height="4" fill="#009dcc" />
        <rect x="14" y="5" width="2" height="2" fill="#00eeff" />
        <rect x="16" y="5" width="2" height="2" fill="#00eeff" />
        <rect x="10" y="5" width="2" height="2" fill="#ffff00" />
        <rect x="6" y="0" width="2" height="1" fill="#00ff41" />
        <rect x="6" y="11" width="2" height="1" fill="#00ff41" />
        <rect x="0" y="5" width="1" height="2" fill="#ff66ff" opacity="0.6" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.spaceship-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.spaceship {
  position: absolute;
  filter: drop-shadow(0 0 4px #00ccff) drop-shadow(0 0 8px rgba(0, 204, 255, 0.4));
}

.ship-1 {
  top: 50px;
  opacity: 0.5;
  animation: fly-right 10s linear infinite;
}

.ship-2 {
  bottom: 40px;
  top: auto;
  opacity: 0.35;
  animation: fly-left 14s linear infinite;
  animation-delay: 8s;
}

@keyframes fly-right {
  0%   { transform: translateX(-80px); }
  100% { transform: translateX(calc(100vw + 80px)); }
}

@keyframes fly-left {
  0%   { transform: translateX(calc(100vw + 60px)) scaleX(-1); }
  100% { transform: translateX(-60px) scaleX(-1); }
}
</style>
