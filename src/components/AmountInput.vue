<script setup lang="ts">
import { ref, watch, computed, toValue } from 'vue'
import type { MaybeRef } from 'vue'
import { formatCurrency } from '@/utils/formatCurrency'
import { stripToNumeric, parseAmount } from '@/utils/parseAmount'
import dollarIcon from '@/assets/icons/dollar-sign.svg'

const props = defineProps<{
  modelValue: MaybeRef<number>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const modelVal = computed(() => toValue(props.modelValue))
const display = ref(formatCurrency(modelVal.value))

watch(modelVal, (v) => {
  const next = formatCurrency(v)
  if (parseAmount(display.value) !== v) display.value = next
})

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  const raw = target.value
  const stripped = stripToNumeric(raw)
  display.value = stripped
  const num = parseAmount(stripped)
  emit('update:modelValue', num)
}

function onBlur() {
  const num = parseAmount(display.value)
  display.value = formatCurrency(num)
  emit('update:modelValue', num)
}

function onKeydown(e: KeyboardEvent) {
  const key = e.key
  if (/^\d$/.test(key)) return
  if (key === '.' && !(e.target as HTMLInputElement).value.includes('.')) return
  if (['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return
  if (e.ctrlKey || e.metaKey) {
    if (['a', 'c', 'v', 'x'].includes(key.toLowerCase())) return
  }
  e.preventDefault()
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="amount" class="md:text-sm text-xs font-normal text-[#1E2A32] font-sans">
      Total amount
    </label>
    <div class="flex items-center gap-2 h-14 px-3 border border-[#E9EEF2] rounded-lg bg-white">
      <img :src="dollarIcon" alt="" class="w-6 h-6 shrink-0" aria-hidden="true" />
      <input
        id="amount"
        type="text"
        inputmode="decimal"
        autocomplete="off"
        :value="display"
        class="flex-1 min-w-0 md:text-2xl text-xl font-medium text-[#4D6475] font-display bg-transparent border-none outline-none"
        placeholder="0.00"
        @input="onInput"
        @keydown="onKeydown"
        @blur="onBlur"
      />
    </div>
  </div>
</template>
