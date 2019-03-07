import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TicTacToeComponent} from '../modules/TicTacToe/components/TicTacToe.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'tic-tac-toe'
}, {
  path: 'tic-tac-toe', component: TicTacToeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
