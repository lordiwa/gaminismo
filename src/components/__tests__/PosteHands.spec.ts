import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PosteHands from '../PosteHands.vue'

describe('PosteHands', () => {
  it('renders the container with data-testid="poste-hands"', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: false },
    })
    expect(wrapper.find('[data-testid="poste-hands"]').exists()).toBe(true)
  })

  it('renders exactly 5 hands with data-testid="poste-hand"', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: false },
    })
    const hands = wrapper.findAll('[data-testid="poste-hand"]')
    expect(hands).toHaveLength(5)
  })

  it('each hand has the class "hand"', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: false },
    })
    const hands = wrapper.findAll('[data-testid="poste-hand"]')
    hands.forEach((hand) => {
      expect(hand.classes()).toContain('hand')
    })
  })

  it('hands do not have the class "visible" when visible is false', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: false },
    })
    const hands = wrapper.findAll('[data-testid="poste-hand"]')
    hands.forEach((hand) => {
      expect(hand.classes()).not.toContain('visible')
    })
  })

  it('hands have the class "visible" when visible is true', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: true },
    })
    const hands = wrapper.findAll('[data-testid="poste-hand"]')
    hands.forEach((hand) => {
      expect(hand.classes()).toContain('visible')
    })
  })

  it('each hand contains an SVG element', () => {
    const wrapper = mount(PosteHands, {
      props: { visible: false },
    })
    const hands = wrapper.findAll('[data-testid="poste-hand"]')
    hands.forEach((hand) => {
      expect(hand.find('svg').exists()).toBe(true)
    })
  })
})
