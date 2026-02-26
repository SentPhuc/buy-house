<script setup lang="ts">
import { computed, toValue } from 'vue'
import type { MaybeRef } from 'vue'
import { formatMonthYear } from '@/utils/formatMonthYear'
import { isFutureOrCurrentMonth } from '@/utils/formatMonthYear'
import chevronLeft from '@/assets/icons/chevron-left.svg'
import chevronRight from '@/assets/icons/chevron-right.svg'

const props = defineProps<{
  month: MaybeRef<number>
  year: MaybeRef<number>
}>()

const monthVal = computed(() => toValue(props.month))
const yearVal = computed(() => toValue(props.year))

const emit = defineEmits<{
  'update:month': [value: number]
  'update:year': [value: number]
}>()

const label = computed(() => formatMonthYear(monthVal.value, yearVal.value))

const labelParts = computed(() => {
  const s = label.value
  const lastSpace = s.lastIndexOf(' ')
  if (lastSpace === -1) return { monthName: s, year: '' }
  return {
    monthName: s.slice(0, lastSpace),
    year: s.slice(lastSpace + 1),
  }
})

const now = new Date()
const currentMonth = now.getMonth()
const currentYear = now.getFullYear()

function canGoPrev() {
  if (yearVal.value < currentYear) return false
  if (yearVal.value > currentYear) return true
  return monthVal.value > currentMonth
}

function prev() {
  if (!canGoPrev()) return
  let m = monthVal.value - 1
  let y = yearVal.value
  if (m < 0) {
    m = 11
    y -= 1
  }
  if (!isFutureOrCurrentMonth(m, y)) return
  emit('update:month', m)
  emit('update:year', y)
}

function next() {
  let m = monthVal.value + 1
  let y = yearVal.value
  if (m > 11) {
    m = 0
    y += 1
  }
  emit('update:month', m)
  emit('update:year', y)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    next()
  }
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <legend class="block md:text-sm text-xs font-normal text-[#1E2A32] font-sans mb-0">
      Reach goal by
    </legend>
    <fieldset
      id="reachDate"
      class="flex flex-col gap-1 border-0 p-0 m-0 min-w-0"
      aria-label="Reach goal by"
    >
      <div
        class="flex items-center h-14 border border-[#E9EEF2] rounded-lg bg-white overflow-hidden"
      >
        <button
          type="button"
          class="shrink-0 w-12 h-full cursor-pointer flex items-center justify-center text-[#8A9CA9] hover:bg-[#F4F8FA] disabled:opacity-40 disabled:hover:bg-transparent min-h-[44px]"
          aria-label="Previous month"
          :disabled="!canGoPrev()"
          @click="prev"
          @keydown="onKeydown"
        >
          <img :src="chevronLeft" alt="" class="w-6 h-6" aria-hidden="true" />
        </button>
        <span
          class="flex-1 flex flex-col items-center justify-center text-center md:text-base text-sm text-[#1E2A32] font-display tabular-nums"
        >
          <span class="font-semibold">{{ labelParts.monthName }}</span>
          <span class="text-[#708797] text-sm">{{ labelParts.year }}</span>
        </span>
        <button
          type="button"
          class="shrink-0 w-12 h-full cursor-pointer flex items-center justify-center text-[#8A9CA9] hover:bg-[#F4F8FA] min-h-[44px]"
          aria-label="Next month"
          @click="next"
          @keydown="onKeydown"
        >
          <img :src="chevronRight" alt="" class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </fieldset>
  </div>
</template>
