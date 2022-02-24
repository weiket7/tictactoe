import { useState } from 'react';
import './App.css';
import Cell from './Cell';

function App() {
  const [currentPlayer, nextPlayer] = useState("O");
  const [score, setScore] = useState({O: 0, X: 0});
  const [grid, setGrid] = useState(Array(3).fill(Array(3).fill("+")));

  const selectCell = (rowIndex, columnIndex) => {
    const hasCellBeenSelected = grid[rowIndex][columnIndex] !== "+";
    if (hasCellBeenSelected) {
      return
    }

    currentPlayer === "O" ? nextPlayer("X") : nextPlayer("O");
    let updatedGrid = cloneDeepArray(grid);
    updatedGrid[rowIndex][columnIndex] = currentPlayer;
    setGrid(updatedGrid);

    const hasWinner = checkWinner(updatedGrid, rowIndex, columnIndex, currentPlayer);
    if(hasWinner) {
      let updatedScore = {...score};
      updatedScore[currentPlayer]++;
      setScore(updatedScore);
    }
  }

  const cloneDeepArray = (array) => {
    return array.map(function (arr) {
      return arr.slice();
    });
  }

  const checkWinner = (updatedGrid, x, y, s) => {
    let n = 3;

    //check columns
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (updatedGrid[x][i] === s) {
        count++;
      }
    }
    if (count === n) {
      return true;
    }

    count = 0;
    //check rows
    for (let i = 0; i < n; i++) {
      if (updatedGrid[i][y] === s) {
        count++;
      }
    }
    if (count === n) {
      return true;
    }

    //check diagonal
    if (x === y) {
      for (let i = 0; i < n; i++) {
        if (updatedGrid[i][i] !== s)
          break;
        if (i === n - 1) {
          return true;
        }
      }
    }

    //check other diagonal
    if (x + y == n - 1) {
      for (let i = 0; i < n; i++) {
        if (updatedGrid[i][(n - 1) - i] != s)
          break;
        if (i === n - 1) {
          return true;
        }
      }
    }
  }

  return (
    <div>
      <h1 className="mb-3">Tic Tac Toe</h1>
      <div class="row">
        <div class="col text-center">
          <h5>Player O</h5>
        </div>
        <div class="col text-center">
          <h5>Player X</h5>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          {score.O} wins
        </div>
        <div class="col text-center">
          {score.X} wins
        </div>
      </div>

      <div class="row">
        {grid.map((row, rowIndex) =>
          row.map((cell, columnIndex) =>
            <Cell key={rowIndex + "" + columnIndex} rowIndex={rowIndex} columnIndex={columnIndex} stateChanger={selectCell}>
              {cell}
            </Cell>
          )
        )}
      </div>

      <div className="mt-3 row">
        <div className="col">
          <a href="#" id="reset" className="btn-success btn span3">Restart</a>
        </div>
      </div>
    </div>
  );
}

export default App;
