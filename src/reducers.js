import { UPDATE_IMAGE, UPDATE_QUOTE, UPDATE_FONT } from './actions';

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
      const { image } = payload;
      return image;
    }
      break;
    default:
      return state;
  }
}

export const font = (state = {size: 32, color: "#ffffff"}, action) =>{
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FONT:{
      const { font } = payload;
      return font;
    }
      break;
    default:
      return state;
  }

}
