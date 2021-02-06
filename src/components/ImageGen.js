import React, { useRef, useState } from "react";

function ImageGen(){
  const file = useRef(null);
  const [ imageUrl, setImageUrl ] = useState("/images/sungrass.jpg");

  const uploadFile = () => {
    return file.current.click();
  }

  const readFile = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(file.current.files[0]);
    reader.onload = function(url){
      return setImageUrl(url.target.result);
    }
  }

  return (
    <div
    className="small-container image-container card"
    style={{
      backgroundImage: `url("${imageUrl}")`,
      backgroundSize: 'cover'
    }}
    >
      <p className="image-getter">
      <input type="text" className="gen-text" />
      <button className="fresh-content" >
        <img src="/icons/sync.svg" width="15px" height="15px" />
      </button>
      </p>
      <input ref={file}
        type="file"
        onChange={readFile}
        style={{visibility: "hidden"}} />
      <button className="image-upload-btn long-btn"
        onClick={uploadFile}>
        <span>Upload</span>
        <img src="/icons/upload.svg" width="15px" height="15px" />
      </button>
    </div>
  );
}

export default ImageGen;
