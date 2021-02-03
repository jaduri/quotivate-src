import React from "react";

function ImageGen(){

  return (
    <div
    className="small-container image-container card"
    backgroundImage="/images/sungrass.jpg"
    >
      <p className="image-getter">
      <input type="text" className="gen-text" />
      <button className="fresh-content" >
        <img src="/icons/sync.svg" width="15px" height="15px" />
      </button>
      </p>

      <button className="image-upload-btn">
        <span>Upload</span>
        <img src="/icons/upload.svg" width="15px" height="15px" />
      </button>
    </div>
  );
}

export default ImageGen;
