<script setup lang="ts">
import { computed, toValue, type MaybeRef } from 'vue'
import { formatCurrencyDisplay } from '@/utils/formatCurrency'
import { formatMonthYear } from '@/utils/formatMonthYear'

const props = defineProps<{
  show: MaybeRef<boolean>
  amount: MaybeRef<number>
  reachMonth: MaybeRef<number>
  reachYear: MaybeRef<number>
  monthlyAmount: MaybeRef<number>
}>()

const showVal = computed(() => toValue(props.show))
const amountVal = computed(() => toValue(props.amount))
const reachMonthVal = computed(() => toValue(props.reachMonth))
const reachYearVal = computed(() => toValue(props.reachYear))
const monthlyAmountVal = computed(() => toValue(props.monthlyAmount))

function monthYearLabel(month: number, year: number) {
  return formatMonthYear(month, year)
}

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="showVal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      @click.self="emit('close')"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-8" @click.stop>
        <h2 id="modal-title" class="text-xl font-semibold text-[#1E2A32] font-sans mb-4">
          Success!
        </h2>
        <p class="text-[#4D6475] font-sans mb-6">The information has been set successfully.</p>
        <dl class="space-y-2 text-sm">
          <div class="flex justify-between">
            <dt class="text-[#708797]">Goal</dt>
            <dd class="font-medium text-[#1E2A32]">Buy a house</dd>
          </div>
          <div class="flex justify-between">
            <dt class="text-[#708797]">Total amount</dt>
            <dd class="font-medium text-[#1E2A32]">{{ formatCurrencyDisplay(amountVal) }}</dd>
          </div>
          <div class="flex justify-between">
            <dt class="text-[#708797]">Reach goal by</dt>
            <dd class="font-medium text-[#1E2A32]">
              {{ monthYearLabel(reachMonthVal, reachYearVal) }}
            </dd>
          </div>
          <div class="flex justify-between">
            <dt class="text-[#708797]">Monthly amount</dt>
            <dd class="font-medium text-[#0079FF]">
              {{ formatCurrencyDisplay(monthlyAmountVal) }}
            </dd>
          </div>
        </dl>
        <div class="mt-8 flex justify-end">
          <button
            type="button"
            class="h-12 px-6 cursor-pointer rounded-[32px] bg-[#1B31A8] text-white text-base font-semibold font-sans hover:opacity-90"
            @click="emit('close')"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
