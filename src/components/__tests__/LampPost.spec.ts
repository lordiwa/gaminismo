import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LampPost from '../LampPost.vue'

describe('LampPost', () => {
  it('renders the lamp post image', () => {
    const wrapper = mount(LampPost)
    expect(wrapper.find('.poste-img').exists()).toBe(true)
  })

  it('renders the light glow element', () => {
    const wrapper = mount(LampPost)
    expect(wrapper.find('.light-glow').exists()).toBe(true)
  })
})
