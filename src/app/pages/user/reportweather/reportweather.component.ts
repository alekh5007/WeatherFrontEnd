import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from 'src/app/services/weatherservice.service';
import{Report} from '../report'
@Component({
  selector: 'app-reportweather',
  templateUrl: './reportweather.component.html',
  styleUrls: ['./reportweather.component.css']
})
export class ReportweatherComponent implements OnInit {
  report=null;
  constructor(private userservicee:WeatherserviceService) { }

  ngOnInit(): void {
    let vall=this.userservicee.getweatherdata();
    
    
    console.log("reportcomp",vall)
    this.setwet(vall);
    
  }

  setwet(vall:any){
  
      this.report=vall;
      let sunsettime=new Date(this.report.sys.sunset*1000);
      this.report.sunset_time=sunsettime.toLocaleTimeString();
      let currentDate=new Date();
      this.report.isDay=(currentDate.getTime() < sunsettime.getTime());
      this.report.temp_celcius=(this.report.main.temp - 273.15).toFixed(0);
      this.report.temp_min=(this.report.main.temp_min - 273.15).toFixed(0);
      this.report.temp_max=(this.report.main.temp_max - 273.15).toFixed(0);
      this.report.temp_feels_like=(this.report.main.feels_like - 273.15).toFixed(0);
      this.report.env=this.report.weather[0].description;
  
     this.report.city=this.report.name;
    }
   
  

}
