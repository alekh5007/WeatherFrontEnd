import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherserviceService } from 'src/app/services/weatherservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public loginn={
    city:'',
    
  }


  categories=[
    {
      cid:1,
      title:'Mumbai'
    },
    {
      cid:2,
      title:'Delhi'
    },
    {
      cid:3,
      title:'Bangalore'
    },
    {
      cid:4,
      title:'Hyderabad'
    },
    {
      cid:5,
      title:'Ahmedabad'
    },
    {
      cid:6,
      title:'Kolkata'
    },
    {
      cid:7,
      title:'Ranchi'
    },
    {
      cid:8,
      title:'Lucknow'
    },
    {
      cid:9,
      title:'patna'
    },
    {
      cid:10,
      title:'Bhopal'
    },
    {
      cid:11,
      title:'Amritsar'
    },
    {
      cid:12,
      title:'Jodhpur'
    },
    {
      cid:13,
      title:'london'
    },
    
    {
      cid:14,
      title:'chennai'
    },
    
    {
      cid:15,
      title:'Durgapur'
    },
    
    {
      cid:16,
      title:'Bhilai'
    },
    
    {
      cid:17,
      title:'Mizoram'
    },
    {
      cid:18,
      title:'Srinagar'
    },
    
    {
      cid:19,
      title:'tokyo'
    },
   

  ]
  constructor(private userservice:WeatherserviceService,private routerr: Router) { }

  ngOnInit(): void {
  }

 

  logindataa()
  {
    
   

this.userservice.addcity(this.loginn).subscribe(
  (data)=>{
     //sucess
    let newdata=data;
     console.log(data)
    
    this.userservice.addlocal(newdata);
   
    Swal.fire(
      'Successfully done !!',
      'Your data is ready.',
      'success'
    )
   
    this.routerr.navigate(['user-dash/report']);
   },
   (error)=>{
    
     Swal.fire('Oops...', 'Something went wrong!', 'error')
   }
 )

  }




  btnClickk= function () {
   
   };

}
