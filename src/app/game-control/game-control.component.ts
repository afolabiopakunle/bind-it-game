import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onStart = new EventEmitter();
  @Output() onStop = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  start() {
    this.onStart.emit();
  }

  stop() {
    this.onStop.emit();
  }

}