export const UPDATE_QUOTE = "UPDATE_QUOTE";

export const UPDATE_IMAGE = "UPDATE_IMAGE";

export const updateQuote = (quote) => ({
  type: UPDATE_QUOTE,
  payload: { quote }
});

export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: { image }
});
