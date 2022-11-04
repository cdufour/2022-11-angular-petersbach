import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityShowComponent } from './city-show/city-show.component';
import { SwitchComponent } from './switch/switch.component';
import { TextstatsModule } from './textstats/textstats.module';
import { MainComponent } from './textstats/main.component';



@NgModule({
  declarations: [
    Exo1Component,
    QuoteComponent,
    CityChoiceComponent,
    CityShowComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    TextstatsModule
  ],
  exports: [
    Exo1Component,
    QuoteComponent,
    CityChoiceComponent,
    CityShowComponent,
    SwitchComponent,
    MainComponent
  ]
})
export class ExosModule { }
