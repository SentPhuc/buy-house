import { describe, it, expect } from 'vitest'
import { parseAmount, stripToNumeric } from '@/utils/parseAmount'

describe('parseAmount', () => {
  it('parses string with commas and decimals to number', () => {
    expect(parseAmount('1,234.56')).toBe(1234.56)
    expect(parseAmount('3,500.45')).toBe(3500.45)
    expect(parseAmount('100')).toBe(100)
  })

  it('returns 0 for empty or invalid', () => {
    expect(parseAmount('')).toBe(0)
    expect(parseAmount('abc')).toBe(0)
  })
})

describe('stripToNumeric', () => {
  it('strips non-numeric except one decimal and up to 2 decimal places', () => {
    expect(stripToNumeric('1,234.56')).toBe('1234.56')
    expect(stripToNumeric('abc123')).toBe('123')
    expect(stripToNumeric('12.345')).toBe('12.34')
  })

  it('allows integer only', () => {
    expect(stripToNumeric('5000')).toBe('5000')
  })
})
