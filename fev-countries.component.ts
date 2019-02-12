import { Component, OnInit } from '@angular/core';
interface FevCountries{
  name:string;
  flag:string;
}
@Component({
  selector: 'app-fev-countries',
  templateUrl: './fev-countries.component.html',
  styleUrls: ['./fev-countries.component.css']
})
export class FevCountriesComponent implements OnInit {
  fevCountries: Array<FevCountries> = [];
  constructor() { }

  ngOnInit() {
   this.fevCountries= JSON.parse(sessionStorage.getItem('fevCountries'));
  }

}
