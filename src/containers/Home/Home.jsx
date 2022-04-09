import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PlayInstruction from '../../components/PlayInstructions/PlayInstructions';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import './Home.css';

const Board = () => {

    // Setting array useState hook for loading with backend data 
    const [header, setHeader] = useState([])

    useEffect (() => {

        // asynchroneous function to load data to useState header
        async function fetchProducts(){
            const { data } = await axios.get('http://127.0.0.1:8000/api/header/')
            console.log(data)
            setHeader(data)
        }
        // function call
        fetchProducts()

    }, [])

    return ( 
        <div>
            <Header / >
            <SocialMedia / >
            <PlayInstruction / >
            <Footer / >
        </div>
            
    )
}

export default Board