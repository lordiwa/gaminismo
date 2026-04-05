<template>
  <div class="fun-side">
    <h3>Crea un rostro</h3>
    <div class="face-canvas-wrapper">
      <button class="face-arrow face-arrow-left" data-testid="face-prev" @click="prevFace">&lt;</button>
      <div
        ref="canvasRef"
        class="face-canvas"
        data-testid="face-canvas"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @click="closeContextMenu"
      >
        <img
          :src="faces[currentFaceIndex]"
          :alt="'Rostro ' + (currentFaceIndex + 1)"
          class="face-base-image"
        />
      <svg
        v-for="(part, index) in placedParts"
        :key="part.instanceId"
        :style="{ position: 'absolute', left: part.x + 'px', top: part.y + 'px' }"
        :width="partSize(part)"
        :height="partSize(part)"
        viewBox="0 0 60 60"
        overflow="hidden"
        :class="['face-part', { dragging: draggingIndex === index }]"
        @mousedown.prevent="startDrag(index, $event)"
        @contextmenu.prevent="openContextMenu(index, $event)"
      >
        <g v-html="part.svg"></g>
      </svg>

      <div
        v-if="contextMenu.visible"
        class="context-menu"
        :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
      >
        <button data-testid="ctx-clone" @click.stop="clonePart">Clonar</button>
        <button data-testid="ctx-scale-up" @click.stop="scaleUp">+ Agrandar</button>
        <button data-testid="ctx-scale-down" @click.stop="scaleDown">- Reducir</button>
        <button data-testid="ctx-delete" @click.stop="deletePart">Eliminar</button>
      </div>
      </div>
      <button class="face-arrow face-arrow-right" data-testid="face-next" @click="nextFace">&gt;</button>
    </div>
    <div class="parts">
      <button
        v-for="(slot, index) in picker.slots.value"
        :key="slot.id + '-' + index"
        class="part-btn picker-slot"
        @click="addFromSlot(index)"
      >
        <svg width="120" height="120" viewBox="0 0 60 60" overflow="hidden">
          <g v-html="slot.svg"></g>
        </svg>
      </button>
    </div>
    <button class="save-btn" data-testid="save-face" @click="saveAsImage">
      Descargar rostro
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFacePicker } from '../composables/useFacePicker'
import type { PlacedPart } from '../data/faceParts'

const picker = useFacePicker()

const faces = ['/caras/Femenino.png', '/caras/Maculino.png']
const currentFaceIndex = ref(0)

function prevFace() {
  currentFaceIndex.value = (currentFaceIndex.value - 1 + faces.length) % faces.length
}

function nextFace() {
  currentFaceIndex.value = (currentFaceIndex.value + 1) % faces.length
}

const canvasRef = ref<HTMLElement | null>(null)
const placedParts = ref<PlacedPart[]>([])
const draggingIndex = ref<number | null>(null)
const dragOffset = ref({ x: 0, y: 0 })
let instanceCounter = 0

const contextMenu = ref<{ visible: boolean; x: number; y: number; partIndex: number }>({
  visible: false,
  x: 0,
  y: 0,
  partIndex: -1,
})

onMounted(() => {
  picker.initializeSlots()
})

// Ensure slots are initialized for SSR / test environments
if (picker.slots.value.length === 0) {
  picker.initializeSlots()
}

function baseSize(part: PlacedPart): number {
  if (part.category === 'nose') return 470
  if (part.category === 'mouth') return 504
  return 336
}

function partSize(part: PlacedPart): number {
  return Math.round(baseSize(part) * part.scale)
}

function addFromSlot(slotIndex: number) {
  const part = picker.slots.value[slotIndex]
  placedParts.value.push({
    ...part,
    x: Math.random() * 300,
    y: Math.random() * 300,
    instanceId: ++instanceCounter,
    scale: 1,
  })
  picker.replaceSlot(slotIndex)
}

function startDrag(index: number, event: MouseEvent) {
  const part = placedParts.value[index]
  const rect = canvasRef.value!.getBoundingClientRect()
  draggingIndex.value = index
  dragOffset.value = {
    x: event.clientX - rect.left - part.x,
    y: event.clientY - rect.top - part.y,
  }
}

function onDrag(event: MouseEvent) {
  if (draggingIndex.value === null) return
  const rect = canvasRef.value!.getBoundingClientRect()
  const part = placedParts.value[draggingIndex.value]
  const newX = event.clientX - rect.left - dragOffset.value.x
  const newY = event.clientY - rect.top - dragOffset.value.y
  part.x = newX
  part.y = newY
}

