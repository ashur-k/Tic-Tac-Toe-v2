import React from 'react';

import logo from '../../assests/tic-tac-toe.png'
import './Header.css'


const Header = ({ header_data }) => {
  console.log(header_data)
  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
      {header_data.map((header) => (
        <div>
          {header.id}
        </div>
      ))}
        <h1 className="gradient-text">
          Let's Play Tic-Tac-Toe
        </h1>
        <p>
        Tic-Tac-Toe is a long beloved classic pen and paper or board game for two players. 
        Variations of Tic Tac Toe have been played since the Roman Empire and 3 in a row 
        games can be traced all the way back to ancient Egypt!
        </p>
      </div>
      <div className="header-image">
        <img src={logo} alt="ai"/>
      </div>        
    </div>
  )
}

export default Header