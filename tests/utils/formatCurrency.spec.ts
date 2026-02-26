import { describe, it, expect } from 'vitest'
import { formatCurrency, formatCurrencyDisplay } from '@/utils/formatCurrency'

describe('formatCurrency', () => {
  it('formats number with comma and 2 decimals', () => {
    expect(formatCurrency(3500.45)).toBe('3,500.45')
    expect(formatCurrency(1234.56)).toBe('1,234.56')
    expect(formatCurrency(0)).toBe('0.00')
  })

  it('handles NaN and non-finite', () => {
    expect(formatCurrency(NaN)).toBe('0.00')
    expect(formatCurrency(Infinity)).toBe('0.00')
  })
})

describe('formatCurrencyDisplay', () => {
  it('adds leading $', () => {
    expect(formatCurrencyDisplay(3500.45)).toBe('$3,500.45')
    expect(formatCurrencyDisplay(0)).toBe('$0.00')
  })
})
