const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/**
 * Format month (0-11) and year as "October 2021"
 */
export function formatMonthYear(month: number, year: number): string {
  const name = MONTH_NAMES[month] ?? 'January'
  return `${name} ${year}`
}

/**
 * Check if (month, year) is in the future or current month (not past).
 */
export function isFutureOrCurrentMonth(
  month: number,
  year: number,
  fromDate: Date = new Date()
): boolean {
  const fromYear = fromDate.getFullYear()
  const fromMonth = fromDate.getMonth()
  if (year > fromYear) return true
  if (year < fromYear) return false
  return month >= fromMonth
}
