import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

import { FirstPageComponent } from './first-page.component';
import { expand } from "rxjs/operators/expand";

@NgModule({
  imports : [
    RouterModule.forChild([
      {
        path : '' , component: FirstPageComponent
      }
    ])
  ],
  exports : [],
  declarations : [FirstPageComponent],
  providers: []
})

export class FirstPageModuleComponent {
  constructor() {}
}

