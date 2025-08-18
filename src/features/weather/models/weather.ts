export interface Location {
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

export interface Weather {
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

export interface WeatherData {
  lokasi: Location
  cuaca: Weather[][]
}

export interface WeatherResponse {
  lokasi: Location
  data: WeatherData[]
}
