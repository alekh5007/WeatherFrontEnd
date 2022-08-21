import { Component, OnInit } from '@angular/core';

import { CovidService } from 'src/app/services/covid.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
 covid=null;
  constructor(private userservice:CovidService) { }

  ngOnInit(): void {
    this.newcowin();
    this.setcovid();
  }

  public newcowin(){
    this.userservice.covidmain().subscribe(
      (data:any)=>{
          this.userservice.addcovidlocal(data);
          this.covid= this.userservice.getcoviddata().Countries;
        Swal.fire(
          'Successfully done !!',
          'Your data is ready.',
          'success'
        )
      },   
      (error:any)=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error')
      },
    )
  }
 
  //set covid data
  setcovid(){
  // let covid= this.userservice.getcoviddata().Countries;
  let covid = [
    { id: 1, firstName: 'AM', lastName:'CM', age:3 },
      { id: 1, firstName: 'AM', lastName: 'DIM', age:4 },
      { id: 1, firstName: 'AM', lastName: 'FM', age:5 },
      { id: 1, firstName: 'AM', lastName: 'HM', age:6 } ];
   console.log("+++++")
   console.log(covid)
   console.log("+++++")
  }
  }

