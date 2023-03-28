import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country, CountryResponse, Currency, NamesOfCountry, ResponseNamesOfCountry } from '../models/countries.model';
import { ChartInfoPie, ChartsData } from '../models/charts.model';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countriesFiltered!: Country[]

  constructor(private readonly http: HttpClient) { }

  getCountries() {
    return new Observable <Country[]>( observer => {
      this.http.get<CountryResponse[]>(environment.api + 'all').subscribe(
        response => observer.next(response.map( (country) => this.parseCountries(country))),
        error => observer.error(error))
    })
  }


  private parseCountries(country: CountryResponse): Country {
    return {
      flag: country.flags?.svg,
      flagName: country?.flag,
      coatOfArms: country?.coatOfArms?.png || '',
      latlng: country.latlng || [],
      names: {
        common: country.name.common,
        nativeName: country.name.nativeName ? this.getNativeNames(country.name.nativeName) : [],
        official: country.name.official
      },
      region: country?.region,
      subregion: country?.subregion,
      capital: country?.capital || [],
      capitalLatlng: country.capitalInfo?.latlng || [],
      population: country?.population,
      currencies: country.currencies ? this.getCurrencies(country.currencies) : [],
      timezones: country?.timezones,
      unMember: country?.unMember,
      independent: country?.independent,
      landlocked: country?.landlocked,
      languages: country.languages ? this.getlanguages(country.languages) : [],
      gini: country.gini ? this.getGini(country.gini) : '',
      maps: country?.maps,
      area: country?.area,
      borders: country?.borders || []
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

  getlanguages(languages: Record<string, string>): string[] {
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

  getGini(gini: Record<string,number>): string {
    return Object.values(gini).join()
  }

  setCountriesFiltered(countries: Country[]) {
    this.countriesFiltered = countries
  }


  getChartsData(): ChartsData {
    return {
      populations: this.getPopulationsChart(this.countriesFiltered),
      regions: this.getRegionsChart(this.countriesFiltered),
      languages: this.getlanguagesChart(this.countriesFiltered),
    };
  }

  private getPopulationsChart(countries: Country[]): ChartInfoPie {
    const populations = countries
      .sort((a, b) => b.population - a.population)
      .slice(0, 5);
    const populationslabels = populations.map((top) => top.names.common);
    const populationsData = populations.map((top) => top.population);

    return {
      labels: populationslabels,
      data: [
        {
          data: populationsData,
          backgroundColor: this.getBackgroundColors(populationsData.length)
        },
      ],
    };
  }

  private getRegionsChart(countries: Country[]): ChartConfiguration<'bar'>['data'] {
    const paisesByRegion: Record<string, number> = countries.reduce(
      (acc: any, curr) => {
        acc[curr.region] = (acc[curr.region] || 0) + 1;
        return acc;
      },
      {}
    );

    const regionsLabel = Object.keys(paisesByRegion);
    const regionsData = Object.values(paisesByRegion);

    return {
      labels: regionsLabel,
      datasets: [{
        data: regionsData,
        backgroundColor: this.getBackgroundColors(regionsData.length)
      }],
    };
  }

  private getlanguagesChart(countries: Country[]): ChartInfoPie {
    const countriesByLanguage: Record<string, number> = {};
    countries.forEach((country) => {
      country.languages.forEach((language: string) => {
        if (countriesByLanguage[language]) {
          countriesByLanguage[language]++;
        } else {
          countriesByLanguage[language] = 1;
        }
      });
    });

    const languagesLabels = Object.keys(countriesByLanguage);
    const languagesData = Object.values(countriesByLanguage);

    return {
      labels: languagesLabels,
      data: [
        {
          data: languagesData,
          backgroundColor: this.getBackgroundColors(languagesData.length)
        },
      ],
    };
  }

  private getBackgroundColors(length: number): string[] {
    const randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    return Array.from({length}, randomColor);
  }

}
