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
    let result;
    if (!this.grid.rows[rowIdx].cells[cellIdx].value) {
      this.grid.setValue(rowIdx, cellIdx, this.service.player);
      console.log('==>', this.service.validateGrid(this.grid))
      switch ((result = this.service.validateGrid(this.grid))) {
        case 'DRAW':
        case 'WIN':
          console.log('We have a', result)
          this.grid = this.service.reset();
       }
      this.service.endTurn();
    }
  }
}
