import { Component } from '@angular/core';
import { format } from 'date-fns'

const TIME_FORMAT = "HH:mm";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  time: string = format(new Date(), TIME_FORMAT);

  constructor() {
    this.initClock();
  }

  initClock() {
    setInterval(() => {
      this.time = format(new Date(), TIME_FORMAT);
    }, 1000)
  }
}
