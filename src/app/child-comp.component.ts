import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
  <br />
  <div class="contain">
    <h2>Child Component</h2>
    <p>This value came from the parent component: <strong>{{parentValue}}</strong></p>
    <hr />
    <label for="parent">Enter something to send to parent:
      <input type="text" #childInput (keyup)="onChange(childInput.value)">
    </label>
    <hr />
    <h4>someData displayed locally:</h4>
    <ul>
    <li>{{someData.name}}</li>
    <li>{{someData.age}}</li>
    <li>{{someData.address.number}}<br />
    {{someData.address.street}}<br />
    {{someData.address.postcode}}
    </li>
    </ul>
    <button type="submit" (click)="emitData(someData)">I will to send someData object to my parent!</button>
    <div>
      <h3>{{simpleString}}</h3>
    </div>
  </div>
  `,
  styles: [`
  .contain {
    border: 1px solid #999;
    padding:1rem;
  }
  `],
  inputs: ['parentValue:passedValue'], //note alias passedValue
  //outputs: ['childChanged']  !note used @output in export instead
})

export class ChildCompComponent {
  parentValue: string;
  @Input() simpleString: string;
  //title = 'I\'m a nested component by Elton!....'; //testing
  someData = {};

  constructor() {
    this.someData = {
      name: "Elton",
      age: 42,
      address: {
        number: 5,
        street: "Linnel Road",
        postcode: "Rh24DH"
      }
    }
    console.log('somedata', this.someData);
  }


  @Output() childChanged = new EventEmitter<string>();
  onChange(value: string) {
    //debugger;
    this.childChanged.emit(value);
  }

  @Output() dataSent = new EventEmitter<any>();
  emitData(value: any) {
    //debugger;
    this.dataSent.emit(JSON.stringify(value));
  }



}
