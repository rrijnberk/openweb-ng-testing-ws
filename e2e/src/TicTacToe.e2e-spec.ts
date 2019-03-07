import { browser, logging } from 'protractor';
import {TicTacToePage} from './modules/TicTacToe/TicTacToePage.po';

describe('workspace-project App', () => {
  let page: TicTacToePage;

  beforeEach(() => {
    TicTacToePage.open();
    page = new TicTacToePage();
  });

  it('should display the TicTacToe grid', () => {
    expect(page.grid.isDisplayed()).toBe(true);
  });
});
