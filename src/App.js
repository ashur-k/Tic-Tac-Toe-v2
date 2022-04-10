import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Twoplayers from './containers/Twoplayers/Twoplayers';
import AiGameMode from './containers/Ai-Game-Mode/AiGameMode';

import './App.css'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='gradient-bg'>
          <Navbar />
        </div>
        <Container>
          <Routes>
              <Route path='/' element={ <Home />} exact/>
              <Route path='/two-players-game' element={<Twoplayers />} />
              <Route path='/ai-mode' element={<AiGameMode />} />
              <Route path='/about-me' element={<Footer />} />
              <Route path='/contact-me' element={<Footer />} />

          </Routes>
        </Container>
      </div>
    </Router>
  )
}

export default App