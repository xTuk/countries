import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/countries.model';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent {

  @Input() flag: string = ''
  @Input() country: string = ''
  @Input() currencies: Currency[] = []
  @Input() capitals: string[] = []
  @Input() lenguages: string[] = []
  @Input() population!: number
  @Input() region: string = ''

  get bgFlag(): string {
    return 'url(' + this.flag + ')'
  }

  get joinLenguages(): string {
    return this.lenguages.join(', ')
  }

  get joinCapitals(): string {
    return this.capitals.join(', ')
  }

  get joinCurrencies(): string {
    let currencies: string[] = []
    this.currencies.forEach(currency => currencies.push(currency.symbol))
    return currencies.join(', ')
  }

}
