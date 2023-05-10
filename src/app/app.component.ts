import { Component,ViewEncapsulation } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'front-end';
}
