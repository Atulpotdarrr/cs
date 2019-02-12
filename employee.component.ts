import { Component} from '@angular/core';
import {CountriesService} from './../Services/countries.service';
interface Currencies {
  code: string; name: string; symbol: string
}


interface Country {
  name: string;
  subregion: string;
population:number;
latlng: [];
capital:string;
area:number;
currencies: Array<Currencies>;
flag: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
showDetails = false;
  employee=[];
countriesDetails:Country;
  constructor(private service:CountriesService) {

    this.service.getAll().subscribe(data=>{
      this.employee=Object.values(data);
    })
  }
  getDetails(countryName: string){
  this.service.getCountriesDetails(countryName).subscribe(res=>{
    const country:Array<Country> = Object.values(res) ;
    console.log(country.length);
    if(country.length === 1){
      this.countriesDetails = country[0];
      this.showDetails= true;
    }else{
      for(let i=0; i<= country.length ; i++){
        if(country[i]['name'] === countryName){
          this.countriesDetails = country[i];
          this.showDetails= true;
        }
    }  
    }
  console.log(res);
});
  }

}

