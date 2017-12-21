import { Component , ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome To Login Page';

  constructor(
    private router: Router,
    private _vcr: ViewContainerRef, 
    private toastr: ToastsManager 
  ) {

    this.toastr.setRootViewContainerRef(_vcr);

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