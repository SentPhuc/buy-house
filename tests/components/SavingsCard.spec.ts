import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SavingsCard from '@/components/SavingsCard.vue'
import SuccessModal from '@/components/SuccessModal.vue'

describe('SavingsCard', () => {
  it('shows card with Buy a house and Saving goal', () => {
    const wrapper = mount(SavingsCard, {
      global: { stubs: { img: true } },
    })
    expect(wrapper.text()).toContain('Buy a house')
    expect(wrapper.text()).toContain('Saving goal')
  })

  it('has Confirm button that opens modal (integration: modal content tested in SuccessModal.spec)', async () => {
    const wrapper = mount(SavingsCard, {
      global: { stubs: { img: true } },
    })
    const btn = wrapper.findAll('button').find((w) => w.text() === 'Confirm')
    expect(btn).toBeDefined()
    expect(btn!.text()).toBe('Confirm')
    await btn!.trigger('click')
    const modal = wrapper.findComponent(SuccessModal)
    expect(modal.exists()).toBe(true)
  })
})
