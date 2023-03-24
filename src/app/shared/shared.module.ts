import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './charts/pie/pie.component';
import { BarComponent } from './charts/bar/bar.component';



@NgModule({
  declarations: [
    PieComponent,
    BarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
