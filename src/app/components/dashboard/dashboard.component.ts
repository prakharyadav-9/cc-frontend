import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {
    // this.isLoggedIn$ = this.authService.isLoggedIn();
    // console.log("from dashboard component:: ",this.isLoggedIn$);
  }

}
