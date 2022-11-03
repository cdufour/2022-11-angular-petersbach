import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [
    { name: "Ludovic", grade: 80 },
    { name: "Maxime", grade: 10},
    { name: "Valérian", grade: 99 }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
