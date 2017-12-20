import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common/src/common_module";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { NavBar } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AuthGuard } from '../services/auth-gaurd.service';
import { CanDeactivate } from '@angular/router';
import { AuthDeactivate } from '../services/auth-deactivate.service';
import { ScriptService } from '../first-page/first-page.scriptservice';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      {
        path: '', component: DashboardComponent, canActivate: [AuthGuard], canDeactivate: [AuthDeactivate] ,
        children: [
          { path: 'first', loadChildren: 'app/first-page/first-page.module#FirstPageModuleComponent' },
          { path: 'second', loadChildren:'app/second-page/secong-page.module#SecondPageModuleComponent'},
        ]
      }
    ])
  ],
  declarations: [
    DashboardComponent, NavBar, FooterComponent, HeaderComponent
  ],
  providers: [AuthGuard, AuthDeactivate, ScriptService]
})
export class DashBoardRoutingModula {
  constructor() {

  }
}