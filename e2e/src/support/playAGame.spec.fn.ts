import {T3GridPo} from '../modules/TicTacToe/T3Grid.po';
import {browser} from 'protractor';
import {TicTacToePage} from '../modules/TicTacToe/TicTacToePage.po';

export function playAGame(...coordinatesArray: Array<number[]>) {
  return () => {
    const grid: T3GridPo = (new TicTacToePage()).grid;
    coordinatesArray.forEach(coordinates => {
      const [row, column] = coordinates;
      grid.select(row, column);
      browser.sleep(parseInt(process.env.npm_config_step_delay || '0', 10));
    });
  };
}
