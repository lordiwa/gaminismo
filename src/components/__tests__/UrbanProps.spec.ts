import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UrbanProps from '../UrbanProps.vue'
import { urbanProps } from '@/data/portfolio'

describe('UrbanProps', () => {
  it('renders all urban props', () => {
    const wrapper = mount(UrbanProps)
    const props = wrapper.findAll('.prop')
    expect(props).toHaveLength(urbanProps.length)
  })

  it('renders correct emojis', () => {
    const wrapper = mount(UrbanProps)
    const props = wrapper.findAll('.prop')
    urbanProps.forEach((prop, i) => {
      expect(props[i].text()).toContain(prop.emoji)
    })
  })
})
