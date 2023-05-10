import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email:string='';
  password:string='';

  constructor(private auth:AuthService){

  }
  register(){
    console.log("registering a user");
    if(this.email == '' || this.password == ''){
      alert('Please enter all values');
      return ;
    }
    this.auth.register(this.email,this.password);
    this.email= '';
    this.password = '';
  }
}
