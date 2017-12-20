import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavBar } from '../nav-bar/nav-bar.component';
import { debug } from 'util';

@Component({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
   
    constructor(){}

    ngOnInit(){}

}