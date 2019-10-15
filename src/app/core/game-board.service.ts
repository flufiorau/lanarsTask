import {Injectable} from '@angular/core';
import {BoardItemI} from './board-item-interface';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  constructor() {
  }

  /**
   * Сперва я получаю массив длиной @quantity последовательных пар уникальных значений от @min до @max
   * Затем массив [1,1,88,88,...,N,N] перемешиваю до [1,N,88,...,88,1,N]
   * На последнем шаге массив цифровых значений преобразовываю в массив обьектов типа BoardItemI
   */
  generateArrayForGameBoard(minNumber, maxNumber, quantity): Array<BoardItemI> {

    const shuffleArrayByNumberPairs = (array: Array<number>) => {
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

    const gameArrayOfNumberPairs = [];

    while (gameArrayOfNumberPairs.length < quantity) {
      const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
      if (!gameArrayOfNumberPairs.includes(randomNumber)) {
        gameArrayOfNumberPairs.push(randomNumber, randomNumber);
      }
    }

    return normalizeArrayForGameBoardFields(shuffleArrayByNumberPairs(gameArrayOfNumberPairs));
  }
}
