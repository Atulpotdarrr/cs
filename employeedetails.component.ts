import { Component, OnInit,Input } from '@angular/core';
interface Currencies {
  code: string; name: string; symbol: string
}

interface FevCountries{
  name:string;
  flag:string;
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
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  @Input() country: Country;
 employeedetails:any;
 private Url:"" 
 fevCountries: Array<FevCountries> = [];

 fevSet = false;
  constructor() { }

  ngOnInit() {
  }

  addFev(name: string, flag:string){
    if(sessionStorage.getItem('fevCountries')){
      this.fevCountries= JSON.parse(sessionStorage.getItem('fevCountries'));
      for(let i = 0; i < this.fevCountries.length; i++){
        if(this.fevCountries[i].name === name){
          this.fevSet = true;
        } else{
           this.fevCountries.push({name: name, flag: flag});
    sessionStorage.setItem('fevCountries', JSON.stringify(this.fevCountries));
    this.fevSet = true;
        }
      }
    } else{
      this.fevCountries.push({name: name, flag: flag});
      sessionStorage.setItem('fevCountries', JSON.stringify(this.fevCountries));
      this.fevSet = true;
    }
   
  }

  removeFev(countryName: string){
    for(let i=0; i< this.fevCountries.length; i++){
      if(this.fevCountries[i].name === countryName){
        this.fevCountries.splice(i, 1);
        sessionStorage.setItem('fevCountries', JSON.stringify(this.fevCountries));
        this.fevSet = false;
        i = this.fevCountries.length;
      }
    }
  }
}
