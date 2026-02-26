/**
 * Format a number as currency with comma thousands separator and 2 decimals.
 * e.g. 3500.45 -> "3,500.45"
 */
export function formatCurrency(value: number): string {
  if (Number.isNaN(value) || !Number.isFinite(value)) return '0.00'
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/**
 * Format for display with leading $ e.g. "$3,500.45"
 */
export function formatCurrencyDisplay(value: number): string {
  return `$${formatCurrency(value)}`
}
