import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SecondPageComponent } from "./second-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: SecondPageComponent
      }
    ])
  ],
  exports: [],
  declarations: [SecondPageComponent],
})

export class SecondPageModuleComponent {
  constructor() {}
}