import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactTrash from '../ContactTrash.vue'

describe('ContactTrash', () => {
  it('renders trash icon', () => {
    const wrapper = mount(ContactTrash)
    expect(wrapper.find('[data-testid="trash-icon"]').exists()).toBe(true)
  })

  it('does not show contact info initially', () => {
    const wrapper = mount(ContactTrash)
    expect(wrapper.find('[data-testid="contact-box"]').exists()).toBe(false)
  })

  it('shows contact info when trash is clicked', async () => {
    const wrapper = mount(ContactTrash)
    await wrapper.find('[data-testid="trash-icon"]').trigger('click')
    expect(wrapper.find('[data-testid="contact-box"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('ejemplo@email.com')
    expect(wrapper.text()).toContain('@portfolio')
    expect(wrapper.text()).toContain('github.com/portfolio')
  })

  it('hides contact info when trash is clicked again', async () => {
    const wrapper = mount(ContactTrash)
    await wrapper.find('[data-testid="trash-icon"]').trigger('click')
    await wrapper.find('[data-testid="trash-icon"]').trigger('click')
    expect(wrapper.find('[data-testid="contact-box"]').exists()).toBe(false)
  })
})
