import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import type { WeatherResponse } from '../models/weather'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<WeatherResponse | null>(null)
  const loading = ref<boolean>(false)

  const fetchWeather = async (villageCode: string): Promise<void> => {
    try {
      const url: string = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${villageCode}`
      const response: AxiosResponse<WeatherResponse> = await axios.get(url)
      weather.value = response.data
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching weather: ', error.message)
    }
  }

  return {
    weather,
    loading,
    fetchWeather,
  }
})
