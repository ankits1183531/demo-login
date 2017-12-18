import { Injectable } from '@angular/core';
import { LoginDetail } from '../datamodel/login-detail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

const baseURL: string =  'https://nxtlife-academy.ind-cloud.everdata.com/api';

@Injectable()
export class AuthProviderService {

    constructor(private http : HttpClient) {

    }

    isLoggedIn() {
        let loggedIn = false;
        const token = localStorage.getItem("AccessToken");
        if (token) {
            loggedIn = true;
        } else {
            loggedIn = false;
        }
        return loggedIn;
    }

    loginAuthentication(loginData : LoginDetail) {
     return  this.http.post(baseURL + '/login', loginData).pipe(
            tap(res => { 
                
             })
            );
    }

}