import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Component } from '@angular/compiler/src/core';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
        
    }

    canActivate(){
        if((localStorage.getItem('rememberMe')) === null){
            this.router.navigateByUrl("/login");
            return false;
        }else{
            return true;
        }
    }
}   