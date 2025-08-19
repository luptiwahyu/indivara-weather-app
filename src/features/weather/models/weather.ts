export interface LocationResponse {
  adm1: string
  adm2: string
  adm3: string
  adm4: string
  provinsi: string
  kotkab: string
  kecamatan: string
  desa: string
  lon: number
  lat: number
  timezone: string
  type?: string
}

export interface WeatherResponse {
  datetime: string
  t: number
  tcc: number
  tp: number
  weather: number
  weather_desc: string
  weather_desc_en: string
  wd_deg: number
  wd: string
  wd_to: string
  ws: number
  hu: number
  vs: number
  vs_text: string
  time_index: string
  analysis_date: string
  image: string
  utc_datetime: string
  local_datetime: string
  source?: string
}

export interface WeatherDataResponse {
  lokasi: LocationResponse
  cuaca: WeatherResponse[][]
}

export interface WeatherResponse {
  lokasi: LocationResponse
  data: WeatherDataResponse[]
}

export interface LocationWeather {
  locationCode: string
  locationName: string
  datetime: string
  weatherDesc: string
  temperature: number
  humidity: number
  windSpeed: number
  windDirection: string
  image: string
}
