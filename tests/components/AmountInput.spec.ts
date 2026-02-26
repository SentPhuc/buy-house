import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AmountInput from '@/components/AmountInput.vue'

describe('AmountInput', () => {
  it('shows Total amount label and input', () => {
    const wrapper = mount(AmountInput, {
      props: { modelValue: 0 },
      global: { stubs: { img: true } },
    })
    expect(wrapper.find('label').text()).toBe('Total amount')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('emits update:modelValue with parsed number on input', async () => {
    const wrapper = mount(AmountInput, {
      props: { modelValue: 0 },
      global: { stubs: { img: true } },
    })
    const input = wrapper.find('input')
    await input.setValue('3500.45')
    await input.trigger('input')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([3500.45])
  })
})
