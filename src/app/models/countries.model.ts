

export interface CountryResponse {
  flags: ImagesCountry
  flag: string
  coatOfArms: ImagesCountry
  latlng: number[]
  name: ResponseNamesOfCountry<Record<string, NamesOfCountry>>
  region: string
  subregion?: string
  capital: string[]
  capitalInfo: { latlng?: number[] }
  population: number
  currencies: Record<string, Currency>
  timezones: string[]
  unMember: boolean
  independent: boolean
  landlocked: boolean
  languages: Record<string, string>
  gini?: Record<string, number>
  maps: MapsCountry
  area: number
  borders: string[]
}

export interface Country {
  flag: string
  flagName: string
  coatOfArms: string
  latlng: number[]
  names: ResponseNamesOfCountry<NamesOfCountry[]>
  region: string
  subregion?: string
  capital: string[]
  capitalLatlng: number[]
  population: number
  currencies: Currency[]
  timezones: string[]
  unMember: boolean
  independent: boolean
  landlocked: boolean
  languages: string[]
  gini?: string
  maps: MapsCountry
  area: number
  borders: string[]
}

interface ImagesCountry {
  svg: string
  png: string
  alt?: string
}

export interface NamesOfCountry {
  common: string
  official: string
}

export interface ResponseNamesOfCountry<T> extends NamesOfCountry {
nativeName: T
}

interface MapsCountry {
  googleMaps: string,
  openStreetMaps: string
}

export interface Currency {
name: string
symbol:string
}
