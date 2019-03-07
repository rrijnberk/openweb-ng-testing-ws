import {NgModule} from '@angular/core';
import {TicTacToeComponent} from './components/TicTacToe.component';
import {TicTacToeService} from './services/TicTacToe.service';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [TicTacToeComponent],
  exports: [TicTacToeComponent],
  providers: [TicTacToeService]
})
export class TicTacToeModule {
}
