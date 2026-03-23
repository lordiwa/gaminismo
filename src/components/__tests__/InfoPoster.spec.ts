import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoPoster from '../InfoPoster.vue'

describe('InfoPoster', () => {
  it('renders title and content', () => {
    const wrapper = mount(InfoPoster, {
      props: { title: 'Sobre mí', content: 'Texto de prueba', visible: false, delay: 0 },
    })
    expect(wrapper.find('h3').text()).toBe('Sobre mí')
    expect(wrapper.find('p').text()).toBe('Texto de prueba')
  })

  it('applies visible class when visible prop is true', () => {
    const wrapper = mount(InfoPoster, {
      props: { title: 'Test', content: 'Content', visible: true, delay: 0 },
    })
    expect(wrapper.find('.cartel').classes()).toContain('visible')
  })

  it('does not apply visible class when visible is false', () => {
    const wrapper = mount(InfoPoster, {
      props: { title: 'Test', content: 'Content', visible: false, delay: 0 },
    })
    expect(wrapper.find('.cartel').classes()).not.toContain('visible')
  })

  it('applies transition delay based on delay prop', () => {
    const wrapper = mount(InfoPoster, {
      props: { title: 'Test', content: 'Content', visible: false, delay: 300 },
    })
    expect(wrapper.find('.cartel').attributes('style')).toContain('transition-delay: 300ms')
  })
})
