import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() newMessageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.newMessageEvent.emit('Hello, form child component');
  }
}
