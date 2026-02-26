import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReachDateInput from '@/components/ReachDateInput.vue'

describe('ReachDateInput', () => {
  it('shows Reach goal by label', () => {
    const wrapper = mount(ReachDateInput, {
      props: { month: 5, year: 2026 },
      global: { stubs: { img: true } },
    })
    expect(wrapper.text()).toContain('Reach goal by')
  })

  it('emits update:month and update:year when next is clicked', async () => {
    const wrapper = mount(ReachDateInput, {
      props: { month: 5, year: 2026 },
      global: { stubs: { img: true } },
    })
    const buttons = wrapper.findAll('button')
    const nextBtn = buttons[1]
    await nextBtn.trigger('click')
    expect(wrapper.emitted('update:month')).toBeTruthy()
    expect(wrapper.emitted('update:year')).toBeTruthy()
    expect(wrapper.emitted('update:month')![0]).toEqual([6])
    expect(wrapper.emitted('update:year')![0]).toEqual([2026])
  })
})
