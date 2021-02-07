import { createStore, combineReducers } from "redux";
import { image, quote, font } from "./reducers";

const reducers = {
  image,
  quote,
  font
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
