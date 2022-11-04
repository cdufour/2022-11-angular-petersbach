import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asc-com',
  templateUrl: './asc-com.component.html'
})
export class AscComComponent implements OnInit {

  @Output() message: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.message.emit("fric");
  }
}
