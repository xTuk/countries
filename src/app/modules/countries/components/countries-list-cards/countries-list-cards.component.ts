import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../../../models/countries.model';

@Component({
  selector: 'app-countries-list-cards',
  templateUrl: './countries-list-cards.component.html',
  styleUrls: ['./countries-list-cards.component.scss']
})
export class CountriesListCardsComponent {

  @Output() onClick = new EventEmitter()

  @Input() countries: Country[] = []

  @Input() loading: boolean = false

  emitClick(country: Country) {
    this.onClick.emit(country)
  }

}
