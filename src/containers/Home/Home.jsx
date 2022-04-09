import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PlayInstruction from '../../components/PlayInstructions/PlayInstructions';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { listHome } from '../../actions/homeActions'

import './Home.css';

const Board = () => {
    const dispatch = useDispatch()
    const homeList = useSelector(state => state.homeList)
    const {error, loading, home} = homeList

    // Setting array useState hook for loading with backend data 
    const [header, setHeader] = useState([])

    useEffect (() => {
        dispatch(listHome())

    }, [dispatch])



    return ( 
        <div>
            {loading ? <h2>loading...</h2>
            : error ? <h3 style={{'color':'white', 'margin':'20px'}}>{error}</h3>
            :
            <div>
                <Header header_data = {home}/ >
                <SocialMedia / >
                <PlayInstruction / >
                <Footer / >
            </div>
        }
                    
                    
                
              
           
        </div>
            
    )
}

export default Board