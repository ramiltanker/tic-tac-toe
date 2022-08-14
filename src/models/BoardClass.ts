import { CellClass } from "./CellClass";
import { Names } from "./FigureClass";


export class BoardClass {
  cells: CellClass[] = [];
  turn: Names = Names.circle;

  initCells() {
    for (let i = 0; i < 9; i++) {
      this.cells.push(new CellClass(this));
    }
  }

  public getCopyBoard(): BoardClass {
    const newBoard = new BoardClass();
    newBoard.cells = this.cells;
    return newBoard;
  }

  changeTurn() {
    if (this.turn === Names.circle) {
      this.turn = Names.cross;
    } else {
      this.turn = Names.circle;
    }
  }


  isWinner() {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        this.cells[a].figure?.name &&
        this.cells[a].figure?.name === this.cells[b].figure?.name &&
        this.cells[a].figure?.name === this.cells[c].figure?.name
      ) {
        return this.cells[a];
      }
    }
    return null;
  }
}
