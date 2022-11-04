import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  test: string = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.test += 'c';
  }

}
