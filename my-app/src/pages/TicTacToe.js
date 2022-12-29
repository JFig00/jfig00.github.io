import React from 'react';
import { useState } from 'react';
import Status from './ttt/Status';
import Board from './ttt/Board';

const TicTacToe = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for X, 2 for O
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);

    const checkRow = (board, row) => {
        return (
            board[row][0] === board[row][1] &&
            board[row][1] === board[row][2] &&
            board[row][0] !== 0
        );
    }

    const checkCol = (board, col) => {
        return (
            board[0][col] === board[1][col] &&
            board[1][col] === board[2][col] &&
            board[0][col] !== 0
        );
    }

    const checkDiag = (board) => {
        return (
            (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) ||
            (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0)
        );
    }

    const checkWin = (board) => {
        for (let i = 0; i < 3; i++) {
            if (checkRow(board, i) || checkCol(board, i)) {
                return board[i][0];
            }
        }
        return checkDiag(board);
    }

    const checkDraw = (board) => {
        return board.every((row) => row.every((cell) => cell !== 0));
    }

    const handleClick = (row, col) => {
        if (winner || board[row][col] !== 0) {
            return;
        }

        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        const gameResult = checkWin(newBoard);
        if (gameResult) {
            setWinner(gameResult);
        } else if (checkDraw(newBoard)) {
            setWinner('draw');
        } else {
            setCurrentPlayer((currentPlayer) => (currentPlayer === 1 ? 2 : 1));
        }
    }


    return (
        <div className="game">
            <Status currentPlayer={currentPlayer} winner={winner} />
            <Board board={board} handleClick={handleClick} />
        </div>
    );
}

export default TicTacToe;
