import { ref, computed } from 'vue'
import { formatCurrency, formatCurrencyDisplay } from '../utils/formatCurrency'
import { getTotalMonths } from '../utils/getTotalMonths'
import { formatMonthYear } from '../utils/formatMonthYear'

const now = new Date()
let m = now.getMonth() + 12
let y = now.getFullYear()
if (m > 11) {
  m -= 12
  y += 1
}

export function useSavingsSimulation() {
  const amount = ref(25000)
  const reachMonth = ref(m)
  const reachYear = ref(y)
  const showModal = ref(false)

  const totalMonths = computed(() => getTotalMonths(reachMonth.value, reachYear.value))

  const monthlyAmount = computed(() => {
    const total = totalMonths.value
    if (total <= 0) return 0
    return amount.value / total
  })

  const monthlyAmountDisplay = computed(() => formatCurrencyDisplay(monthlyAmount.value))

  const breakdown = computed(() => {
    const n = totalMonths.value
    const formattedAmount = formatCurrency(amount.value)
    const monthYear = formatMonthYear(reachMonth.value, reachYear.value)
    return { totalMonths: n, formattedAmount, monthYear }
  })

  const reachDateLabel = computed(() => formatMonthYear(reachMonth.value, reachYear.value))

  function openModal() {
    showModal.value = true
  }

  function closeModal() {
    showModal.value = false
  }

  function setReachMonth(value: number) {
    reachMonth.value = value
  }

  function setReachYear(value: number) {
    reachYear.value = value
  }

  return {
    amount,
    reachMonth,
    reachYear,
    showModal,
    totalMonths,
    monthlyAmount,
    monthlyAmountDisplay,
    breakdown,
    reachDateLabel,
    openModal,
    closeModal,
    setReachMonth,
    setReachYear,
  }
}
