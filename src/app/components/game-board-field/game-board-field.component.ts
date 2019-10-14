import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardItemI} from '../../core/board-item-interface';

@Component({
  selector: 'app-game-board-field',
  templateUrl: './game-board-field.component.html',
  styleUrls: ['./game-board-field.component.css']
})
export class GameBoardFieldComponent implements OnInit {

  @Input() boardFieldObject: BoardItemI;

  @Output() clickEvent = new EventEmitter<BoardItemI>();

  constructor() {
  }

  ngOnInit() {
  }

  userClickedByField(): void {
    this.clickEvent.emit(this.boardFieldObject);
  }
}
