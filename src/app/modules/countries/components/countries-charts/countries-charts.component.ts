import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartsData } from 'src/app/models/charts.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-charts',
  templateUrl: './countries-charts.component.html',
  styleUrls: ['./countries-charts.component.scss'],
})
export class CountriesChartsComponent implements OnInit{
  chartsData!: ChartsData

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.chartsData = this.countriesService.getChartsData()
  }

}
