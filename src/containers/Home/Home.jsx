import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import PlayInstruction from '../../components/PlayInstructions/PlayInstructions';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { listHome } from '../../actions/homeActions'

import './Home.css';

const Board = () => {
    const dispatch = useDispatch()
    const homeList = useSelector(state => state.homeList)
    const {error, loading, home} = homeList


    useEffect (() => {
        dispatch(listHome())

    }, [dispatch])



    return ( 
        <div>
            {loading ? <Loader />
            : error ? <Message variant='danger'>{error}</Message>
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