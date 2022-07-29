import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() directionEventEmitter = new EventEmitter<number>();

  constructor( ) { }

  ngOnInit(): void {
  }

  public sendDirection(direction: number) {
    this.directionEventEmitter.emit(direction)
  }

}
