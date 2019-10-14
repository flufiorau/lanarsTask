import {Component} from '@angular/core';
import {GameBoardService} from '../../core/game-board.service';
import {BoardItemI} from '../../core/board-item-interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent {

  minNumber = 1;
  maxNumber = 99;
  halfBoardsNumber = 36;
  gameBoard: Array<BoardItemI>;
  previousSelectedFieldIndex: number = undefined;
  timer = 0;
  title = 'Mahjong-like game!';

  constructor(private gameBoardService: GameBoardService) {
    this.gameBoard = this.gameBoardService.generateArray(this.minNumber, this.maxNumber, this.halfBoardsNumber);
  }

  clickEvent(event: BoardItemI, i): void {
    if (event.visibility || this.timer) {
      return;
    }
    event.visibility = true;
    if (this.previousSelectedFieldIndex === undefined) {
      this.previousSelectedFieldIndex = i;
    } else if (this.gameBoard[this.previousSelectedFieldIndex].value === event.value) {
      event.guessedValue = true;
      this.gameBoard[this.previousSelectedFieldIndex].guessedValue = true;
      this.previousSelectedFieldIndex = undefined;
    } else  {
      this.timer = setTimeout(() => {
        this.gameBoard[this.previousSelectedFieldIndex].visibility = false;
        event.visibility = false;
        this.previousSelectedFieldIndex = undefined;
        this.timer = 0;
      }, 500);
    }
  }
}
