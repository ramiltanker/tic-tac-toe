import { BoardClass } from "./BoardClass";
import { FigureClass, Names } from "./FigureClass";
import { CircleClass } from "./figures/CircleClass";
import { CrossClass } from "./figures/CrossClass";

export class CellClass {
  readonly id: number;
  figure: FigureClass | null;
  board: BoardClass;

  constructor(board: BoardClass) {
    this.board = board;
    this.figure = null;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    if (this.figure) {
      return false;
    } else return true;
  }

  handleClick(cell: CellClass) {
    if (this.isEmpty()) {
      if (this.board.turn === Names.circle) {
        this.figure = new CircleClass(cell);
        this.board.changeTurn();
      } else {
        this.figure = new CrossClass(cell);
        this.board.changeTurn();
      }
    }
  }
}
