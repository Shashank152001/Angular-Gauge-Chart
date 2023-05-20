import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartserviceService {
  private baseUrl='http://localhost:3000/data'
  private baseUrl1='http://localhost:3000/datas'
  constructor(private http:HttpClient) { }

  getData(){
    const url=`${this.baseUrl}`
    return this.http.get(url);
  }
  getDatas(){
    const url=`${this.baseUrl1}`
    return this.http.get(url);
  }
}
