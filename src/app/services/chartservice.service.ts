import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartserviceService {
  private baseUrl='http://localhost:3000/data'
  private baseUrl1='http://localhost:3000/datas'
  private baseUrl2='http://localhost:3000/mockdata'
  private baseUrl3='http://localhost:3000/dummy'
  constructor(private http:HttpClient) { }

  getData(){
    const url=`${this.baseUrl}`
    return this.http.get(url);
  }
  getDatas(){
    const url=`${this.baseUrl1}`
    return this.http.get(url);
  }
  getApiData(){
    const url=`${this.baseUrl2}`
    return this.http.get(url);
  }
  getDummyData(){
    const url=`${this.baseUrl3}`
    return this.http.get(url);
  }
}
