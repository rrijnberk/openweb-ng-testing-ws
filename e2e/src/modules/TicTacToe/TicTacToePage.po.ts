import {GenericElementFinder} from '../../generic/GenericElementFinder';
import {browser, by, element} from 'protractor';
import {T3GridPo} from './T3Grid.po';

export class TicTacToePage extends GenericElementFinder {
  static open() {
    browser.get(browser.baseUrl);
  }

  constructor() {
    super(element(by.className('t3-container')));
  }

  get grid() {
    return new T3GridPo(this.element(by.className('t3-grid')));
  }
}
