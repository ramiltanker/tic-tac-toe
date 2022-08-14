import { FC } from "react";
import { CellClass } from "../../models/CellClass";
import { Names } from "../../models/FigureClass";
import "./FigureComponent.scss";

interface FigureComponentProps {
  className?: string;
  onClick: () => void;
  cell: CellClass;
  winner: CellClass | null;
}

const FigureComponent: FC<FigureComponentProps> = ({
  className,
  onClick,
  cell,
  winner,
}) => {
  return (
    <div
      className={`figure ${className} ${
        !cell.figure && !winner ? "figure--cursor" : ""
      }`}
      onClick={onClick}
    >
      {cell.figure && (
        <p className="figure__text">
          {cell.figure.name === Names.circle ? "O" : "X"}
        </p>
      )}
    </div>
  );
};

export default FigureComponent;
