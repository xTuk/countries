import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Currency } from 'src/app/models/countries.model';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCountryComponent {

  @Input() flag: string = ''
  @Input() country: string = ''
  @Input() currencies: Currency[] = []
  @Input() capitals: string[] = []
  @Input() languages: string[] = []
  @Input() population!: number
  @Input() region: string = ''
  @Input() skeleton: boolean = false

  get bgFlag(): string {
    return 'url(' + this.flag + ')'
  }

  get joinlanguages(): string {
    return this.languages.join(', ')
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
