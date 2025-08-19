import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Form } from '../models/form'

export const useFormStore = defineStore('form', () => {
  const form = ref<Form>({
    province: '',
    regency: '',
    district: '',
    village: '',
  })

  const resetRegencyDistrictVillage = (): void => {
    form.value.regency = ''
    form.value.district = ''
    form.value.village = ''
  }

  const resetDistrictVillage = (): void => {
    form.value.district = ''
    form.value.village = ''
  }

  const resetVillage = (): void => {
    form.value.village = ''
  }

  return {
    form,
    resetRegencyDistrictVillage,
    resetDistrictVillage,
    resetVillage,
  }
})
