import React, { FC, useEffect, useState } from "react";
import { BoardClass } from "../../models/BoardClass";
import { CellClass } from "../../models/CellClass";
import { Names } from "../../models/FigureClass";
import FigureComponent from "../FigureComponent/FigureComponent";
import "./BoardComponent.scss";

type Score = {
  id: number;
  name: string;
  count: number;
};

interface BoardComponentProps {
  board: BoardClass;
  setBoard: React.Dispatch<React.SetStateAction<BoardClass>>;
  restart: () => void;
}

const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
  restart,
}) => {
  const [currentCell, setCurrentCell] = useState<CellClass | null>(null);
  const [winner, setWinner] = useState<CellClass | null>(null);
  const [score, setScore] = useState<Score[]>([
    { id: 0, name: Names.circle, count: 0 },
    { id: 1, name: Names.cross, count: 0 },
  ]);
  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    if (winner) {
      const newScore = score.map((item) => {
        if (item.name === winner.figure?.name) {
          item.count = item.count + 1;
        }
        return item;
      });
      setScore(newScore);
    }
  }, [winner]);

  const handleClick = (cell: CellClass) => {
    setCurrentCell(cell);
    cell.handleClick(cell);
    const winner = board.isWinner();
    setWinner(winner);
    updateBoard();
  };

  const handleRestartGame = () => {
    restart();
    setWinner(null);
  };

  return (
    <div className="board">
      <p className={`board__winner ${winner ? "board__show" : ""}`}>
        {winner && winner.figure?.name === Names.circle
          ? "Победили: O"
          : "Победили: X"}
      </p>
      <div className="board__cells">
        {board.cells.map((cell) => {
          return (
            <FigureComponent
              key={cell.id}
              winner={winner}
              onClick={() => {
                if (winner === null) handleClick(cell);
                else return;
              }}
              cell={cell}
            />
          );
        })}
      </div>
      <button
        type="button"
        className={`board__button-restart ${winner ? "board__show" : ""}`}
        onClick={handleRestartGame}
      >
        Начать заново
      </button>
      <div className="board__score">
        <p className="board__score-title">Счёт</p>
        <div className="board__score-container">
          {score.map((item) => {
            return (
              <div className="board__score-box" key={item.id}>
                <p className="board__score-name">
                  {item.name === Names.circle ? "Нолики" : "Крестики"}
                </p>
                <p className="board__score-count">{item.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardComponent;
