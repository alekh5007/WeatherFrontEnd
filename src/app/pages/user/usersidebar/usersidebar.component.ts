import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.login.logout();
  
    window.location.reload();
  }



}
