import { CityServiceService } from './../../services/city-service/city-service.service';
import { City } from './../../models/city/city';
import { SummaryServiceService } from './../../services/summary-service/summary-service.service';
import { Device } from './../../models/device/device';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  devices:Device[];
  cities:City[];
  n:number;
  w:number;
  a:number;
  i:number;
  f:number;
  c:City;
  d:Date = new Date;
  di:String[] = [];
  dates:Date = new Date;
  numbers:number;
  
  
  constructor(private summaryService:SummaryServiceService, private cityService:CityServiceService) {
    this.n = 0;
    this.w = 0;
    this.a = 0;
  }

  ngOnInit(): void {
    //Obtener las ciudades
    this.cityService.getCities().subscribe(
      result => {
          this.cities = result;
          if(result.code != 200){
            console.log(result);
              
          }else{
            this.cities = result.data;
          }
          //Sumar las medidas
          for (let i in this.cities) {
            this.n = this.n + this.cities[i].NormalDevicesCount;
            this.w = this.w + this.cities[i].WarningDevicesCount;
            this.a = this.a + this.cities[i].AlertDevicesCount;
          }
  
      },
      error => {
          console.log(<any>error);
      }
    );
    console.log(this.d);
    //Obtener las medias
    this.summaryService.getSummary().subscribe(
      result => {
          this.devices = result;
          if(result.code != 200){
            console.log(result);
          }else{
            this.devices = result.data;
            
          }
          for (let i in this.devices) {
              this.i = (new Date().valueOf()) - (Date.parse((this.devices[i].LastActivity.toString())).valueOf());
              this.dates.setTime(this.i);
              var ingresar:number = 0;
              this.di[i] = "";
              //Obtener los años de diferencia
              if(Math.floor((this.i)/(1000 * 60 * 60 * 24 * 365)) >= 1 && ingresar < 2){
                this.numbers = Math.floor((this.i)/(1000 * 60 * 60 * 24 * 365));
                this.di[i] = this.di[i].concat(" ", this.numbers.toString(), "a");
                this.i = this.i - (this.numbers * 1000 * 60 * 60 * 24 * 365);
                ingresar = ingresar +1;
              }
              //Obtener los dias de diferencia
              if(Math.floor((this.i)/(1000 * 60 * 60 * 24)) >= 1 && ingresar < 2){
                this.numbers = Math.floor((this.i)/(1000 * 60 * 60 * 24));
                console.log(this.numbers);
                this.di[i] = this.di[i].concat(" ", this.numbers.toString(), "d");
                this.i = this.i - (this.numbers * 1000 * 60 * 60 * 24);
                ingresar = ingresar +1;
              }
              //Obtener las horas de diferencia
              if(Math.floor((this.i)/(1000 * 60 * 60)) >= 1 && ingresar < 2){
                this.numbers = Math.floor((this.i)/(1000 * 60 * 60));
                this.di[i] = this.di[i].concat(" ", this.numbers.toString(), "h");
                this.i = this.i - (this.numbers * 1000 * 60 * 60);
                ingresar = ingresar +1;
              }
              //Obtener los minutos de diferencia
              if(Math.floor((this.i)/(1000 * 60)) >= 1 && ingresar < 2){
                this.numbers = Math.floor((this.i)/(1000 * 60));
                this.di[i] = this.di[i].concat(" ", this.numbers.toString(), "m");
                this.i = this.i - (this.numbers * 1000 * 60);
                ingresar = ingresar +1;
              }
              //Obtener los segundos de diferencia
              if(Math.floor((this.i)/(1000)) >= 1 && ingresar < 2){
                this.numbers = Math.floor((this.i)/(1000));
                this.di[i] = this.di[i].concat(" ", this.numbers.toString(), "s");
                this.i = this.i - (this.numbers * 1000);
                ingresar = ingresar +1;
              }
          }
      },
      error => {
          console.log(<any>error);
      }
    );    
  }

  

}

