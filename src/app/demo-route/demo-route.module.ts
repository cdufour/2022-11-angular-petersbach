import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: '', component: Page1Component },
        { path: 'page1', component: Page1Component },
        { path: 'page2/:arg', component: Page2Component},
      ]
    )
  ],
  exports: [MenuComponent]
})
export class DemoRouteModule { }
