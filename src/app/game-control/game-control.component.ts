import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onStart = new EventEmitter();
  @Output() onStop = new EventEmitter();
  @Output() onClear = new EventEmitter();
  gameStarted: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  start() {
    this.onStart.emit();
    this.gameStarted = !this.gameStarted
  }

  stop() {
    this.onStop.emit();
  }

  clear() {
    this.onClear.emit()
  }

}