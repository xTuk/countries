import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country, CountryResponse, Currency, NamesOfCountry, ResponseNamesOfCountry } from '../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private readonly http: HttpClient) { }

  getCountries() {
    return new Observable <Country[]>( observer => {
      this.http.get<CountryResponse[]>(environment.api + 'all').subscribe( response => {
        observer.next(response.map( (country) => this.parseCountries(country)))
      })
    })
  }


  private parseCountries(country: CountryResponse): Country {
    console.log(country.currencies)
    return {
      flag: country.flags?.svg,
      flagName: country?.flag,
      coatOfArms: country.coatOfArms?.svg,
      ltalng: country.capitalInfo?.latlgn || [],
      names: {
        common: country.name.common,
        nativeName: country.name.nativeName ? this.getNativeNames(country.name.nativeName) : [],
        official: country.name.official
      },
      region: country?.region,
      subregion: country?.subregion,
      capital: country?.capital || [],
      capitalLtalng: country.capitalInfo?.latlgn || [],
      population: country?.population,
      currencies: country.currencies ? this.getCurrencies(country.currencies) : [],
      timezone: country?.timezone,
      unMember: country?.unMember,
      independent: country?.independent,
      landlocked: country?.landlocked,
      languages: country.languages ? this.getLenguages(country.languages) : [],
      gini: country?.gini,
      maps: country?.maps,
      area: country?.area
    }
  }


  getCurrencies(currencies: Record<string,Currency>): Currency[] {
    return Object.keys(currencies).map( (key:string): Currency => {
      return {
        name: currencies[key].name,
        symbol: currencies[key].symbol
      }
    })
  }

  getLenguages(languages: Record<string, string>): string[] {
    return Object.keys(languages).map( (key:string): string => languages[key])
  }

  getNativeNames(nativeNames:Record<string, NamesOfCountry>): NamesOfCountry[] {
    return Object.keys(nativeNames).map( key => {
      return {
        common: nativeNames[key].common,
        official: nativeNames[key].official
      }
    })
  }


}
