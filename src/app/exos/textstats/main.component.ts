import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exos-textstats-main',
  template: `
  <textarea (keyup)="onKeyup($event)"></textarea>
  <exos-textstats-lc [inputText]="inputText"></exos-textstats-lc>
  <exos-textstats-wc [inputText]="inputText"></exos-textstats-wc>
  `
})
export class MainComponent {
  inputText: string = "";

  onKeyup(event: any) {
    this.inputText = event.target.value;
  }

}
