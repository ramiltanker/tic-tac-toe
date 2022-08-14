import React, { useEffect, useState } from "react";
import "./App.scss";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { BoardClass } from "./models/BoardClass";

function App() {
  const [board, setBoard] = useState<BoardClass>(new BoardClass());

  useEffect(() => {
    const newBoard = new BoardClass();
    newBoard.initCells();
    setBoard(newBoard);
  }, []);

  function handleRestart() {
    const newBoard = new BoardClass();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className="wrapper">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        restart={handleRestart}
      />
    </div>
  );
}

export default App;
