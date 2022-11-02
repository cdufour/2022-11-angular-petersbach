import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  selectedOption: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.selectedOption = event.target.value;
  }

}
