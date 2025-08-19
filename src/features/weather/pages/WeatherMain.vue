<script setup lang="ts">
import WeatherForm from '../components/WeatherForm.vue'
import WeatherCard from '../components/WeatherCard.vue'
import { computed } from 'vue'
import { useFormStore } from '../stores/form'

const formStore = useFormStore()
const weatherVisible = computed<boolean>(() => !!formStore.form.village)
</script>

<template>
  <div class="flex flex-col items-center h-screen pt-[12vh]">
    <div class="text-3xl font-semibold mb-3">Weather App</div>
    <WeatherForm v-if="!weatherVisible" />
    <WeatherCard v-else />
  </div>
</template>

<style scoped></style>
