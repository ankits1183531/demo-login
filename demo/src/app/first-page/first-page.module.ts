import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

import { FirstPageComponent } from './first-page.component';
import { expand } from "rxjs/operators/expand";
import { ChartDataAPIService } from "./chartAPI.service";

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
  providers: [ChartDataAPIService]
})

export class FirstPageModuleComponent {
  constructor() {}
}

