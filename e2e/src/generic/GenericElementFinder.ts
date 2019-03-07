import {ElementFinder} from 'protractor';


export class GenericElementFinder extends ElementFinder {
  constructor(protected elementFinder: ElementFinder) {
    super(elementFinder.browser_, elementFinder.elementArrayFinder_);
  }
}
