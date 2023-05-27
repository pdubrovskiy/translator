import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import translatorReducer from "./translate-reducer";

let reducer = combineReducers({
    translator: translatorReducer
});


let store = configureStore({
    reducer, 
    middleware: [thunk]
});

export default store;