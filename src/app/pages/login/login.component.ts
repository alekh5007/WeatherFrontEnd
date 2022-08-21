import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user={
    username:'',
    password:''
  }
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }



  //submit method()
  formsubmit(){
      console.warn("inside login form ()")

      if(this.user.username==null || this.user.username==''){

        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'username is mandatory!',  
         
        }) 
        return;
      }
      else if(this.user.password==null || this.user.password==''){
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'username is mandatory!',  
         
        }) 
        return;
      }
    
else{
     

  this.loginservice.checklogin(this.user).subscribe(
    (data:any)=>{
      console.warn(data)
      console.log("sucessfully logged in")
       this.loginservice.loginuser(data.token);

      this.loginservice.getCurrentUser().subscribe(
        (user)=>{
          this.loginservice.setuser(user);

        
            this.loginservice.flagstatus();
        
           console.log(user)
          // alert("congo ji")

             //Redirect to role based
           

           let role=this.loginservice.getRole();
           if(role=='ADMIN'){
            this.router.navigate(['admin'])
            this.loginservice.loginStatusSubject.next(true);
           // window.location.href="/admin"
           }
           else if(role=='NORMAL'){
            this.router.navigate(['user-dash'])
            this.loginservice.loginStatusSubject.next(true);
          //  window.location.href="/user-dash"
           }
           else{
             this.loginservice.logout();
             window.location.href="/login"
           }
         
        
        },
        (error)=>{
          console.warn("INVALID DETAILS !! TRY AGAIN")
        }
        
      )

    //  alert("sucessfully logged in")
    },
    (error)=>{
      if(error.status == 404){
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Invalid Credentials ! Try again',  
         
        }) 
      }
      else{
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Something went wrong!',  
         
        }) 
      }
     
    }

   
  )
}
       
}

}
