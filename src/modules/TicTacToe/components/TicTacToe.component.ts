import {Component, HostBinding, OnInit} from '@angular/core';
import {TicTacToeService} from '../services/TicTacToe.service';
import {TicTacToeGrid} from '../Models/TTT_Grid.model';

@Component({
  templateUrl: './TicTacToe.component.html',
  styleUrls: ['./TicTacToe.component.scss']

})
export class TicTacToeComponent implements OnInit {
  @HostBinding('class.t3-container') hostClass = true;

  grid: TicTacToeGrid;

  constructor(private service: TicTacToeService) {

  }

  ngOnInit() {
    this.grid = new TicTacToeGrid();
  }

  selectOption(rowIdx: number, cellIdx: number): void {
    if (this.grid.rows[rowIdx].cells[cellIdx].value) {
      return;
    }

    this.grid.setValue(rowIdx, cellIdx, this.service.player);
    this.validateGrid();
  }

  private validateGrid() {
    switch (this.service.validateGrid(this.grid)) {
      case 'DRAW':
      case 'WIN':
        this.grid = this.service.reset();
        break;
      default:
        this.service.endTurn();
    }
  }

}
