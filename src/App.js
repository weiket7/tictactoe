import { useState } from 'react';
import './App.css';
import Cell from './Cell';
import { cloneDeepArray } from './utilities/ArrayHelper';
import { BOARDSTATE } from './utilities/BoardState';
import { SYMBOL } from './utilities/Symbol';

function App() {
  const gridDimension = 3;
  const totalPossibleMoves = gridDimension * gridDimension;
  const defaultGrid = Array(gridDimension).fill(Array(gridDimension).fill(SYMBOL.Default));
  const defaultMessage = {
    type: "error",
    text: "",
  }

  const [currentPlayer, setNextPlayer] = useState(SYMBOL.O);
  const [message, setMessage] = useState(defaultMessage);
  const [boardState, setBoardState] = useState(BOARDSTATE.GameOn);
  const [score, setScore] = useState({O: 0, X: 0});
  const [grid, setGrid] = useState(defaultGrid);
  const [moves, setMoves] = useState(0);

  const selectCell = (rowIndex, columnIndex) => {
    let updatedMoves = moves;
    updatedMoves++;
    setMoves(updatedMoves);

    const hasCellBeenSelected = grid[rowIndex][columnIndex] !== SYMBOL.Default;
    if (hasCellBeenSelected) {
      return
    }

    currentPlayer === SYMBOL.O ? setNextPlayer(SYMBOL.X) : setNextPlayer(SYMBOL.O);
    let updatedGrid = cloneDeepArray(grid);
    updatedGrid[rowIndex][columnIndex] = currentPlayer;
    setGrid(updatedGrid);

    const hasWinner = checkWinner(updatedGrid, rowIndex, columnIndex, currentPlayer);
    if(hasWinner) {
      setBoardState(BOARDSTATE.HasWinner);
      setMessage({type: "success", text: "Player " + currentPlayer + " wins!" })

      let updatedScore = {...score};
      updatedScore[currentPlayer]++;
      setScore(updatedScore);
      return
    }

    if(updatedMoves === totalPossibleMoves) {
      setMessage({type: "info", text: "Draw"})
      setBoardState(BOARDSTATE.Draw);
      return
    }
    setMessage(defaultMessage);
  }

  const checkWinner = (grid, rowIndex, columnIndex, targetSymbol) => {
    //check columns
    let count = 0;
    for (let i = 0; i < gridDimension; i++) {
      if (grid[rowIndex][i] === targetSymbol) {
        count++;
      }
    }
    if (count === gridDimension) {
      return true;
    }

    count = 0;
    //check rows
    for (let i = 0; i < gridDimension; i++) {
      if (grid[i][columnIndex] === targetSymbol) {
        count++;
      }
    }
    if (count === gridDimension) {
      return true;
    }

    //check diagonal
    if (rowIndex === columnIndex) {
      for (let i = 0; i < gridDimension; i++) {
        if (grid[i][i] !== targetSymbol)
          break;
        if (i === gridDimension - 1) {
          return true;
        }
      }
    }

    //check other diagonal
    if (rowIndex + columnIndex == gridDimension - 1) {
      for (let i = 0; i < gridDimension; i++) {
        if (grid[i][(gridDimension - 1) - i] !== targetSymbol)
          break;
        if (i === gridDimension - 1) {
          return true;
        }
      }
    }
  }

  const restartGame = () => {
    setGrid(defaultGrid);
    setBoardState(BOARDSTATE.GameOn);
    setMessage(defaultMessage);
    setMoves(0);
  }

  return (
    <div id="tic-tac-toe">
      <div>
        <h1 className="mb-3">Tic Tac Toe</h1>
        <div className="row">
          <div className="col text-center">
            <h5>Player O</h5>
          </div>
          <div className="col text-center">
            <h5>Player X</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            {score.O} wins
          </div>
          <div className="col text-center">
            {score.X} wins
          </div>
        </div>

        <div className="row">
          {grid.map((row, rowIndex) =>
            row.map((cell, columnIndex) =>
              <Cell key={rowIndex + "" + columnIndex} rowIndex={rowIndex} columnIndex={columnIndex}
                disabled={boardState === BOARDSTATE.Draw || boardState === BOARDSTATE.HasWinner} stateChanger={selectCell}>
                {cell}
              </Cell>
            )
          )}
        </div>

        {
          message.text &&
          <div className={"alert alert-"+message.type}>
            {message.text}
          </div>
        }
        
        <div className="mt-3 row">
          <div className="col">
            <button className="btn btn-success btn-lg" onClick={restartGame}>
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
