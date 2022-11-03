import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-choice',
  templateUrl: './city-choice.component.html',
  styleUrls: ['./city-choice.component.css']
})
export class CityChoiceComponent implements OnInit {

  cities: City[] = [
    { name: "Turin", country: "Italie", image: "turin.jpg" },
    { name: "Paris", country: "France", image: "paris.jpg" },
    { name: "Rio", country: "Brésil", image: "rio.jpg" },
  ]

  selectedCity: City | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    let selectedCity = event.target.value;
    console.log(selectedCity);
    this.selectedCity = 
      this.cities.filter(city => city.name == selectedCity)[0];
    console.log(this.selectedCity);
  }
}
