import {Injectable} from '@angular/core';
import {TicTacToeGrid} from '../Models/TTT_Grid.model';
import {GridValidationResult} from '../Models/GridValidationResult.type';
import {Player} from '../Models/Player.type';

@Injectable()
export class TicTacToeService {
  private defaultPlayer: Player = 'X';
  private currentPlayer: Player = this.defaultPlayer;

  get player() {
    return this.currentPlayer;
  }

  endTurn() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  reset() {
    this.currentPlayer = this.defaultPlayer;
    return new TicTacToeGrid();
  }

  validateGrid(grid: TicTacToeGrid): GridValidationResult {
    if (this.hasWinningRow(grid) || this.hasWinningColumn(grid) || this.hasWinningDiagonal(grid)) {
      return 'WIN';
    }

    return 'NEXT';
  }

  private hasWinningRow(grid: TicTacToeGrid): boolean {
    const rowValues = [0, 1, 2]
      .map(nr => ({column: 0, row: nr}) )
      .map(coordinates => grid.readLine(coordinates, {row: 0, column: 1}))
      .map(row => row.join(''));

    return !!(rowValues.find(value => value === 'XXX') || rowValues.find(value => value === 'OOOO'));
  }

  private hasWinningColumn(grid: TicTacToeGrid): boolean {
    const columnValues = [0, 1, 2]
      .map(nr => ({column: nr, row: 0}) )
      .map(coordinates => grid.readLine(coordinates, {row: 1, column: 0}))
      .map(row => row.join(''));

    return !!(columnValues.find(value => value === 'XXX') || columnValues.find(value => value === 'OOO'));
  }

  private hasWinningDiagonal(grid: TicTacToeGrid): boolean {
    // TODO: Task: Implement a test before writing the implementation. Dont forget to triangulate
    return false;
  }

}
