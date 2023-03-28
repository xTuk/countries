import { Component, Inject, OnInit } from '@angular/core';
import { Country } from '../../../../models/countries.model';
import { DIALOG_DATA} from '@angular/cdk/dialog';

// eslint-disable-next-line no-var
declare var google: any;

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss'],
})

export class CountryModalComponent implements OnInit {

  showMap: boolean = false

  constructor(@Inject(DIALOG_DATA) public country: Country) {}

  ngOnInit(): void {
  }

  initMap(): void {
    this.showMap = !this.showMap
  }

  get bgFlag(): string {
    return 'url(' + this.country.flag + ')'
  }

  get joinlanguages(): string {
    return this.country.languages.join(', ')
  }

  get joinCapitals(): string {
    return this.country.capital.join(', ')
  }

  get joinCurrencies(): string {
    let currencies: string[] = []
    this.country.currencies.forEach(currency => currencies.push(currency.name))
    return currencies.join(', ')
  }

  get joinLatlng(): string {
    return this.country.latlng.length ? `(${this.country.latlng.join(',')})` : ''
  }

  get joinCapitalLatlng(): string {
    return this.country.capitalLatlng.length ? `(${this.country.capitalLatlng.join(',')})` : ''
  }

  get joinTimezones(): string {
    return this.country.timezones.join(', ')
  }

  get getLimitrofes(): string {
    return this.country.borders.join(', ')
  }

}
