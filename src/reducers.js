import { UPDATE_IMAGE, UPDATE_QUOTE } from './actions';

export const quote = (state = "", action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_QUOTE:{
      const { quote } = payload;
      return quote;
    }
      break;
    default:
      return state;
  }
}

export const image = (state = "", action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_IMAGE:{
      return state;
    }
      break;
    default:
      return state;
  }
}
