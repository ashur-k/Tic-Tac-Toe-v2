import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import PlayInstruction from '../../components/PlayInstructions/PlayInstructions';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import './Home.css';

const Board = () => {
  return (
    <div>
        <Header />
        <SocialMedia />
        <PlayInstruction />
        <Footer />
    </div>
  )
}

export default Board