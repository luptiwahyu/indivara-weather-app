import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Location, LocationResponse } from '../models/location'
import { BASE_URL } from '../constants'

export const useProvinceStore = defineStore('province', () => {
  const provinces = ref<Location[]>([])
  const loading = ref<boolean>(false)

  const fetchProvinces = async (): Promise<void> => {
    loading.value = true
    try {
      const provinceUrl = `${BASE_URL}provinces.json`
      const response: AxiosResponse<LocationResponse> = await axios.get(provinceUrl)
      provinces.value = response.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching provinces:', error.message)
    } finally {
      loading.value = false
    }
  }

  return {
    provinces,
    loading,
    fetchProvinces,
  }
})
