<script setup lang="ts">
import { computed, toValue } from 'vue'
import type { MaybeRef } from 'vue'

interface Breakdown {
  totalMonths: number
  formattedAmount: string
  monthYear: string
}

const props = defineProps<{
  monthlyAmountDisplay: MaybeRef<string>
  breakdown: MaybeRef<Breakdown>
}>()

const monthlyDisplay = computed(() => toValue(props.monthlyAmountDisplay))
const breakdownVal = computed(() => toValue(props.breakdown))
</script>

<template>
  <div class="border border-[#E9EEF2] rounded-lg overflow-hidden bg-white">
    <div class="flex flex-wrap items-center justify-between gap-4 md:px-8 md:py-6 p-6">
      <div>
        <p class="md:text-xl text-lg font-medium text-[#1E2A32] font-sans">Monthly amount</p>
      </div>
      <p
        class="text-2xl md:text-[32px] font-medium text-[#0079FF] font-display text-right tabular-nums"
      >
        {{ monthlyDisplay }}
      </p>
    </div>
    <div class="bg-[#F4F8FA] md:px-8 px-6 py-6">
      <p class="text-xs text-[#1E2A32] font-sans leading-normal md:text-left text-center">
        You're planning
        <strong class="font-semibold">
          {{ breakdownVal?.totalMonths }}
          monthly deposit{{ breakdownVal?.totalMonths !== 1 ? 's' : '' }}
        </strong>
        to reach your
        <strong class="font-semibold">
          {{ breakdownVal?.formattedAmount }}
        </strong>
        goal by
        <strong class="font-semibold">
          {{ breakdownVal?.monthYear }} </strong
        >.
      </p>
    </div>
  </div>
</template>
