<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import SavingsCard from '@/components/SavingsCard.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F4F8FA] font-sans">
    <Navbar />
    <main class="px-4 md:px-0 pt-6 md:pt-12 pb-12">
      <h1 class="text-lg md:text-xl text-[#1B31A8] mb-6 max-w-[560px] mx-auto text-center">
        Let's plan your <span class="font-semibold">saving goal.</span>
      </h1>
      <SavingsCard />
    </main>
  </div>
</template>
