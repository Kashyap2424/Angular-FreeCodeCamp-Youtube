import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <h1 class="hello-world-component-heading">{{ componentTitle }}</h1>
  `,
  styles: [
    `
      .hello-world-component-heading {
        font-size: 2em;
        text-align: center;
        color: #00f332;
      }
    `,
  ],
})
export class helloWorldComponent {
  componentTitle = 'Hello World Component';
}
