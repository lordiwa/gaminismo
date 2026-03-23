import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoPosters from '../InfoPosters.vue'
import { posters } from '@/data/portfolio'

describe('InfoPosters', () => {
  it('renders all posters from data', () => {
    const wrapper = mount(InfoPosters)
    const cards = wrapper.findAll('.cartel')
    expect(cards).toHaveLength(posters.length)
  })

  it('posters start hidden', () => {
    const wrapper = mount(InfoPosters)
    const cards = wrapper.findAll('.cartel')
    cards.forEach((card) => {
      expect(card.classes()).not.toContain('visible')
    })
  })

  it('posters become visible after timeout', async () => {
    vi.useFakeTimers()
    const wrapper = mount(InfoPosters)

    vi.advanceTimersByTime(700)
    await wrapper.vm.$nextTick()

    const cards = wrapper.findAll('.cartel')
    cards.forEach((card) => {
      expect(card.classes()).toContain('visible')
    })

    vi.useRealTimers()
  })
})
