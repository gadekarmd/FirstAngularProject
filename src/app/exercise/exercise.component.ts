import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  name!: string;
  age!: number;
  num!: number;
  vowel!: string;
  users = [{
    "name": "abc",
    "age": "25"
  }, {
    "name": "cde",
    "age": "68"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
