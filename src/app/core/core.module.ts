
import { NgModule } from '@angular/core';
import { Error404Component } from 'src/app/core/component/error-404/error-404.component';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from 'src/app/core/component/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {}
