import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  title: string = "Child Component";
  age: number = 24;
  counter: number = 0;

  // methods
  getAge(): number {
    return this.age;
  }

  giveInfo(): string {
    if (this.age >= 18) {
      return "je suis majeur";
    } else {
      return "je suis mineur";
    }
  }

  onClick(): void {
    //console.log("ok");
    this.counter++;
  }
}
