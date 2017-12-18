import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector :'nl-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(){}

    ngOnInit(){}

    navBar_open() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("divMainPage").style.marginLeft = "250px";
    }
}   