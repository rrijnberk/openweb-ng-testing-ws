export class TicTacToeCell {
  value: '' | 'O' | 'X';

  get className() {
    switch (this.value) {
      case 'X':
        return 'fa fa-times';
      case 'O':
        return 'far fa-circle';
      default:
        return '';
    }
  }
}
