import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './charts/pie/pie.component';
import { BarComponent } from './charts/bar/bar.component';
import { CardCountryComponent } from './ui/card-country/card-country.component';
import { NgChartsModule } from 'ng2-charts';
import { UiButtonComponent } from './ui/ui-button/ui-button.component';



@NgModule({
  declarations: [
    PieComponent,
    BarComponent,
    CardCountryComponent,
    UiButtonComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    PieComponent,
    BarComponent,
    CardCountryComponent,
    UiButtonComponent
  ]
})
export class SharedModule { }
