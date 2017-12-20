import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { window } from '../../../../src/utils/facade/browser';

@Injectable()

export class AuthDeactivate {

    constructor(
        private router: Router
    ) { }

    canDeactivate(): boolean {
        if (this.router.url.includes('my')) {
            var rememberMe = localStorage.getItem('rememberMe');
                this.router.navigateByUrl('/my');
                return false;  
        }
        else {
            return true;
        }
    }

}