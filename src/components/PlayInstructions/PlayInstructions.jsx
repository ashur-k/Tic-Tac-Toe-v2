import React from 'react';
import Feature from '../Feature/Feature';

import './PlayInstructions.css'

const PlayInstruction = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature 
          title="How to play Tic Tac Toe"
          text="Tic-Tac-Toe is a simple and fun game for 2 players, X and O. 
          It is played on a 3x3 grid. Each player's goal is to make 3 in a row.
          Typically, X starts first, but in Gametable's Tabletop Tic Tac Toe, 
          Player 1 starts first on the first game and Player 2 (or the computer) 
          starts first on the next game. The starting player continues to alternate 
          from game to game. This helps keep gameplay fair over time.
          "
          />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">
          Tic Tac Toe Super Fun and Super Quick
        </h1>
        <p>Game Features</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
            title="Beautiful graphics" 
            text="The Game is devloped in React Frontend to give user
            high quality graphics." 
        />
        <Feature 
            title="Easy to use interface" 
            text="Easy and simple web design with simple navigation menu
            to provide user and easy experience." 
        />
        <Feature 
            title="Lightning fast loading" 
            text="Smart hosting on Heroku for fast loading to make user 
            experience better." 
        />
      </div>
    </div>
  )
}

export default PlayInstruction