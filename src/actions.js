export const UPDATE_QUOTE = "UPDATE_QUOTE";

export const UPDATE_IMAGE = "UPDATE_IMAGE";

export const UPDATE_FONT = "UPDATE_FONT";

export const updateQuote = (quote) => ({
  type: UPDATE_QUOTE,
  payload: { quote }
});

export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: { image }
});

export const updateFont = (font) => ({
  type: UPDATE_FONT,
  payload: { font }
})
