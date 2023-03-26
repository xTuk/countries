import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './charts/pie/pie.component';
import { BarComponent } from './charts/bar/bar.component';
import { CardCountryComponent } from './ui/card-country/card-country.component';



@NgModule({
  declarations: [
    PieComponent,
    BarComponent,
    CardCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PieComponent,
    BarComponent,
    CardCountryComponent
  ]
})
export class SharedModule { }
