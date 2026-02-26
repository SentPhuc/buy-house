<script setup lang="ts">
import { onMounted } from 'vue'
import AmountInput from './AmountInput.vue'
import ReachDateInput from './ReachDateInput.vue'
import MonthlyAmountInfo from './MonthlyAmountInfo.vue'
import SuccessModal from './SuccessModal.vue'
import { useSavingsSimulation } from '@/composables/useSavingsSimulation'
import buyHouseIcon from '@/assets/icons/buy-house.svg'

const sim = useSavingsSimulation()

onMounted(() => {
  const now = new Date()
  let m = now.getMonth() + 12
  let y = now.getFullYear()
  if (m > 11) {
    m -= 12
    y += 1
  }
  sim.setReachMonth(m)
  sim.setReachYear(y)
})
</script>

<template>
  <div class="w-full max-w-[560px] mx-auto bg-white rounded-lg p-6 md:p-10 shadow-card">
    <!-- Header: icon + title + subtitle -->
    <div class="flex items-start gap-4 mb-8">
      <img :src="buyHouseIcon" alt="" class="w-16 h-16 shrink-0" aria-hidden="true" />
      <div>
        <h2 class="md:text-2xl text-xl font-medium text-[#1E2A32] font-display">Buy a house</h2>
        <p class="md:text-base text-sm text-[#708797] font-sans mt-0.5">Saving goal</p>
      </div>
    </div>

    <!-- Inputs: row on desktop, stack on mobile -->
    <div class="grid grid-cols-1 md:grid-cols-[272px_1fr] gap-6 md:gap-4 mb-6">
      <AmountInput v-model="sim.amount" />
      <ReachDateInput
        :month="sim.reachMonth"
        :year="sim.reachYear"
        @update:month="sim.setReachMonth($event)"
        @update:year="sim.setReachYear($event)"
      />
    </div>

    <!-- Monthly amount info -->
    <MonthlyAmountInfo
      :monthly-amount-display="sim.monthlyAmountDisplay"
      :breakdown="sim.breakdown"
      class="mb-8"
    />

    <!-- Confirm -->
    <div class="flex justify-center">
      <button
        type="button"
        class="w-full md:w-[320px] h-14 md:mb-0 mb-4 cursor-pointer rounded-[32px] bg-[#1B31A8] text-white text-base font-semibold font-sans hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#1B31A8] focus-visible:ring-offset-2"
        @click="sim.openModal()"
      >
        Confirm
      </button>
    </div>

    <SuccessModal
      :show="sim.showModal"
      :amount="sim.amount"
      :reach-month="sim.reachMonth"
      :reach-year="sim.reachYear"
      :monthly-amount="sim.monthlyAmount"
      @close="sim.closeModal()"
    />
  </div>
</template>
