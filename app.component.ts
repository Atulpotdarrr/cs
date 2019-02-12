import { Component,OnInit,OnChanges,DoCheck } from '@angular/core';
import {Router} from '@angular/router';
interface FevCountries{
  name:string;
  flag:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck, OnChanges {
  title = 'CRUD-APP';
  fevCountries: Array<FevCountries> = [];
  noOfFevCountries = 0;
  constructor(private router: Router){

  }
  ngDoCheck(){
    if(sessionStorage.getItem('fevCountries')){
      this.fevCountries = (JSON.parse(sessionStorage.getItem('fevCountries')));
      this.noOfFevCountries = this.fevCountries.length;
    }
  }

  ngOnChanges(){
 
  }


  ngOnInit(){

  }
  routetoFev(){
    this.router.navigate(['fev-countries'])
  }
}
