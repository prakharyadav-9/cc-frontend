import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method

  login(email: string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(  () =>{
      localStorage.setItem('token','true');
      alert("login is success");
      this.router.navigateByUrl('/dashboard');
    },err=>{
      alert(err.message)
      alert('could not sigh in, try agin ');
      this.router.navigate(['/login-get']);
    });
  }

  // register method

  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("registerd successfully");
      this.router.navigate(['/login']);

    },err =>{
      alert("registerd successfully");
      this.router.navigate(['/register']);

    })
  }

  // signout
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      alert("Logout is success")
      this.router.navigate(['/login-get']);
    },err=>{
      alert(err.message);
    })
  }

  isLoggedIn(): Observable<boolean> {
    let isLogged  = this.fireauth.authState.pipe(
      map(user => !!user)
    );
    // console.log(" checkin on is loggegd in ::",isLogged)
    return isLogged;
  }

}
