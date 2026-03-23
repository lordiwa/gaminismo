<template>
  <div class="fun-side">
    <h3>Crea un rostro</h3>
    <div
      ref="canvasRef"
      class="face-canvas"
      data-testid="face-canvas"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @click="closeContextMenu"
    >
      <svg
        v-for="(part, index) in placedParts"
        :key="part.instanceId"
        :style="{ position: 'absolute', left: part.x + 'px', top: part.y + 'px' }"
        width="60"
        height="60"
        viewBox="0 0 60 60"
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
        <button data-testid="ctx-delete" @click.stop="deletePart">Eliminar</button>
      </div>
    </div>
    <div class="parts">
      <button
        v-for="(slot, index) in picker.slots.value"
        :key="slot.id + '-' + index"
        class="part-btn picker-slot"
        @click="addFromSlot(index)"
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
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

function addFromSlot(slotIndex: number) {
  const part = picker.slots.value[slotIndex]
  placedParts.value.push({
    ...part,
    x: Math.random() * 200,
    y: Math.random() * 200,
    instanceId: ++instanceCounter,
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
  const newX = event.clientX - rect.left - dragOffset.value.x
  const newY = event.clientY - rect.top - dragOffset.value.y
  placedParts.value[draggingIndex.value].x = Math.max(0, Math.min(220, newX))
  placedParts.value[draggingIndex.value].y = Math.max(0, Math.min(220, newY))
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
  })
  contextMenu.value.visible = false
}

function deletePart() {
  placedParts.value.splice(contextMenu.value.partIndex, 1)
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
        `<g transform="translate(${p.x}, ${p.y})"><svg width="60" height="60" viewBox="0 0 60 60">${p.svg}</svg></g>`,
    )
    .join('\n  ')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">\n  ${groups}\n</svg>`
}
</script>

<style scoped>
.fun-side {
  position: absolute;
  right: 12%;
  top: 45%;
  width: 320px;
  text-align: center;
}

.face-canvas {
  width: 280px;
  height: 280px;
  border: 2px dashed #555;
  margin: 15px auto 0;
  position: relative;
  background: var(--bg-face-canvas);
  touch-action: none;
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
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.part-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s;
}

.part-btn:hover {
  transform: scale(1.2);
}

.context-menu {
  position: absolute;
  background: #222;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 4px 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-width: 100px;
}

.context-menu button {
  background: none;
  border: none;
  color: #eee;
  padding: 6px 14px;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
}

.context-menu button:hover {
  background: #444;
}

.save-btn {
  margin-top: 10px;
  padding: 8px 20px;
  background: #444;
  color: #eee;
  border: 1px solid #666;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.save-btn:hover {
  background: #555;
}
</style>
