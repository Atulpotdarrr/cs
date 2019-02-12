import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FevCountriesComponent } from './fev-countries/fev-countries.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import {CountriesService} from './Services/countries.service';
import {FevCountriesService} from './Services/fev-countries.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
  FevCountriesComponent,EmployeeComponent,EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,Ng2SearchPipeModule
  ],
  providers: [CountriesService,FevCountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
