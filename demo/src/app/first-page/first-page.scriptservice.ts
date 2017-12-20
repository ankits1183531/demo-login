import { NgModule, Injectable } from "@angular/core";
import { ScriptStore } from "./first-page.script";
import { Observable } from "rxjs/Rx"
import { Observer } from "rxjs/Observer";

@Injectable()
export class ScriptService {

  constructor() { }

  // loadScript(script) {
  //   var promise = new Promise((resolve, reject) => {
  //     if (document.getElementById(script.name) == null) {
  //       let node = document.createElement('script');
  //       node.src = script.src;
  //       node.type = 'text/javascript';
  //       node.async = false;
  //       node.charset = 'utf-8';
  //       node.id = script.name;
  //       document.getElementsByTagName('head')[0].appendChild(node);
  //       node.onload = function () {
  //         resolve("true");
  //       };
  //     } else {
  //       resolve("true");
  //     }
  //   });
  //   return promise;
  // }

  loadScript(script) {
    return Observable.create((observer) => {
      if (document.getElementById(script.name) == null) {
        let node = document.createElement('script');
        node.src = script.src;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        node.id = script.name;
        document.getElementsByTagName('head')[0].appendChild(node);
        node.onload = function () {
        observer.complete();
        };
      } else {
        observer.complete();
      }
    });
  }
}