import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

 

  constructor(private http:HttpClient) { }
  //create method
  public addcity(user:any){
   console.log("inside weather service===>>>", user)
    //let param1 = user;

    // return this.http.post('http://localhost:8080/weather',user);
    return this.http.post('http://54.148.163.170:8080/weather',user);
  }
 
  public addlocal(weather:any){
    console.log("value weather service====>>>>>",weather)
    localStorage.setItem('weather',JSON.stringify(weather));
    return true;
  }
 
  public getweatherdata(){
    //console.log("calling getweather data")
    let val=localStorage.getItem("weather");
    if(val!=null)
    return JSON.parse(val);
  }
}
