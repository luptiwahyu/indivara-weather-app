<script setup lang="ts">
import PinIcon from './icons/PinIcon.vue'
import WindIcon from './icons/WindIcon.vue'
import HumidityIcon from './icons/HumidityIcon.vue'
import DirectionIcon from './icons/DirectionIcon.vue'
import TimeIcon from './icons/TimeIcon.vue'
import { useFormStore } from '../stores/form'
import { useWeatherStore } from '../stores/weather'
import { computed } from 'vue'
import type { LocationWeather } from '../models/weather'

const formStore = useFormStore()
const weatherStore = useWeatherStore()

const loading = computed<boolean>(() => weatherStore.loading)
const weather = computed<LocationWeather | null>(() => weatherStore.locationWeather)

function changeLocation(): void {
  formStore.resetVillage()
}
</script>

<template>
  <div v-if="loading" class="text-lg text-center">Loading...</div>
  <div v-else>
    <div
      class="text-lg cursor-pointer hover:underline text-center mb-5"
      @click="changeLocation"
    >
      Change location
    </div>
    <div class="card">
      <div class="grid grid-cols-2 gap-2 place-items-center">
        <div>
          <img
            class="h-22"
            :src="weather?.image"
            alt="weather-icon"
          />
        </div>
        <div>
          <div class="text-7xl font-bold dark:text-slate-300">
            <span>{{ weather?.temperature }}</span>
            <span>°</span>
          </div>
          <div class="text-lg primary-text dark:text-[#6E85C1] mt-2">
            {{ weather?.weatherDesc }}
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-3 gap-3 place-items-center text-sm mt-10"
        align="center"
      >
        <div>
          <div title="Wind Speed">
            <WindIcon class="size-8 mb-1" />
          </div>
          <div class="caption dark:text-[#8497C9]">
            {{ weather?.windSpeed }} km/h
          </div>
        </div>
        <div>
          <div title="Location">
            <PinIcon class="size-8 mb-1" />
          </div>
          <div
            class="caption dark:text-[#8497C9] break-all location-text"
            :title="weather?.locationName"
          >
            {{ weather?.locationName }}
          </div>
        </div>
        <div>
          <div title="Humidity">
            <HumidityIcon class="size-8 mb-1" />
          </div>
          <div class="caption dark:text-[#8497C9]">
            {{ weather?.humidity }}%
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-2 place-items-center text-sm mt-5 mb-2"
        align="center"
      >
        <div>
          <div title="Time">
            <TimeIcon class="size-7 mb-1" />
          </div>
          <div
            class="caption dark:text-[#8497C9] break-all location-text !w-[140px]"
            :title="weather?.datetime"
          >
            {{ weather?.datetime }}
          </div>
        </div>
        <div>
          <div title="Wind Direction">
            <DirectionIcon class="size-7 mb-1" />
          </div>
          <div
            class="caption dark:text-[#8497C9] break-all location-text !w-[140px]"
            :title="weather?.windDirection"
          >
            {{ weather?.windDirection }}
          </div>
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
  @apply rounded-2xl px-4 py-10 drop-shadow-2xl w-80 bg-[#C9E5FF] dark:bg-[#1F2E54] transition-colors duration-300;
}

.location-text {
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
