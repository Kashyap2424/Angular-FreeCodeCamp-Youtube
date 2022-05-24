import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-FreeCodeCamp-Youtube';
  counter = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
