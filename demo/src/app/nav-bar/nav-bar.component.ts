import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})


export class NavBar implements OnInit {

    constructor() { }

    ngOnInit() { }

    navBar_close() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("divMainPage").style.marginLeft = "0";
      }

}