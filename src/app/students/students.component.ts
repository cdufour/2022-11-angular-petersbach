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

  objStyle: any = { 
    color: 'green', 
    fontSize: '30pt'
  };

  objClass: any = {
    winner: true,
    loser: false
  };

  private repoStyles: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  constructor() {
    setTimeout(() => {
      //this.objStyle.color = 'orange',
      let mergeProps = {...this.objStyle, ...this.repoStyles};
      this.objStyle = mergeProps;
      this.objClass = { winner: false, loser: true};
    }, 5000);
  }

  ngOnInit(): void {
  }

  getColor(i: number): string {
    return this.students[i].grade < 50 ? 'red' : 'black';
  }
}
