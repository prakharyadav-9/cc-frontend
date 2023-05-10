import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private auth:AuthService){

  }
  // console.console.log("login is working");
  
  login(){
    if(this.email == '' || this.password == ''){
      alert('Please enter all values');
      return ;
    }
    this.auth.login(this.email,this.password);
    console.log("waiting till login...");
    this.email= '';
    this.password = '';
  }
}
