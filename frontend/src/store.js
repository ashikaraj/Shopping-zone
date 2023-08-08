import { configureStore } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, newProductReducer , productReducer, productDetailsReducer,newReviewReducer,productReviewsReducer,reviewReducer} from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer}  from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer ,  myOrdersReducer ,orderDetailsReducer, allOrdersReducer,orderReducer } from './reducers/orderReducers'
import { wishlistReducer } from './reducers/wishlistReducers';
 
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
      product :productReducer,
      productReviews:productReviewsReducer,
      review:reviewReducer,
      auth: authReducer,
      user:userReducer,
      forgotPassword:forgotPasswordReducer,
      allUsers:allUsersReducer,
      userDetails: userDetailsReducer,
      cart : cartReducer,
      newOrder:newOrderReducer,
      myOrders: myOrdersReducer,
      orderDetails :orderDetailsReducer, 
      allOrders:allOrdersReducer ,
      order:orderReducer,
      newReview: newReviewReducer,
      wishlist: wishlistReducer
    },

  
    
    middleware: [thunk],
    preloadedState: initialState,
    devTools: composeWithDevTools()
  });
  
export default  store;