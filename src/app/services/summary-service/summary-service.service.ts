import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryServiceService {

  url = 'https://patatas-air.s3.amazonaws.com/devices'; 

  constructor(public http:HttpClient) { }

  getSummary():Observable<any> {
    return this.http.get(this.url);
  }
}
