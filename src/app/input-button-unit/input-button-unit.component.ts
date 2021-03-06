import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({


  selector: 'app-input-button-unit',
  template: `

  <input #inputElementRef [value]="title"
       (keyup.enter)="submitValue($event.target.value)">
  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title: string = 'Hello World';

  constructor() {

  }

  ngOnInit(): void{
}
 submitValue(newTitle: string): void {
  this.submit.emit(newTitle);
}
}
