import {TicTacToeRow} from './TTCRow.model';
import {Player} from './Player.type';

export class TicTacToeGrid {
  public rows: TicTacToeRow[] = [
    new TicTacToeRow(),
    new TicTacToeRow(),
    new TicTacToeRow()
  ];

  setValue(rowIdx: number, cellIdx: number, player: Player) {
    this.rows[rowIdx].cells[cellIdx].value = player;
  }
}

