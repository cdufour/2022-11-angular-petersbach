import { Component, Input, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-city-show',
  templateUrl: './city-show.component.html',
  styleUrls: ['./city-show.component.css']
})
export class CityShowComponent implements OnInit {

  @Input()
  city: City | null = null; 

  constructor() { }

  ngOnInit(): void {
  }

}
