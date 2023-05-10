import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  constructor(private auth:AuthService){

  }

  logout(){
    // if(this.email == '' || this.password == ''){
    //   alert('Please enter all values');
    //   return ;
    // }
    this.auth.logout();
    // console.log("waiting till login...");
    // this.email= '';
    // this.password = '';
  }
}
