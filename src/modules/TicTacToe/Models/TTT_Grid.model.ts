import {TicTacToeRow} from './TTT_Row.model';
import {Player} from './Player.type';

export interface Coordinates {
  column: number;
  row: number;
}

export interface Increments {
  column: 0 | 1;
  row: 0 | 1 | -1;
}

export class TicTacToeGrid {
  public rows: TicTacToeRow[] = [
    new TicTacToeRow(),
    new TicTacToeRow(),
    new TicTacToeRow()
  ];

  setValue(rowIdx: number, cellIdx: number, player: Player) {
    this.rows[rowIdx].cells[cellIdx].value = player;

  }

  readLine = (position: Coordinates, increments: Increments) => {
    const result = [];

    let idx = 0;
    do {
      result.push(this.rows[position.row].cells[position.column].value);

      position.column += increments.column;
      position.row += increments.row;
      idx++;
    } while (idx < 3);
    return result;
  }
}

