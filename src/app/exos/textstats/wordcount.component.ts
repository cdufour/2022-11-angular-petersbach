import { Component, Input } from '@angular/core';

@Component({
  selector: 'exos-textstats-wc',
  template: `
  <p>
    <span *ngIf="!inputText">Nombre de mots: 0</span>
    <span *ngIf="inputText">Nombre de mots: {{ inputText.split(' ').length }}</span>
  </p>
  `
})
export class WordcountComponent {
  @Input() inputText: string = '';
}
