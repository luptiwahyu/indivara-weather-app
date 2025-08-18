import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { ref } from 'vue'
import type { Location, LocationResponse } from '../models/location'
import { BASE_URL } from '@/shared/constants'

export const useDistrictStore = defineStore('district', () => {
  const districts = ref<Location[]>([])
  const loading = ref<boolean>(false)

  const fetchDistricts = async (regencyCode: string): Promise<void> => {
    loading.value = true
    try {
      const districtUrl: string = `${BASE_URL}districts/${regencyCode}.json`
      const response: AxiosResponse<LocationResponse> = await axios.get(districtUrl)
      districts.value = response.data.data
    } catch (err) {
      const error = err as AxiosError
      console.error('Error fetching districts:', error.message)
    } finally {
      loading.value = false
    }
  }

  return {
    districts,
    loading,
    fetchDistricts,
  }
})
