import {GenericElementFinder} from '../../generic/GenericElementFinder';
import {by, element} from 'protractor';

export class TicTacToePage extends GenericElementFinder {
  constructor() {
    super(element(by.tagName('router-outlet')));
  }


}
