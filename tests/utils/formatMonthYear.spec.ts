import { describe, it, expect } from 'vitest'
import { formatMonthYear, isFutureOrCurrentMonth } from '@/utils/formatMonthYear'

describe('formatMonthYear', () => {
  it('formats month and year', () => {
    expect(formatMonthYear(9, 2021)).toBe('October 2021')
    expect(formatMonthYear(0, 2025)).toBe('January 2025')
  })
})

describe('isFutureOrCurrentMonth', () => {
  const from = new Date(2025, 1, 15) // Feb 2025

  it('returns true for future month', () => {
    expect(isFutureOrCurrentMonth(5, 2025, from)).toBe(true)
    expect(isFutureOrCurrentMonth(0, 2026, from)).toBe(true)
  })

  it('returns true for current month', () => {
    expect(isFutureOrCurrentMonth(1, 2025, from)).toBe(true)
  })

  it('returns false for past month', () => {
    expect(isFutureOrCurrentMonth(0, 2025, from)).toBe(false)
    expect(isFutureOrCurrentMonth(1, 2024, from)).toBe(false)
  })
})
