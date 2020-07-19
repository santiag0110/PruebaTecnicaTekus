import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  url = 'https://patatas-air.s3.amazonaws.com/cities'; 

  constructor(public http:HttpClient) { }

  getCities():Observable<any> {
    return this.http.get(this.url);
  }

}
