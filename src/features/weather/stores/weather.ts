import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import type {
  WeatherResponse,
  LocationResponse,
  LocationWeather
} from '../models/weather'
import { compass } from '../utils/helper'

export const useWeatherStore = defineStore('weather', () => {
  const loading = ref<boolean>(false)
  const locationWeather = ref<LocationWeather | null>(null)

  const fetchWeather = async (villageCode: string): Promise<void> => {
    loading.value = true
    try {
      const url: string = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${villageCode}`
      const response: AxiosResponse<WeatherResponse> = await axios.get(url)
      const weather: WeatherResponse = response.data.data[0].cuaca[0][0]
      const location: LocationResponse = response.data.lokasi
      locationWeather.value = {
        locationCode: location.adm4,
        locationName: location.desa,
        localDatetime: weather.local_datetime,
        weatherDesc: weather.weather_desc_en,
        temperature: weather.t,
        humidity: weather.hu,
        windSpeed: weather.ws,
        windDirectionFrom: compass(weather.wd),
        windDirectionTo: compass(weather.wd_to),
        image: weather.image,
      }
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching weather: ', error.message)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    locationWeather,
    fetchWeather,
  }
})
