// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

// CDKS
import { ScrollingModule } from '@angular/cdk/scrolling';

// COMPONENTS
import { CountriesComponent } from './countries.component';
import { CountriesListCardsComponent } from './components/countries-list-cards/countries-list-cards.component';
import { CountriesChartsComponent } from './components/countries-charts/countries-charts.component';
import { CountryModalComponent } from './components/country-modal/country-modal.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment.development';

@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListCardsComponent,
    CountriesChartsComponent,
    CountryModalComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    ScrollingModule,
    MatDialogModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places'],
    }),
  ],
})
export class CountriesModule {}
