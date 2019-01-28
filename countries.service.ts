import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAll(){
   return  this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;subregion;population;latlng;flag');
  }

  getCountriesDetails(countryName: string){
    return  this.http.get('https://restcountries.eu/rest/v2/name/' + countryName);
  }
}
