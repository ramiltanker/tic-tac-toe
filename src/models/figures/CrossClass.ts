import { CellClass } from "../CellClass";
import { FigureClass, Names } from "../FigureClass";

export class CrossClass extends FigureClass {
  constructor(cell: CellClass) {
    super(cell);
    this.name = Names.cross;
  }
}
