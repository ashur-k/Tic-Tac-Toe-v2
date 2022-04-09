import axios from 'axios'
import {
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
  HOME_LIST_FAIL,
 } from '../constants/homeConstants';

export const listHome = () => async (dispatch) => {
  try{
    dispatch({ type: HOME_LIST_REQUEST })

    const { data } = await axios.get('/api/header/')

    dispatch({
      type: HOME_LIST_SUCCESS,
      payload: data
    })
    
  }catch(error){
    dispatch({
      type: HOME_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}