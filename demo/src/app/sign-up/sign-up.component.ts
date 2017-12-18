import { Component } from '@angular/core';
import { Selector } from '../../../../src/modals/modal.options';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

    //static imports
import { SignUpDetail } from '../datamodel/login-detail';
import { FormBuilder , FormGroup , Validators} from '@angular/forms'

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['././sign-up.component.css']
})

export class SignUpComponent implements OnInit {

    signUpForm : FormGroup;

    constructor( private fb : FormBuilder ){}

    ngOnInit(){
        this.createSignUpForm();
    }

    createSignUpForm(){
        this.signUpForm = this.fb.group({
            userName : ['' ,[Validators.required,Validators.minLength(6)]],
            emailId : ['' , [Validators.required,Validators.minLength(6)]],
            password : ['' , [Validators.required , Validators.minLength(6)]]
        })
    }

    signUpUserDetails(){
        
    }

}