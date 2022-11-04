import { Component, Input } from '@angular/core';

@Component({
  selector: 'exos-textstats-lc',
  template: `
  <p>Nombre de lettres: {{ inputText.length }}</p>
  `
})
export class LettercountComponent {
  @Input() inputText: string = '';
}
