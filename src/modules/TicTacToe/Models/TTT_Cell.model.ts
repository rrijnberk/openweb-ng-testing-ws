export class TicTacToeCell {
  value: '' | 'O' | 'X';

  get className() {
    switch (this.value) {
      case 'X':
        return 'selected selected__player-x';
      case 'O':
        return 'selected selected__player-o';
      default:
        return '';
    }
  }
}
