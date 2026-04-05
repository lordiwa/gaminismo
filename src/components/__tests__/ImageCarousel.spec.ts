import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImageCarousel from '../ImageCarousel.vue'

const sampleImages = [
  '/img/photo1.jpg',
  '/img/photo2.jpg',
  '/img/photo3.jpg',
]

describe('ImageCarousel', () => {
  it('renders the carousel container', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    expect(wrapper.find('[data-testid="image-carousel"]').exists()).toBe(true)
  })

  it('displays the first image by default', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/img/photo1.jpg')
  })

  it('renders previous and next navigation buttons', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    expect(wrapper.find('[data-testid="carousel-prev"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="carousel-next"]').exists()).toBe(true)
  })

  it('shows the next image when clicking next button', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.attributes('src')).toBe('/img/photo2.jpg')
  })

  it('shows the previous image when clicking prev button', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    // go to second image first
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await wrapper.find('[data-testid="carousel-prev"]').trigger('click')

    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.attributes('src')).toBe('/img/photo1.jpg')
  })

  it('does not go before the first image', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    await wrapper.find('[data-testid="carousel-prev"]').trigger('click')

    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.attributes('src')).toBe('/img/photo1.jpg')
  })

  it('does not go past the last image', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    // advance to the end
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    // try to go past
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.attributes('src')).toBe('/img/photo3.jpg')
  })

  it('disables the prev button on the first image', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    const prevBtn = wrapper.find('[data-testid="carousel-prev"]')
    expect(prevBtn.attributes('disabled')).toBeDefined()
  })

  it('disables the next button on the last image', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    const nextBtn = wrapper.find('[data-testid="carousel-next"]')
    expect(nextBtn.attributes('disabled')).toBeDefined()
  })

  it('enables the next button when not on the last image', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    const nextBtn = wrapper.find('[data-testid="carousel-next"]')
    expect(nextBtn.attributes('disabled')).toBeUndefined()
  })

  it('enables the prev button when not on the first image', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    const prevBtn = wrapper.find('[data-testid="carousel-prev"]')
    expect(prevBtn.attributes('disabled')).toBeUndefined()
  })

  it('displays only one image at a time', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    const images = wrapper.findAll('[data-testid="carousel-image"]')
    expect(images).toHaveLength(1)
  })

  it('shows an image indicator with the current position', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    const indicator = wrapper.find('[data-testid="carousel-indicator"]')
    expect(indicator.exists()).toBe(true)
    expect(indicator.text()).toContain('1')
    expect(indicator.text()).toContain('3')
  })

  it('updates the indicator when navigating', async () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: sampleImages },
    })
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    const indicator = wrapper.find('[data-testid="carousel-indicator"]')
    expect(indicator.text()).toContain('2')
    expect(indicator.text()).toContain('3')
  })

  it('handles a single image without errors', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: ['/img/only.jpg'] },
    })
    const img = wrapper.find('[data-testid="carousel-image"]')
    expect(img.attributes('src')).toBe('/img/only.jpg')

    const prevBtn = wrapper.find('[data-testid="carousel-prev"]')
    const nextBtn = wrapper.find('[data-testid="carousel-next"]')
    expect(prevBtn.attributes('disabled')).toBeDefined()
    expect(nextBtn.attributes('disabled')).toBeDefined()
  })

  it('handles an empty images array gracefully', () => {
    const wrapper = mount(ImageCarousel, {
      props: { images: [] },
    })
    expect(wrapper.find('[data-testid="image-carousel"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="carousel-image"]').exists()).toBe(false)
  })
})
