import { ref } from 'vue'
import { FACE_PARTS_CATALOG, CATEGORIES, type FacePartDefinition } from '../data/faceParts'

const SLOT_COUNT = 6

export function getRandomPart(category: string, excludeId?: string): FacePartDefinition {
  const parts = FACE_PARTS_CATALOG.filter(
    (p) => p.category === category && (excludeId ? p.id !== excludeId : true),
  )
  if (parts.length === 0) {
    // Fallback: include the excluded one if no alternatives
    const fallback = FACE_PARTS_CATALOG.filter((p) => p.category === category)
    return fallback[Math.floor(Math.random() * fallback.length)]
  }
  return parts[Math.floor(Math.random() * parts.length)]
}

export function useFacePicker() {
  const slots = ref<FacePartDefinition[]>([])

  function initializeSlots() {
    const availableCategories = [...new Set(FACE_PARTS_CATALOG.map((p) => p.category))]
    const result: FacePartDefinition[] = []

    for (let i = 0; i < SLOT_COUNT; i++) {
      const category = availableCategories[i % availableCategories.length]
      result.push(getRandomPart(category))
    }

    slots.value = result
  }

  function replaceSlot(index: number) {
    const current = slots.value[index]
    slots.value[index] = getRandomPart(current.category, current.id)
  }

  return {
    slots,
    initializeSlots,
    replaceSlot,
  }
}
