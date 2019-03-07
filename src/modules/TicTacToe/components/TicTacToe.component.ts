import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  templateUrl: './TicTacToe.component.html'
})
export class TicTacToeComponent implements OnInit {
  selected = '';

  constructor(private elementRef: ElementRef){}

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', this.clickHandler);
  }

  private clickHandler(): void {

  }
}
