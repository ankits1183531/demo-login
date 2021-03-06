import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// static import

import { LoginDetail } from '../datamodel/login-detail';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debug } from 'util';
import { ActivatedRoute , Router } from '@angular/router';
import { AuthProviderService } from '../services/Auth.service';
import { Observable } from 'rxjs/Observable';
import { ViewChild, ElementRef} from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Button } from 'selenium-webdriver';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

    // variable declaration

    loginForm: FormGroup;
    errorMessage : string = "";

    constructor(
        private fb: FormBuilder,
        private router : Router,
        private route : ActivatedRoute,
        private authService : AuthProviderService
    ) {}

    ngOnInit() {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            username : ['', [Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe : ''
        })
    }

    submitLoginDetails() : void{
        let val :LoginDetail = this.loginForm.value;
        const newVal = Object.assign({}, val);
        delete val['rememberMe'];
        // this.Button.btnAngChk.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Please wait';
        document.getElementById('btnLogin').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Please wait';
        this.authService.loginAuthentication(val).subscribe((res : any) => {
            this.router.navigate(['/dashboard']);
            localStorage.setItem("rememberMe", newVal["rememberMe"])
            localStorage.setItem('AccessToken' , res.data.access_token)
        }, (err) => {
            document.getElementById('btnLogin').innerHTML = 'Submit';
        });     
    }
}
