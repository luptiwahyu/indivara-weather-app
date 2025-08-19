<script setup lang="ts">
import { computed } from 'vue'
import { useProvinceStore } from '../stores/province'
import { useRegencyStore } from '../stores/regency'
import { useDistrictStore } from '../stores/district'
import { useVillageStore } from '../stores/village'
import type { Location } from '../models/location'
import { useWeatherStore } from '../stores/weather'
import { useFormStore } from '../stores/form'

const provinceStore = useProvinceStore()
const regencyStore = useRegencyStore()
const districtStore = useDistrictStore()
const villageStore = useVillageStore()
const weatherStore = useWeatherStore()
const formStore = useFormStore()

const form = formStore.form

provinceStore.fetchProvinces()

const provinces = computed<Location[]>(() => provinceStore.provinces)
const provincesLoading = computed<boolean>(() => provinceStore.loading)
const regencies = computed<Location[]>(() => regencyStore.regencies)
const regenciesLoading = computed<boolean>(() => regencyStore.loading)
const districts = computed<Location[]>(() => districtStore.districts)
const districtsLoading = computed<boolean>(() => districtStore.loading)
const villages = computed<Location[]>(() => villageStore.villages)
const villagesLoading = computed<boolean>(() => villageStore.loading)
const weather = computed(() => weatherStore.locationWeather)
const weatherLoading = computed(() => weatherStore.loading)

function onChangeProvince(): void {
  formStore.resetRegencyDistrictVillage()
  regencyStore.fetchRegencies(form.province)
}

function onChangeRegency(): void {
  formStore.resetDistrictVillage()
  districtStore.fetchDistricts(form.regency)
}

function onChangeDistrict(): void {
  formStore.resetVillage()
  villageStore.fetchVillages(form.district)
}

function onSelectVillage(): void {
  if (form.village) {
    weatherStore.fetchWeather(form.village)
  }
}
</script>

<template>
  <div>
    <div class="text-lg mb-5 text-center">
      Please choose location
    </div>
    <select
      class="input-width"
      placeholder="Select Province"
      v-model="form.province"
      @change="onChangeProvince"
    >
      <option value="">
        {{ provincesLoading ? 'Loading...' : 'Select Province' }}
      </option>
      <option v-for="prov in provinces" :key="prov.code" :value="prov.code">
        {{ prov.name }}
      </option>
    </select>

    <div v-if="!!form.province">
      <br />
      <select
        class="input-width"
        placeholder="Select Regency"
        v-model="form.regency"
        @change="onChangeRegency"
      >
        <option value="">
          {{ regenciesLoading ? 'Loading...' : 'Select Regency' }}
        </option>
        <option v-for="regency in regencies" :key="regency.code" :value="regency.code">
          {{ regency.name }}
        </option>
      </select>
    </div>

    <div v-if="!!form.regency">
      <br />
      <select
        class="input-width"
        placeholder="Select District"
        v-model="form.district"
        @change="onChangeDistrict"
      >
        <option value="">
          {{ districtsLoading ? 'Loading...' : 'Select District' }}
        </option>
        <option v-for="district in districts" :key="district.code" :value="district.code">
          {{ district.name }}
        </option>
      </select>
    </div>

    <div v-if="!!form.district">
      <br />
      <select
        class="input-width"
        placeholder="Select Village"
        v-model="form.village"
        @change="onSelectVillage"
      >
        <option value="">
          {{ villagesLoading ? 'Loading...' : 'Select Village' }}
        </option>
        <option v-for="village in villages" :key="village.code" :value="village.code">
          {{ village.name }}
        </option>
      </select>
    </div>

    <div v-show="!!form.village">
      <br />
      <pre v-show="weatherLoading">Loading...</pre>
      <pre v-show="!weatherLoading">{{ weather }}</pre>
    </div>
  </div>
</template>

<style scoped>
.input-width {
  width: 260px;
}
</style>
