import axios from 'axios';
import {
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
  GET_USER_WISHLIST_REQUEST,
  GET_USER_WISHLIST_SUCCESS,
  GET_USER_WISHLIST_FAIL,
} from '../constants/wishlistConstants';

export const addToWishlist = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST_REQUEST });

    const { data } = await axios.post(`/api/v1/wishlist/add/${productId}`);

    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TO_WISHLIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const removeFromWishlist = (productId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });

    const { data } = await axios.put(`/api/v1/wishlist/remove/${productId}`);

    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_WISHLIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserWishlist = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_WISHLIST_REQUEST });

    const { data } = await axios.get('/api/v1/wishlist');

    dispatch({
        type: GET_USER_WISHLIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_WISHLIST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
