import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countries.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  loading: boolean = true
  countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getCountries()
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(
      countries => {
        this.countries = countries
        this.loading = false
      }
    )
  }

}
