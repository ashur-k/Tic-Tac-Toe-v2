import React from 'react';
import { useState, useEffect } from 'react';
import { Patterns } from "../../utils/utils";

import  Square  from '../../components/Square/Square';
import './Twoplayers.css'
import Winner from '../../components/Winner/Winner';


const Twoplayers = () => {

  // React States
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer ] = useState("O")
  const [result, setResult] = useState({winner: 'none', state: 'none'})
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X"){
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }, [board])

  useEffect(() => {
    if(result.state != 'none') {
      restartgame();
    }
  }, [result])
  
  const chooseSquare = (square) => {

    
    setBoard(board.map((val, index) => {
      if (index == square && val == "") {
        return player
      }
        return val;
        
      }));
    
  }

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;

      let foundWinningPattern = true

      currentPattern.forEach((index) => {
        if (board[index] != firstPlayer) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        setResult({winner: player, state:'Won'})
        setGameOver(true)
      }

    })
  }

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false
      }
    })
    if (filled){
      setResult({winner: "draw", state: "Tie"})
    }
  }

  const restartgame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setPlayer("X")
  }

  return (
    <div className='main-board'>
        <h1 className='two-players-main-heading'>Two Players Game</h1>
        <div className='board'>
       
          <div className='row'>
            <Square val={board[0]} chooseSquare={() => {chooseSquare(0) }} />
            <Square val={board[1]} chooseSquare={() => {chooseSquare(1) }} />
            <Square val={board[2]} chooseSquare={() => {chooseSquare(2) }} />
          </div>
          <div className='row'>
            <Square val={board[3]} chooseSquare={() => {chooseSquare(3) }} />
            <Square val={board[4]} chooseSquare={() => {chooseSquare(4) }} />
            <Square val={board[5]} chooseSquare={() => {chooseSquare(5) }} />
          </div>
          <div className='row'>
            <Square val={board[6]} chooseSquare={() => {chooseSquare(6) }} />
            <Square val={board[7]} chooseSquare={() => {chooseSquare(7) }} />
            <Square val={board[8]} chooseSquare={() => {chooseSquare(8) }} />
          </div>
        </div>
        {result.winner !== 'none' && result.winner !== 'draw' && (
          <Winner message={'Player ' + result.winner + ' is winner'} color={'green'} />
        )}
        {result.winner === 'draw' && (
            <Winner message='Game is draw' color={'red'} />
        )}
    </div>
  )
}

export default Twoplayers