import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email : string;
  password : string;

  constructor(private router : Router) { }


  login (){
    
    if(this.email == "admin@admin.com" && this.password == "admin"){
     
      this.router.navigate(['welcome']);
    } else {
      alert("Username and password are mismatch");
    }
  }

}
