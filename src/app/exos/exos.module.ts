import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    Exo1Component,
    QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Exo1Component,
    QuoteComponent
  ]
})
export class ExosModule { }
