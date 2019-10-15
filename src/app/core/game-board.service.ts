import {Injectable} from '@angular/core';
import {BoardItemI} from './board-item-interface';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  constructor() {
  }

  generateArrayForGameBoard(minNumber, maxNumber, quantity): Array<BoardItemI> {

    const shuffleArray = (array: Array<number>) => {

      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    };

    const normalizeArrayForGameBoardFields = (array: Array<number>) => {

      return array.map((value) => {
        return {guessedValue: false, value, visibility: false};
      });
    };

    const arraySlice = (array: Array<number>) => {
      return array.slice(0, quantity / 2);
    };

    let newArray = [];

    while (maxNumber >= minNumber) {
      newArray.push(maxNumber);
      maxNumber--;
    }

    newArray = shuffleArray(newArray);
    newArray = arraySlice(newArray);
    newArray = newArray.concat(newArray);
    newArray = shuffleArray(newArray);

    return normalizeArrayForGameBoardFields(newArray);
  }
}
