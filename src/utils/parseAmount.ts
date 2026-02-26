/**
 * Parse a string that may contain commas and decimals into a number.
 * e.g. "1,234.56" -> 1234.56
 */
export function parseAmount(input: string): number {
  if (!input || typeof input !== 'string') return 0
  const cleaned = input.replace(/,/g, '')
  const parsed = parseFloat(cleaned)
  return Number.isNaN(parsed) ? 0 : parsed
}

/**
 * Strip non-numeric characters except one optional decimal point and digits after it.
 * Used for input that should only allow numbers.
 */
export function stripToNumeric(input: string): string {
  const hasDecimal = input.includes('.')
  const parts = input.split('.')
  const intPart = (parts[0] ?? '').replace(/\D/g, '')
  const decPart = parts.length > 1 ? (parts[1] ?? '').replace(/\D/g, '').slice(0, 2) : ''
  if (!hasDecimal) return intPart
  return decPart ? `${intPart}.${decPart}` : intPart || '0'
}
