import { Component } from '@angular/core';

// import { ChildCompComponent } from './child-comp.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="contain">
    <h2>Parent Component</h2>
    <p>This value came from the child component: <strong>{{childValue}}</strong></p>
    <hr />
    <label for="parent">Enter something to send to child:
      <input id="parent" type="text" #parentInput (keyup)="0">
    </label>
    <br />
        <hr />
    <br />
    <h4>someData object from Child: {{childObject}}</h4>
    <app-child-comp [simpleString]='childTitle' [passedValue]="parentInput.value" (childChanged)="childValue = $event" (dataSent)="childObject = $event"></app-child-comp>
  </div>
`,
  styles: [`
.contain {
  border: 1px solid #999;
  padding:1rem;
}
`],
})


export class AppComponent {
  childValue: string;
  childObject: number;

  childTitle: string = 'This simple string was passed to child from it\'s parent';
}
