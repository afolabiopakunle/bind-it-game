import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  targetNum: number = 0;
  evenNumber: number;
  oddNumber: number;
  control;

  startClicked() {
  this.control =  setInterval(()=> {
      this.targetNum++;
      if(this.targetNum % 2) {
        this.oddNumber = this.targetNum
      } else {
        this.evenNumber = this.targetNum
      }
    },1000);
    console.log('started')
  }

  stopClicked() {
    clearInterval(this.control);
    console.log('stopped')
  }

  clearClicked() {
    this.evenNumber = null;
    this.oddNumber = null;
  }
}
