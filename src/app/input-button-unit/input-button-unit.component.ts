import { Component, OnInit } from '@angular/core';

@Component({


  selector: 'app-input-button-unit',
  template: `
  <p>

    The title is: {{ title }}

  </p>
  <input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)">
  <button (click)="changeTitle('Button Clicked!')">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title: string = 'Hello World';

  constructor() {

  }

  ngOnInit(): void{
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
}
}
