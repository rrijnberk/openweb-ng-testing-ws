import {TicTacToeService} from './TicTacToe.service';
import {TicTacToeGrid} from '../Models/TTT_Grid.model';
import {tripleOColumn2, tripleXRow1} from './test/TicTacToe.service.spec.constants';


describe('TicTacToeService', () => {
  let service: TicTacToeService;
  let grid: TicTacToeGrid;

  beforeEach(() => {
    service = new TicTacToeService();
    grid = new TicTacToeGrid();

  });

  it('returns X as the default player', () => {
    expect(service.player).toEqual('X');
  });

  it('returns O in the next turn', () => {
    service.endTurn();
    expect(service.player).toEqual('O');
  });

  it('resets to X two turns down', () => {
    service.endTurn();
    service.endTurn();
    expect(service.player).toEqual('X');
  });

  it('returns next if there are moves left and there is no winner', () => {
    grid.rows = tripleXRow1;
    expect(service.validateGrid(grid)).toEqual('WIN');

  });

  it('returns draw if there are no moves left and there is no winner', () => {
    // Implement
  });

  describe('returns win if', () => {

    it('the first row is all player X', () => {
      grid.rows = tripleXRow1;
      expect(service.validateGrid(grid)).toEqual('WIN');
    });

    it('the second column is all player O', () => {
      grid.rows = tripleOColumn2;
      expect(service.validateGrid(grid)).toEqual('WIN');
    });

    // TODO: Something's wrong. Try to triangulate what is off
  });

  // Now write the tests for the following cases before implementing the logic

  // TODO: Add banner that shows the winner

  // TODO: Add click handler to the banner that closes it

  // TODO: Add auto close to the banner (set for 5 seconds)

  // TODO: Add draw support to banner

  // TODO: Change grid reset to trigger after banner close

});