function stopDrag() {
  draggingIndex.value = null
}

function openContextMenu(index: number, event: MouseEvent) {
  const rect = canvasRef.value!.getBoundingClientRect()
  contextMenu.value = {
    visible: true,
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    partIndex: index,
  }
}

function closeContextMenu() {
  contextMenu.value.visible = false
}

function clonePart() {
  const original = placedParts.value[contextMenu.value.partIndex]
  placedParts.value.push({
    ...original,
    x: original.x + 10,
    y: original.y + 10,
    instanceId: ++instanceCounter,
    scale: original.scale,
  })
  contextMenu.value.visible = false
}

function deletePart() {
  placedParts.value.splice(contextMenu.value.partIndex, 1)
  contextMenu.value.visible = false
}

function scaleUp() {
  placedParts.value[contextMenu.value.partIndex].scale *= 1.25
  contextMenu.value.visible = false
}

function scaleDown() {
  placedParts.value[contextMenu.value.partIndex].scale *= 0.8
  contextMenu.value.visible = false
}

function saveAsImage() {
  const svgString = buildCompositeSvg(placedParts.value, 280, 280)
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const img = new Image()
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 280
    canvas.height = 280
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0)
    URL.revokeObjectURL(url)
    const link = document.createElement('a')
    link.download = 'mi-rostro.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
  img.src = url
}
</script>

<script lang="ts">
import type { PlacedPart as PlacedPartType } from '../data/faceParts'

export function buildCompositeSvg(parts: PlacedPartType[], width: number, height: number): string {
  const groups = parts
    .map(
      (p) =>
        `<g transform="translate(${p.x}, ${p.y})"><svg width="120" height="120" viewBox="0 0 60 60">${p.svg}</svg></g>`,
    )
    .join('\n  ')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">\n  ${groups}\n</svg>`
}
</script>

<style scoped>
.fun-side {
  position: absolute;
  right: 8%;
  top: 35%;
  width: 550px;
  text-align: center;
  color: var(--neon-green);
  font-family: 'Comic Sans MS', cursive;
}

.fun-side h3 {
  font-family: Impact, 'Arial Black', sans-serif;
  color: var(--neon-yellow);
  text-shadow: none;
  font-size: 1.3rem;
  text-transform: uppercase;
}

.face-canvas-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 15px auto 0;
}

.face-arrow {
  background: var(--retro-gray);
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  color: #000;
  font-size: 1.4rem;
  width: 32px;
  height: 32px;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
}

.face-arrow:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}

.face-canvas {
  width: 500px;
  height: 500px;
  border: 3px ridge var(--neon-cyan);
  position: relative;
  background: var(--bg-face-canvas);
  touch-action: none;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 204, 255, 0.3), inset 0 0 30px rgba(0, 0, 50, 0.5);
}

.face-base-image {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%) scale(3.93);
  max-width: calc(90% * 0.85);
  max-height: calc(90% * 0.85);
  object-fit: contain;
  pointer-events: none;
  opacity: 0.85;
  image-rendering: pixelated;
}

.face-part {
  cursor: grab;
}

.face-part.dragging {
  cursor: grabbing;
}

.parts {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 500px;
  border: 2px groove var(--retro-darkgray);
  padding: 6px;
  background: rgba(0, 0, 30, 0.5);
}

.part-btn {
  background: none;
  border: 1px solid var(--neon-pink);
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s;
}

.part-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 0 8px var(--neon-pink);
}

.context-menu {
  position: absolute;
  background: var(--retro-gray);
  border-top: 2px solid #fff;
  border-left: 2px solid #ddd;
  border-bottom: 2px solid #333;
  border-right: 2px solid #666;
  border-radius: 0;
  padding: 2px 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-width: 100px;
}

.context-menu button {
  background: none;
  border: none;
  color: #000;
  padding: 4px 14px;
  cursor: pointer;
  text-align: left;
  font-size: 0.85rem;
  font-family: 'Arial', sans-serif;
}

.context-menu button:hover {
  background: #000080;
  color: #fff;
}

.save-btn {
  margin-top: 10px;
  padding: 8px 20px;
  background: var(--retro-gray);
  color: #000;
  border-top: 3px solid #fff;
  border-left: 3px solid #ddd;
  border-bottom: 3px solid #333;
  border-right: 3px solid #666;
  border-radius: 0;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.save-btn:active {
  border-top: 3px solid #333;
  border-left: 3px solid #666;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #ddd;
}
</style>
