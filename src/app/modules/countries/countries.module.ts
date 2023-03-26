import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesComponent } from './countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    ScrollingModule
  ],
})
export class CountriesModule { }
