import axios from 'axios';
import {
    CONVERT_MONEY,
    CONVERT_MONEY_SUCCESS,
    CONVERT_MONEY_FAILED,
    UPDATE_ELEMENT_TO,
    UPDATE_ELEMENT_FROM
  } from './types';


  export const updateElementTo = (text) => {
    return {
      type: UPDATE_ELEMENT_TO,
      payload: text
    };
  };
  export const updateElementFrom = (text) => {
    return {
      type: UPDATE_ELEMENT_FROM,
      payload: text
    };
  };
  export const convertMoney = (from, to) => {
    return (dispatch) => {
      dispatch({ type: CONVERT_MONEY });
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${from}/?convert=${to}`)
      .then(response => {
        console.log('response', response);
        dispatch({ type: CONVERT_MONEY_SUCCESS, payload: response.data[0] });
      })
      .catch(error => {
        dispatch({ type: CONVERT_MONEY_FAILED, payload: error });
      });
    };
  };
