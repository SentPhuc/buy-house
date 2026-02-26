import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SuccessModal from '@/components/SuccessModal.vue'

describe('SuccessModal', () => {
  it('shows success message and summary when open', () => {
    const wrapper = mount(SuccessModal, {
      props: {
        show: true,
        amount: 25000,
        reachMonth: 5,
        reachYear: 2026,
        monthlyAmount: 2000,
      },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.text()).toContain('Success!')
    expect(wrapper.text()).toContain('The information has been set successfully')
    expect(wrapper.text()).toContain('Buy a house')
    expect(wrapper.text()).toContain('$25,000.00')
    expect(wrapper.text()).toContain('June 2026')
    expect(wrapper.text()).toContain('$2,000.00')
  })

  it('emits close when OK clicked', async () => {
    const wrapper = mount(SuccessModal, {
      props: { show: true, amount: 0, reachMonth: 0, reachYear: 2025, monthlyAmount: 0 },
      global: { stubs: { Teleport: true } },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})
