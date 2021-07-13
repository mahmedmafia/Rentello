import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from "./auth";
import { carReducer } from "./car.js";
const rootReducer = combineReducers({ authState: authReducer, carsState: carReducer });
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type == "INCREMENT") {
//     return {counter: state.counter + 1 };
//   }
//   if (action.type == "DECREMENT") {
//     return {  counter: state.counter - 1 };
//   }
//   if (action.type == "INCREASE") {
//     return { counter: state.counter + action.amount };
//   }
//   if (action.type == "TOGGLE") {
//     return { showCounter: !state.showCounter };
//   }
//   return state;
// };
