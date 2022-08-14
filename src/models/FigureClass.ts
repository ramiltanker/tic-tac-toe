import { CellClass } from "./CellClass";

export enum Names {
  circle = "circle",
  cross = "cross",
}

export class FigureClass {
  name: Names;
  cell: CellClass;

  constructor(cell: CellClass) {
    this.cell = cell;
    this.name = Names.circle;
  }
}
