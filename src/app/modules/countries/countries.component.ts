import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countries.model';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryModalComponent } from './components/country-modal/country-modal.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  loading: boolean = true;
  countries: Country[] = [];
  countriesFilter: Country[] = [];
  orderDirection: boolean = true;
  order: string = '';
  orderSelect: string = '';
  list: boolean = true;
  optionsCharts: Object = {};

  constructor(private countriesService: CountriesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getCountries();
  }

  filter({ target: { value } }: any) {
    value = value.toLowerCase().trim();
    const filteredCountries = this.countries.filter((country) =>
      this.countryContain(country, value)
    );

    this.countriesFilter = this.sortCountries(
      value.length >= 3 ? filteredCountries : this.countries
    );
  }

  countryContain(country: Country, value: string): boolean {
    const valuesToCheck = [
      country.names.common,
      ...(country.capital || []),
      country.region,
    ];

    return valuesToCheck.some((v) => {
      return v?.toLowerCase().trim().includes(value);
    });
  }

  sortList(orderDirection: boolean, order?: string) {
    if (order) this.order = order;
    this.orderDirection = orderDirection;

    this.countriesFilter = this.sortCountries(this.countriesFilter);
  }

  sortCountries(countries: Country[]): Country[] {
    const sortedCountries = [...countries].sort((a, b) => {
      const aValue = this.getSortValue(a);
      const bValue = this.getSortValue(b);

      return this.orderDirection
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    return sortedCountries;
  }

  showCountry(country: Country) {
    this.dialog.open(CountryModalComponent, {
      minWidth: '100vh',
      data: {...country},
      autoFocus: false,
      panelClass: 'modal-pane'

    });
  }

  getSortValue(country: any) {
    if (this.order === 'capital') {
      return country?.capital.join(',') || '';
    } else if (this.order === 'region') {
      return country.region || '';
    }

    return country.names.common || '';
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = this.countriesFilter = countries;
      this.loading = false;
    },
    error => {
      this.countries = this.countriesFilter = []
      this.loading = false
    });
  }

  getChartsData() {
    this.countriesService.setCountriesFiltered(this.countriesFilter)
    this.list = false;
  }
}
