import { configureStore } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, newProductReducer , productDetailsReducer,newReviewReducer} from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer}  from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer ,  myOrdersReducer ,orderDetailsReducer, } from './reducers/orderReducers'
 
 
  // allOrdersReducer,
  //  orderReducer
 

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
      ,
    shippingInfo: localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {}
  },
};



const store = configureStore({
    reducer: {
      products: productsReducer,
      productDetails: productDetailsReducer,
      newProduct: newProductReducer,
      auth: authReducer,
      user:userReducer,
      forgotPassword:forgotPasswordReducer,
      cart : cartReducer,
      newOrder:newOrderReducer,
      myOrders: myOrdersReducer,
     orderDetails :orderDetailsReducer, 
     newReview: newReviewReducer
    },

  
    
    middleware: [thunk],
    preloadedState: initialState,
    devTools: composeWithDevTools()
  });
  
export default  store;