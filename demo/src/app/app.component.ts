import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome To Login Page';

  constructor(
    private router: Router
  ) {
    var rememberMe = localStorage.getItem('rememberMe');
    var accessToken = localStorage.getItem('AccessToken');
    if (rememberMe != null && rememberMe != '' && accessToken != null) {
        this.router.navigateByUrl('/dashboard');
    } else {
      localStorage.clear();
    }
  }

}