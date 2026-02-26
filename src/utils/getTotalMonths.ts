/**
 * Number of full months from the start of current month to the start of reachMonth/reachYear.
 * Used for: "total months" of deposits to reach the goal by that month.
 * e.g. today Feb 2025, reach Oct 2025 -> 8 months.
 */
export function getTotalMonths(
  reachMonth: number,
  reachYear: number,
  fromDate: Date = new Date()
): number {
  const fromYear = fromDate.getFullYear()
  const fromMonth = fromDate.getMonth()
  const months = (reachYear - fromYear) * 12 + (reachMonth - fromMonth)
  return Math.max(0, months)
}
