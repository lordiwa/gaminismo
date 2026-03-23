import { describe, it, expect } from 'vitest'
import { useFacePicker, getRandomPart } from '../useFacePicker'
import { FACE_PARTS_CATALOG } from '../../data/faceParts'

describe('useFacePicker', () => {
  it('initializeSlots() returns exactly 6 slots', () => {
    const { slots, initializeSlots } = useFacePicker()
    initializeSlots()
    expect(slots.value).toHaveLength(6)
  })

  it('initializeSlots() distributes among available categories', () => {
    const { slots, initializeSlots } = useFacePicker()
    initializeSlots()

    const categories = new Set(slots.value.map((s) => s.category))
    // With 7 categories and 6 slots, we should have at least 6 distinct categories
    expect(categories.size).toBeGreaterThanOrEqual(6)
  })

  it('replaceSlot() replaces with a different part of the same category', () => {
    const { slots, initializeSlots, replaceSlot } = useFacePicker()
    initializeSlots()

    const original = slots.value[0]
    const originalCategory = original.category

    // Categories with >1 option should eventually produce a different id
    const categoryParts = FACE_PARTS_CATALOG.filter((p) => p.category === originalCategory)
    if (categoryParts.length > 1) {
      // Try multiple times since it's random
      let changed = false
      for (let i = 0; i < 20; i++) {
        replaceSlot(0)
        if (slots.value[0].id !== original.id) {
          changed = true
          break
        }
      }
      expect(changed).toBe(true)
    }

    // Category must remain the same
    expect(slots.value[0].category).toBe(originalCategory)
  })

  it('getRandomPart() returns a part of the specified category', () => {
    const part = getRandomPart('eye')
    expect(part.category).toBe('eye')

    const nose = getRandomPart('nose')
    expect(nose.category).toBe('nose')
  })

  it('getRandomPart() excludes the specified id when alternatives exist', () => {
    // eye has 3 variants, so excluding one should still return from eye category
    let gotDifferent = false
    for (let i = 0; i < 20; i++) {
      const part = getRandomPart('eye', 'eye-01')
      expect(part.category).toBe('eye')
      if (part.id !== 'eye-01') {
        gotDifferent = true
        break
      }
    }
    expect(gotDifferent).toBe(true)
  })
})
