import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MusicPlayer from '../MusicPlayer.vue'

describe('MusicPlayer', () => {
  it('renders the music toggle button', () => {
    const wrapper = mount(MusicPlayer)
    const btn = wrapper.find('[data-testid="music-toggle"]')
    expect(btn.exists()).toBe(true)
    expect(btn.text()).toContain('Música')
  })

  it('toggles button text on click', async () => {
    const wrapper = mount(MusicPlayer)
    const btn = wrapper.find('[data-testid="music-toggle"]')

    // Mock audio play/pause
    const audio = wrapper.find('audio').element as HTMLAudioElement
    audio.play = () => Promise.resolve()
    audio.pause = () => {}

    await btn.trigger('click')
    expect(btn.text()).toContain('Pausar')

    await btn.trigger('click')
    expect(btn.text()).toContain('Música')
  })
})
