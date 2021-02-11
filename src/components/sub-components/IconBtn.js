import React from "react";

function IconBtn({clickHandler, iconUrl, classes}){

  return (
    <button className={`iconBtn ${classes}`}
      onClick={clickHandler}
      >
      <img src={iconUrl} width="15px" height="15px" />
    </button>
  )
}

export default IconBtn;
