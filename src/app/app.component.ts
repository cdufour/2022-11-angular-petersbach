import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Formation Angular';
 childMessage: string = '';

 onMessage(event: string) {
  console.log("fiston me parle", event);
  this.childMessage = event;
 }
}
