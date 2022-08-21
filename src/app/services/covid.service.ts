import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

 public covidmain(){
  //return this.http.get('http://localhost:8080/covid');
  return this.http.get('http://54.148.163.170:8080/covid');
  }

  public addcovidlocal(covid:any){
    console.log("value covid service====>>>>>",covid)
    localStorage.setItem('covid',JSON.stringify(covid));
    return true;
  }

  public getcoviddata(){
    //console.log("calling getweather data")
    let val=localStorage.getItem("covid");
    if(val!=null)
    return JSON.parse(val);
  }

}
