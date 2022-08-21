import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isLoggedIn=false;
 user=null;
  constructor(public login:LoginService) { }

  ngOnInit(): void {
    //user:"sss"
    this.isLoggedIn=this.login.isLogIn();
    this.user=this.login.getuser().username;
    //alert("subject now")
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      console.warn("subject her")
      this.isLoggedIn=this.login.isLogIn();
      this.user=this.login.getuser().username;
    });
  }
  logout(){
    this.login.logout();
  
    window.location.reload();
  }

}
