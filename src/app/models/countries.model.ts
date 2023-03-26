

export interface CountryResponse {
  flags: ImagesCountry
  flag: string
  coatOfArms: ImagesCountry
  ltalng: number[]
  name: ResponseNamesOfCountry<Record<string, NamesOfCountry>>
  region: string
  subregion?: string
  capital: string[]
  capitalInfo: { latlgn?: number[] }
  population: number
  currencies: Record<string, Currency>
  timezone: string
  unMember: boolean
  independent: boolean
  landlocked: boolean
  languages: Record<string, string>
  gini?: number
  maps: MapsCountry
  area: number
}

export interface Country {
  flag: string
  flagName: string
  coatOfArms: string
  ltalng: number[]
  names: ResponseNamesOfCountry<NamesOfCountry[]>
  region: string
  subregion?: string
  capital: string[]
  capitalLtalng: number[]
  population: number
  currencies: Currency[]
  timezone: string
  unMember: boolean
  independent: boolean
  landlocked: boolean
  languages: string[]
  gini?: number
  maps: MapsCountry
  area: number
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
