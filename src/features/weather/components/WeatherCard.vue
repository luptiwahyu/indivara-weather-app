<script setup lang="ts">
import Pin from './icons/Pin.vue'
import Wind from './icons/Wind.vue'
import Humidity from './icons/Humidity.vue'
import Direction from './icons/Direction.vue'
import Time from './icons/Time.vue'

const iconColor = '#296399'
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-2 place-items-center">
      <div>
        <img
          class="h-22"
          src="https://api-apps.bmkg.go.id/storage/icon/cuaca/hujan ringan-am.svg"
          alt="weather-icon"
        />
      </div>
      <div>
        <div class="text-7xl font-bold dark:text-slate-300">
          <span>{{ '21' }}</span>
          <span>°</span>
        </div>
        <div class="text-lg primary-text dark:text-[#6E85C1] mt-2">
          {{ 'Light Rain' }}
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-3 gap-3 place-items-center text-sm mt-10 mb-2"
      align="center"
    >
      <div>
        <div title="Wind Speed">
          <Wind class="size-8 mb-1" :color="iconColor" />
        </div>
        <div class="caption dark:text-[#8497C9]">{{ '5.9' }} km/h</div>
      </div>
      <div>
        <div title="Location">
          <Pin class="size-8 mb-1" :color="iconColor" />
        </div>
        <div
          class="caption dark:text-[#8497C9] break-all location-text"
          :title="'Cibuntu'"
        >
          {{ 'Cibuntu' }}
        </div>
      </div>
      <div>
        <div title="Humidity">
          <Humidity class="size-8 mb-1" :color="iconColor" />
        </div>
        <div class="caption dark:text-[#8497C9]">{{ '85' }}%</div>
      </div>
    </div>

    <div
      class="grid grid-cols-2 gap-3 place-items-center text-sm mt-10 mb-2"
      align="center"
    >
      <div>
        <div title="Time">
          <Time class="size-8 mb-1" :color="iconColor" />
        </div>
        <div class="caption dark:text-[#8497C9]">{{ '19 Aug 2025, 15:00' }}</div>
      </div>
      <div>
        <div title="Wind Direction">
          <Direction class="size-8 mb-1" :color="iconColor" />
        </div>
        <div
          class="caption dark:text-[#8497C9]"
          :title="'North to Northeast'"
        >
          {{ 'North to Northeast' }}
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@reference '@/shared/styles/globals.css';

.caption {
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}

.card {
  @apply rounded-2xl px-4 py-10 m-5 drop-shadow-2xl w-80 bg-[#C9E5FF] dark:bg-[#1F2E54] transition-colors duration-300;
}

.location-text {
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
