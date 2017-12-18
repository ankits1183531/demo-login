import { NotifierService } from 'angular-notifier';
import { Injectable } from '@angular/core';


@Injectable()

export class MyAwesomeComponent {

 private readonly notifier: NotifierService;

 constructor( notifierService: NotifierService ) {
   this.notifier = notifierService;
 }
}