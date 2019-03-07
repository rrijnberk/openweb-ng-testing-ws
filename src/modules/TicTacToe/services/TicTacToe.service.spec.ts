import {TicTacToeService} from './TicTacToe.service';


describe('TicTacToeService', () => {
  let service: TicTacToeService;

  beforeEach(() => {
    service = new TicTacToeService();
  })

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

});
