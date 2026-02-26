import { describe, it, expect } from 'vitest'
import { getTotalMonths } from '@/utils/getTotalMonths'

describe('getTotalMonths', () => {
  it('returns months from current to reach month', () => {
    // Feb 2025 (month=1) to Oct 2025 (month=9) -> 8 months
    const from = new Date(2025, 1, 15)
    expect(getTotalMonths(9, 2025, from)).toBe(8)
  })

  it('same month returns 0', () => {
    const from = new Date(2025, 3, 1)
    expect(getTotalMonths(3, 2025, from)).toBe(0)
  })

  it('past month returns 0', () => {
    const from = new Date(2025, 5, 1)
    expect(getTotalMonths(3, 2025, from)).toBe(0)
  })

  it('next year', () => {
    const from = new Date(2025, 1, 1)
    expect(getTotalMonths(1, 2026, from)).toBe(12)
  })
})
