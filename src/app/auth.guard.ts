import { Injectable,OnInit  } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> ,OnInit{
  isLoggedIn$: Observable<boolean>;
  isLoggedIn = false;

  ngOnInit() {
    // this.authService.isLoggedIn().subscribe((loggedIn) => {
    //   console.log("from onit" ,loggedIn)
    //   this.isLoggedIn = loggedIn;
    // });
  }

  constructor(private authService: AuthService,private router: Router) {
    // this.authService.isLoggedIn().subscribe((loggedIn) => {
    //   console.log("from onit" ,loggedIn)
    //   this.isLoggedIn = loggedIn;
    // });
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     console.log("guard is come into play::");
  //     console.log("is logged in :: ", this.isLoggedIn)
  //   return this.isLoggedIn;
  // }
  canActivate(): boolean {
    const flag = localStorage.getItem('token');
    console.log("token :: ",flag)
    if (flag === 'true') {
      return true;
    } else {
      alert("you must login first")
      this.router.navigate(['/login-get']);
      return false;
    }
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
