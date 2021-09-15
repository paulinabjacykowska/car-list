import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CarsComponent } from './components/cars/cars.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CarsComponent,
    AddCarComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
