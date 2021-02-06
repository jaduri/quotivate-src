import { createStore, combineReducers } from "redux";
import { image, quote } from "./reducers";

const reducers = {
  image,
  quote
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
