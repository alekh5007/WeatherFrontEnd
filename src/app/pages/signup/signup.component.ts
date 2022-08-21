import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    username:'',
    first_name:'',
    last_name:'',
    password:'',
    email:'',
    phone_no:''
  }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void { }

  formsubmit(){
   if(this.user.username=='' || this.user.username==null){
    // alert("username is mandatory");
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'username is mandatory!',  
     
    }) 
     return;
   }
   console.log("innn")
   //adduser :from userservice
   this.userService.adduser(this.user).subscribe(
     (data)=>{
       //onsuccess
       console.log(data)
       Swal.fire('Thank you...', 'You submitted successfully!', 'success')
       this.router.navigate(['login'])
       //alert("on success")
     },
     (error)=>{
       //on error
       console.log(error)
       console.log(error.error)
       let er=error.error;
       //alert("on error something went wrong")
       Swal.fire({  
        icon: 'error',  
        title: 'Oops...',  
        text: er,  
       
      }) 

     }
   )
  

  }

}
