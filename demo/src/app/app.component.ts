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
    if (accessToken != null) {
      this.router.navigateByUrl('/my');
    } else {
    }

    window.addEventListener('unload', ($event) => {
      if(rememberMe == "" && rememberMe == null ){
        localStorage.clear();
      }
    })



  }
} 