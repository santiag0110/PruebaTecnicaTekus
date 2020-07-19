import { CityServiceService } from './../../services/city-service/city-service.service';
import { City } from './../../models/city/city';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})


export class CitiesComponent implements OnInit {

  cities:City[];
  
  ELEMENT_DATA:any[];
  constructor(private cityService:CityServiceService) {  
  }

  ngOnInit(): void {
    //Obtener los datos de las ciudades
    this.cityService.getCities().subscribe(
      result => {
          this.cities = result; 
          this.dataSource = result;
          this.ELEMENT_DATA = result;
          if(result.code != 200){
              console.log(result);
              
          }else{
              this.cities = result.data;
          }
  
      },
      error => {
          console.log(<any>error);
      }

      
  );



  }

  
  displayedColumns: string[] = ['Id','Name','Country','AlertDevicesCount','WarningDevicesCount','NormalDevicesCount'];
  dataSource = this.ELEMENT_DATA;


}
export class TableBasicExample {
  
}