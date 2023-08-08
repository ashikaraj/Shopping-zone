// wishlistReducers.js
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
  
  export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch (action.type) {
      case ADD_TO_WISHLIST_REQUEST:
      case REMOVE_FROM_WISHLIST_REQUEST:
      case GET_USER_WISHLIST_REQUEST:
        return { ...state, loading: true };
  
      case ADD_TO_WISHLIST_SUCCESS:
        case REMOVE_FROM_WISHLIST_SUCCESS:
        return {
          loading: false,
          success: true,
          wishlistItems: action.payload,
        };
      
     
      case ADD_TO_WISHLIST_FAIL:
      case REMOVE_FROM_WISHLIST_FAIL:
      case GET_USER_WISHLIST_FAIL:
        return { ...state, loading: false, error: action.payload, wishlistItems: [] };
  
      case GET_USER_WISHLIST_SUCCESS:
        return {
          loading: false,
          wishlistItems: action.payload,
        };
  
      default:
        return state;
    }
  };
  