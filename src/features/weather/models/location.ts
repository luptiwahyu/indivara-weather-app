export interface Location {
  code: string
  name: string
}

export interface LocationMeta {
  administrative_area_level: string
  updated_at: string
}

export interface LocationResponse {
  data: Location[]
  meta: LocationMeta
}
