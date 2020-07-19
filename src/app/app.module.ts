import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CityServiceService} from './services/city-service/city-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CitiesComponent } from './components/cities/cities.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CitiesComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'cities', component:CitiesComponent},
      {path: 'summary', component: SummaryComponent},
      {path: '', redirectTo: '/cities', pathMatch: 'full'}

    ])
  ],
  providers: [
    CityServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
