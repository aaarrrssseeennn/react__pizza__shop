import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import PizzsReducers from "./reducers/pizzsReducers";

const reducers = combineReducers({
    pizzsPage: PizzsReducers,
})


const store = createStore(reducers, applyMiddleware(thunk)) 

window.store = store

export default store