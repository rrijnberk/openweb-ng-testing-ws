import {TicTacToePage} from './modules/TicTacToe/TicTacToePage.po';
import {playAGame} from './support/playAGame.spec.fn';

describe('The TicTacToe App', () => {
  let page: TicTacToePage;

  beforeEach(() => {
    TicTacToePage.open();
    page = new TicTacToePage();
  });

  it('displays the host container', () => {
    expect(page.isDisplayed()).toBe(true);
  });

  it('displays the TicTacToe grid', () => {
    expect(page.grid.isDisplayed()).toBe(true);
  });

  describe('when playing a game', () => {
    xdescribe('and player X wins', () => {
      beforeEach(playAGame([1, 0], [0, 1], [1, 1], [0, 2], [1, 2]));

      // TODO: Implement the banner
      // TODO: Implement the banner reference in the page PO
      it('it shows a banner.', () => {
        expect(page.banner.isDisplayed()).toBe(true);
      });

      // TODO: Implement the banner "player wins" text
      it('it correctly show the associated text', () => {
        expect(page.banner.text()).toEqual('player X wins');
      });
    });

    xdescribe('and player O wins', () => {
      beforeEach(playAGame([0, 0], [0, 1], [2, 2], [1, 1], [0, 2], [2, 1]));

      // TODO: Implement the banner
      // TODO: Implement the banner reference in the page PO
      it('it shows a banner.', () => {
        expect(page.banner.isDisplayed()).toBe(true);
      });

      // TODO: Implement the "player wins" banner text
      it('it correctly show the associated text', () => {
        expect(page.banner.text()).toEqual('player O wins');
      });
    });

    xdescribe('and no more moves are left', () => {
      beforeEach(playAGame([2, 0], [1, 1], [1, 1], [1, 0], [0, 0], [2, 2], [2, 1], [0, 1], [0, 2], [1, 2]));

      // TODO: Implement the banner
      // TODO: Implement the banner reference in the page PO
      it('it shows a banner.', () => {
        expect(page.banner.isDisplayed()).toBe(true);
      });

      // TODO: Implement the "game is a draw" banner text
      it('it correctly show the associated text', () => {
        expect(page.banner.text()).toEqual('draw');
      });
    });
  });
});
