import axios from 'axios';
import {
    GET_ALL_ELEMENTS,
    GET_ALL_ELEMENTS_SUCCESS,
    GET_ALL_ELEMENTS_FAILED,
    GET_ELEMENT_DETAIL,
    GET_ELEMENT_DETAIL_SUCCESS,
    GET_ELEMENT_DETAIL_FAILED

  } from './types';

  // get all elements
  export const getAllElements = () => {
    return (dispatch) => {
      dispatch({ type: GET_ALL_ELEMENTS });
      axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        dispatch({ type: GET_ALL_ELEMENTS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: GET_ALL_ELEMENTS_FAILED, payload: error });
      });
    };
  };
  //get element details
export const getElementDetail = (id) => {
    return (dispatch) => {
      dispatch({ type: GET_ELEMENT_DETAIL });
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${id}`)
      .then(response => {
        console.log('response', response.data[0])
        dispatch({ type: GET_ELEMENT_DETAIL_SUCCESS, payload: response.data[0] });
      })
      .catch(error => {
        dispatch({ type: GET_ELEMENT_DETAIL_FAILED, payload: error });
      });
    };
  };
