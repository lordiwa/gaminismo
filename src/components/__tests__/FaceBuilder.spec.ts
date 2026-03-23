import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FaceBuilder from '../FaceBuilder.vue'
import { buildCompositeSvg } from '../FaceBuilder.vue'

describe('FaceBuilder', () => {
  it('renders the face canvas', () => {
    const wrapper = mount(FaceBuilder)
    expect(wrapper.find('[data-testid="face-canvas"]').exists()).toBe(true)
  })

  it('renders 6 picker slots', () => {
    const wrapper = mount(FaceBuilder)
    const slots = wrapper.findAll('.picker-slot')
    expect(slots).toHaveLength(6)
  })

  it('click on picker slot adds part to canvas and replaces the slot', async () => {
    const wrapper = mount(FaceBuilder)
    const canvas = wrapper.find('[data-testid="face-canvas"]')

    expect(canvas.findAll('.face-part')).toHaveLength(0)

    const firstSlot = wrapper.findAll('.picker-slot')[0]
    const originalSvg = firstSlot.find('svg g').html()
    await firstSlot.trigger('click')

    expect(canvas.findAll('.face-part')).toHaveLength(1)
  })

  it('places parts at random positions within canvas bounds', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const part = wrapper.find('.face-part')
    const style = part.attributes('style') || ''
    expect(style).toContain('left:')
    expect(style).toContain('top:')
  })

  it('activates drag state on mousedown on a placed part', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const part = wrapper.find('.face-part')
    await part.trigger('mousedown', { clientX: 100, clientY: 100 })

    expect(part.classes()).toContain('dragging')
  })

  it('updates part position on mousemove during drag', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const part = wrapper.find('.face-part')
    const canvas = wrapper.find('[data-testid="face-canvas"]')

    const canvasEl = canvas.element as HTMLElement
    canvasEl.getBoundingClientRect = () => ({
      x: 0, y: 0, width: 280, height: 280,
      top: 0, left: 0, right: 280, bottom: 280,
      toJSON() {},
    })

    await part.trigger('mousedown', { clientX: 50, clientY: 50 })
    await canvas.trigger('mousemove', { clientX: 120, clientY: 130 })
    await canvas.trigger('mouseup')

    const updatedPart = wrapper.find('.face-part')
    expect(updatedPart.classes()).not.toContain('dragging')
  })

  it('right-click on placed part shows context menu', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    expect(wrapper.find('.context-menu').exists()).toBe(false)

    const part = wrapper.find('.face-part')
    await part.trigger('contextmenu', { clientX: 100, clientY: 100 })

    expect(wrapper.find('.context-menu').exists()).toBe(true)
    expect(wrapper.find('[data-testid="ctx-clone"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="ctx-delete"]').exists()).toBe(true)
  })

  it('clone duplicates the part with offset', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const canvas = wrapper.find('[data-testid="face-canvas"]')
    expect(canvas.findAll('.face-part')).toHaveLength(1)

    const part = wrapper.find('.face-part')
    await part.trigger('contextmenu', { clientX: 100, clientY: 100 })
    await wrapper.find('[data-testid="ctx-clone"]').trigger('click')

    expect(canvas.findAll('.face-part')).toHaveLength(2)
  })

  it('delete removes the part from canvas', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const canvas = wrapper.find('[data-testid="face-canvas"]')
    expect(canvas.findAll('.face-part')).toHaveLength(1)

    const part = wrapper.find('.face-part')
    await part.trigger('contextmenu', { clientX: 100, clientY: 100 })
    await wrapper.find('[data-testid="ctx-delete"]').trigger('click')

    expect(canvas.findAll('.face-part')).toHaveLength(0)
    expect(wrapper.find('.context-menu').exists()).toBe(false)
  })

  it('click outside closes the context menu', async () => {
    const wrapper = mount(FaceBuilder)
    await wrapper.findAll('.picker-slot')[0].trigger('click')

    const part = wrapper.find('.face-part')
    await part.trigger('contextmenu', { clientX: 100, clientY: 100 })
    expect(wrapper.find('.context-menu').exists()).toBe(true)

    const canvas = wrapper.find('[data-testid="face-canvas"]')
    await canvas.trigger('click')

    expect(wrapper.find('.context-menu').exists()).toBe(false)
  })

  it('save button exists', () => {
    const wrapper = mount(FaceBuilder)
    expect(wrapper.find('[data-testid="save-face"]').exists()).toBe(true)
  })

  it('buildCompositeSvg generates valid SVG with positioned parts', () => {
    const parts = [
      { id: 'eye-01', category: 'eye', svg: '<circle cx="30" cy="30" r="5"/>', x: 50, y: 60, instanceId: 1 },
      { id: 'mouth-01', category: 'mouth', svg: '<path d="M0 0"/>', x: 100, y: 120, instanceId: 2 },
    ]

    const result = buildCompositeSvg(parts, 280, 280)

    expect(result).toContain('<svg')
    expect(result).toContain('width="280"')
    expect(result).toContain('height="280"')
    expect(result).toContain('translate(50, 60)')
    expect(result).toContain('translate(100, 120)')
    expect(result).toContain('<circle cx="30" cy="30" r="5"/>')
    expect(result).toContain('<path d="M0 0"/>')
  })
})
