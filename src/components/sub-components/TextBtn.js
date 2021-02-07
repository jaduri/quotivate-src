import React from "react";

function TextBtn({clickHandler, text, iconUrl, classes}){

  return (
    <button className={classes}
      onClick={clickHandler}
      >
      <span>{text}</span>
      <img src={iconUrl} width="15px" height="15px" />
    </button>
  )
}

export default TextBtn;
