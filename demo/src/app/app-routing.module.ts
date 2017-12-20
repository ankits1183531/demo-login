import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './services/auth-gaurd.service';
// import { CanDeactivate } from '@angular/router';
// import { AuthDeactivate } from './services/auth-deactivate.service';
// import { FirstPageComponent } from './first-page/first-page.component';
// import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
    {
        path: '', component: MainPageComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'login', component: LoginFormComponent }
        ]
    },
    // {
    //     path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canDeactivate: [AuthDeactivate]
    //     , children :[
    //         {path : '' , redirectTo:'first' ,pathMatch:'full' },
    //         {path :'first' , component : FirstPageComponent},
    //         {path : 'second' , component : SecondPageComponent},
    //         {path : '**' , redirectTo:'first' , pathMatch:'full' }
    //     ]
    // },
     {
        path: 'my'
         , loadChildren:'app/dashboard/dashboard.module#DashBoardRoutingModula'
    },
    { path: "**", redirectTo: "login", pathMatch: 'full' }
]


@NgModule({
    imports: [
        (RouterModule.forRoot(routes)),
        // RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    declarations: []
})

export class AppRoutingModule {

}