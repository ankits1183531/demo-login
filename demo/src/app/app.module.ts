import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';


// static imports
import { LoginFormComponent } from './login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';
import { AuthProviderService } from './services/Auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './services/API-Interceptor.service';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomNotifierService } from './services/notifier.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    NotifierModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthProviderService, CustomNotifierService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
