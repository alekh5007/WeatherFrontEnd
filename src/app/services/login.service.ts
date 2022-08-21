import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

//generate token
  checklogin(user:any){
  // return this.http.post('http://localhost:8080/generate-token',user);
  return this.http.post('http://54.148.163.170:8080/generate-token',user);
  }


//get current user
getCurrentUser(){
  //return this.http.get('http://localhost:8080/current-user');
  return this.http.get('http://54.148.163.170:8080/current-user');
}





//set token in localstorage
public loginuser(gettoken:any){

  localStorage.setItem("token",gettoken);
  return true;
}

//is user logged in or not
public isLogIn(){
  let token= localStorage.getItem("token");
  if(token==null || token==undefined|| token==''){
    console.warn("inside is login method false")
    return false;
  }else{
    console.warn("inside is login method true")
    return true;
  }
}

//logout remove token from localstorage
public logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("flag");
  localStorage.removeItem("covid");
  localStorage.removeItem("weather");
  return true;
}

//get token
public gettoken(){
  return localStorage.getItem("token");
 
}

//set user Details
public setuser(user:any){
  localStorage.setItem("user",JSON.stringify(user));
}

//get user
public getuser(){
  let user=localStorage.getItem("user");
  if(user!=null){
    return JSON.parse(user);
  }else{
    this.logout();
    return '';
  }

}


//get user role
public getRole(){
  let user= this.getuser();
  return user.authorities[0].authority;
}

//make public flaf
public flagstatus(){
  localStorage.setItem("flag",JSON.stringify("true"));
}

// public checkflagstatus(){
//   let user=localStorage.getItem("flag");
//   console.warn("flag+++++++++++==>>>>"+user)
//   return user;
// }

}
