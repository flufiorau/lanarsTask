import {Injectable} from '@angular/core';
import {BoardItemI} from './board-item-interface';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  constructor() {
  }

  generateArray(min, max, count): Array<BoardItemI> {

    const doubleArray = (array: Array<number>) => {
      return array.concat(array);
    };

    const shuffleArray = (array: Array<number>) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    };

    const normalizeArrayForGame = (array: Array<number>) => {
      return array.map((value) => {
        return {guessedValue: false, value, visibility: false};
      });
    };


    const gameArray = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < count / 2; i++) {
      gameArray.push(Math.floor(Math.random() * (max - min)) + min);
    }

    return normalizeArrayForGame(shuffleArray(doubleArray(gameArray)));
  }
}
