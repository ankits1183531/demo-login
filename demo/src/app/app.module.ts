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
import {DashboardComponent} from './dashboard/dashboard.component';
import { NavBar } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';
import { AuthProviderService } from './services/Auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './services/API-Interceptor.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpComponent,
    MainPageComponent,
    DashboardComponent,
    FooterComponent,
    NavBar,
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthProviderService ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
