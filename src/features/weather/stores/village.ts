import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Location, LocationResponse } from '../models/location'
import { BASE_URL } from '../constants'

export const useVillageStore = defineStore('village', () => {
  const villages = ref<Location[]>([])
  const loading = ref<boolean>(false)

  const fetchVillages = async (districtCode: string): Promise<void> => {
    loading.value = true
    try {
      const villageUrl: string = `${BASE_URL}villages/${districtCode}.json`
      const response: AxiosResponse<LocationResponse> = await axios.get(villageUrl)
      villages.value = response.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching villages: ', error.message)
    } finally {
      loading.value = false
    }
  }

  return {
    villages,
    loading,
    fetchVillages,
  }
})
