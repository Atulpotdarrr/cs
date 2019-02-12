import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FevCountriesComponent } from './fev-countries/fev-countries.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [

  {path:'', component:EmployeeComponent},
  {path:'fev-countries', component:FevCountriesComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
