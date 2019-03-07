import {TicTacToeRow} from '../../Models/TTT_Row.model';

export const tripleOColumn2 = generateRows('x|o|x', ' |o|o', 'x|o| ');

export const tripleXRow1 = generateRows('x|x|x', 'o| |o', ' | | ');

type allowedValue = '' | 'O' | 'X';

function generateRows(...rows): TicTacToeRow[] {
  return rows.map(row => {
    const cells = row.split('|');
    const t3row = new TicTacToeRow();
    cells.map((value: allowedValue, idx: number) => t3row.cells[idx].value = value.toUpperCase().trim() as allowedValue)
    return t3row;
  });
}
