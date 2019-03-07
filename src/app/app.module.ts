import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TicTacToeModule} from '../modules/TicTacToe/TicTacToe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicTacToeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
