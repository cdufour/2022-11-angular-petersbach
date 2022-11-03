import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() name: string = "";
  @Input() grade: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
