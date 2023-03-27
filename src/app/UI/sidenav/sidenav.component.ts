import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  currentTime: string = "";

  constructor() {
    this.updateTime();
  }

  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = this.padLeadingZeros(now.getHours(), 2);
    const minutes = this.padLeadingZeros(now.getMinutes(), 2);
    const seconds = this.padLeadingZeros(now.getSeconds(), 2);
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }

  padLeadingZeros(num: number, size: number): string {
    let s = num.toString();
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
}
