<script setup lang="ts">
import WeatherForm from '../components/WeatherForm.vue'
import WeatherCard from '../components/WeatherCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="text-3xl leading-20">Weather App</div>
    <WeatherForm />
    <WeatherCard />
  </div>
</template>

<style scoped></style>
