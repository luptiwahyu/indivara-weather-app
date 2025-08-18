<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProvinceStore } from '../stores/province'
import { useRegencyStore } from '../stores/regency'
import { useDistrictStore } from '../stores/district'
import { useVillageStore } from '../stores/village'
import type { Location } from '../models/location'
import { useWeatherStore } from '../stores/weather'

const provinceStore = useProvinceStore()
const regencyStore = useRegencyStore()
const districtStore = useDistrictStore()
const villageStore = useVillageStore()
const weatherStore = useWeatherStore()

const province = ref<string>('')
const regency = ref<string>('')
const district = ref<string>('')
const village = ref<string>('')

provinceStore.fetchProvinces()

const provinces = computed<Location[]>(() => provinceStore.provinces)
const provincesLoading = computed<boolean>(() => provinceStore.loading)
const regencies = computed<Location[]>(() => regencyStore.regencies)
const regenciesLoading = computed<boolean>(() => regencyStore.loading)
const districts = computed<Location[]>(() => districtStore.districts)
const districtsLoading = computed<boolean>(() => districtStore.loading)
const villages = computed<Location[]>(() => villageStore.villages)
const villagesLoading = computed<boolean>(() => villageStore.loading)
const locationWeather = computed(() => weatherStore.locationWeather)

function onChangeProvince(): void {
  regency.value = ''
  district.value = ''
  village.value = ''
  regencyStore.fetchRegencies(province.value)
}

function onChangeRegency(): void {
  district.value = ''
  village.value = ''
  districtStore.fetchDistricts(regency.value)
}

function onChangeDistrict(): void {
  village.value = ''
  villageStore.fetchVillages(district.value)
}

function onSelectVillage(): void {
  if (village.value) {
    weatherStore.fetchWeather(village.value)
  }
}
</script>

<template>
  <h1>Weather App</h1>
  <select
    class="input-width"
    placeholder="Select Province"
    v-model="province"
    @change="onChangeProvince"
  >
    <option value="">
      {{ provincesLoading ? 'Loading...' : 'Select Province' }}
    </option>
    <option v-for="prov in provinces" :key="prov.code" :value="prov.code">
      {{ prov.name }}
    </option>
  </select>
  <br />
  <br />
  <select
    v-if="!!province"
    class="input-width"
    placeholder="Select Regency"
    v-model="regency"
    @change="onChangeRegency"
  >
    <option value="">
      {{ regenciesLoading ? 'Loading...' : 'Select Regency' }}
    </option>
    <option v-for="regency in regencies" :key="regency.code" :value="regency.code">
      {{ regency.name }}
    </option>
  </select>
  <br />
  <br />
  <select
    v-if="!!regency"
    class="input-width"
    placeholder="Select District"
    v-model="district"
    @change="onChangeDistrict"
  >
    <option value="">
      {{ districtsLoading ? 'Loading...' : 'Select District' }}
    </option>
    <option v-for="district in districts" :key="district.code" :value="district.code">
      {{ district.name }}
    </option>
  </select>
  <br />
  <br />
  <select
    v-if="!!district"
    class="input-width"
    placeholder="Select Village"
    v-model="village"
    @change="onSelectVillage"
  >
    <option value="">
      {{ villagesLoading ? 'Loading...' : 'Select Village' }}
    </option>
    <option v-for="village in villages" :key="village.code" :value="village.code">
      {{ village.name }}
    </option>
  </select>

  <br />
  <br />
  <pre v-if="!!village">{{ locationWeather }}</pre>
</template>

<style scoped>
.input-width {
  width: 220px;
}
</style>
