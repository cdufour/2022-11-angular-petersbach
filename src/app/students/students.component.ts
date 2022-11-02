import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    { name: "Ludovic", grade: 80 },
    { name: "Maxime", grade: 10},
    { name: "Valérian", grade: 99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
