import { useState, useEffect } from 'react';

import Winner from '../../components/Winner/Winner';
import AiBoard from './AiBoard';
import AiSquare from './AiSquare';
import { Patterns, defaultSquares } from "../../utils/utils";
import './AiGameMode.css'


const AiGameMode = () => {
  const [squares, setSquares] = useState(defaultSquares());
  const [playerName, setPlayerName] = useState('')
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
 

  useEffect (() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;

    const patternsThatAre = (a,b,c) => {
      return Patterns.filter(squareIndexes => { 
        const squareValues = squareIndexes.map(index => squares[index]);
        return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValues.sort());
      });
    };

    const emptyIndexes = squares
    .map((square, index) => square === null ? index : null)
    .filter(val => val !== null);
    
    const playerWon = patternsThatAre('x', 'x', 'x').length > 0;
    const computerWon = patternsThatAre('o','o','o').length > 0;
   

    if (playerWon) {
      setWinner('x')
      setGameOver(true)
      console.log(`${playerName} has won`)
    }
    if(computerWon){
      setGameOver(true)
      setWinner('o')
    }
    // If Game ties
    if(!emptyIndexes.length){
      console.log('empty indexws')
      alert('Game Over no one won')
      setSquares(defaultSquares())
      return;
    }
    
    // Computer's turn
    const putComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    };


    if (isComputerTurn) {

      const winningPatterns = patternsThatAre('o', 'o', null);
      if(winningPatterns.length > 0) {
        const winIndex = winningPatterns[0].filter(index => squares[index] == null)[0];
        putComputerAt(winIndex);
        return;
      }

      const patternsToBlock = patternsThatAre('x', 'x', null);
      if (patternsToBlock.length > 0){
        const blockIndex = patternsToBlock[0].filter(index => squares[index] == null)[0];
        putComputerAt(blockIndex);
        return;
      }

      

      const patternsToContinue = patternsThatAre('o', null, null);
      if(patternsToContinue.length > 0) {
        putComputerAt(patternsToContinue[0].filter(index => squares[index] == null)[0]);
        return;
      }
      
      const randomIndex = emptyIndexes[ Math.ceil(Math.random()*emptyIndexes.length) ];
      putComputerAt(randomIndex);
    }

    
    

  }, [squares]);

  const handleSquareClick = (index) => {

    if (gameOver===true) {
      alert(`Game Over Winner is ${winner}`)
    }else{
      const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
      if (isPlayerTurn) {
        let newSqaures = squares;
        if(newSqaures[index] !== null){
          alert('Please find an empty box')
        }else{
          newSqaures[index] = 'x'
          setSquares([...newSqaures])
        }
      }
    }
  
  }

  return (
    <div className='main-board'>
      <h1 className='two-players-main-heading'>AI Game Mode</h1>
     <AiBoard>
      {squares.map((square, index) =>
        <AiSquare 
          key={index}
          x={square==='x'?1:0}
          o={square==='o'?1:0}
          onClick = {() => handleSquareClick(index)}  />
        )}
     </AiBoard>
     {winner === 'x' && (
        <Winner message={'You Won!'} color={'green'} />
      )}
      {winner === 'o' &&(
        <Winner message={'You Lost!'} color={'red'}  />
      )} 
    </div>
  )
}

export default AiGameMode