import {GenericElementFinder} from '../../generic/GenericElementFinder';
import {by} from 'protractor';

export class T3GridPo extends GenericElementFinder {
  get banner() {
    throw new Error('Not implemented yet.');
  }

  row(idx: number) {
    return new T3GridRowPo(this.all(by.className('t3-grid__row')).get(idx));
  }

  select(row: number, column: number) {
    return this.row(row).column(column).click();
  }
}

export class T3GridRowPo extends GenericElementFinder {
  column(idx: number) {
    return this.all(by.className('t3-grid__cell')).get(idx);
  }
}
