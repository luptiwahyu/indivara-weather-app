import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Location, LocationResponse } from '../models/location'
import { BASE_URL } from '../constants'

export const useRegencyStore = defineStore('regency', () => {
  const regencies = ref<Location[]>([])
  const loading = ref<boolean>(false)

  const fetchRegencies = async (provinceCode: string): Promise<void> => {
    loading.value = true
    try {
      const regencyUrl: string = `${BASE_URL}regencies/${provinceCode}.json`
      const response: AxiosResponse<LocationResponse> = await axios.get(regencyUrl)
      regencies.value = response.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching regencies:', error.message)
    } finally {
      loading.value = false
    }
  }

  return {
    regencies,
    loading,
    fetchRegencies,
  }
})
