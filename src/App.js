import React from 'react';
import './App.css';
import NavBarre from './NavBarre';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import produts from './db';  
import Home from './Home';
import AddProduct from './AddProduct';
import Cart from './Cart'

import { Route, Routes } from 'react-router-dom';

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const incrementQuantity = (productId) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId
});

export const decrementQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId
});

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product
});



function CartReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        const productExists = state.find(item => item.id === action.payload.id);
        if (productExists) {
          return state.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...state, { ...action.payload, quantity: 1 }];
      
      case 'INCREMENT_QUANTITY':
        return state.map(item =>
          item.id === action.payload? { ...item, quantity: item.quantity + 1 }: item
        );
  
      case 'DECREMENT_QUANTITY':
        return state.map(item =>
          item.id === action.payload? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }: item
        );
        case 'REMOVE_FROM_CART':
          return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}

function ProductReducer(state = produts, action) {
  switch (action.type) {

    case 'ADD_PRODUCT':
      return [...state, action.payload]; 

    default:
      return state;
  }
}


const reducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
});

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBarre />

        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/add' element={ <AddProduct />}/>
          <Route path='/cart' element={ <Cart/>}/>
        </Routes>
       
      </div>
    </Provider>
  );
}

export default App;
