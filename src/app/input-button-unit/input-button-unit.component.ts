import { Component, OnInit } from '@angular/core';

@Component({


  selector: 'app-input-button-unit',
  template: `
  <p>

    The title is: {{ title }}

  </p>
  <input [value]="title">
  <button>Save</button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title: string = 'Hello World';

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

changeTitle(newTitle: string) {
  console.log(newTitle);
  this.title = newTitle;
}
}
