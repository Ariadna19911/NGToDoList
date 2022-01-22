import { Component, OnInit } from '@angular/core';

@Component({


  selector: 'app-input-button-unit',
  template: `
  <p>

    The title is: {{ title }}
  </p>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title: string = 'Hello World';

  constructor() {
    console.log('in constructor');
    console.log(this.title);
    this.changeTitle('My First Angular App');
    console.log(this.title);
  }

  ngOnInit():void{
  }
  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }
}
