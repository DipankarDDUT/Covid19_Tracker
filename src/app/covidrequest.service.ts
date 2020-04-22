import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidrequestService {
  timeSeries = 'https://api.covid19india.org/data.json';
  constructor( private http:HttpClient) { }


  getDashboard(){

    return this.http.get(this.timeSeries);
  }





}
