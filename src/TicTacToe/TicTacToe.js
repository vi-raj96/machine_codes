import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = player;
    setBoard(updatedBoard);

    checkWinner(updatedBoard);

    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }

    if (board.every((square) => square !== null) && !winner) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((square, index) => (
          <div
            key={index}
            className={`square ${square}`}
            onClick={() => handleSquareClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
      {winner && (
        <div className="status">
          {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
