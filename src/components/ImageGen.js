import React, { useRef, useState } from "react";
import TextBtn from "./sub-components/TextBtn";
import IconBtn from "./sub-components/IconBtn";
import { connect } from "react-redux";
import { updateImage } from "../actions";

function ImageGen({image, onImageConfirmed}){
  const file = useRef(null);
  const [ imageUrl, setImageUrl ] = useState("/images/sungrass.jpg");

  const uploadFile = () => {
    return file.current.click();
  }

  const readFile = async () => {
    const reader = new FileReader();
    (file.current.files[0] !== undefined) && (
      reader.readAsDataURL(file.current.files[0])
    )
    reader.onload = function(url){
    return setImageUrl(url.target.result)
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
        <TextBtn
          text="Upload"
          classes="image-upload-btn long-btn"
          iconUrl="/icons/upload.svg"
          clickHandler={uploadFile}
         />
         <IconBtn
           classes="preview-content"
           iconUrl="/icons/preview.svg"
           clickHandler={()=>{onImageConfirmed(imageUrl)}}
          />
    </div>
  );
}

const mapStateToProps = state => ({
  image: state.image
})

const mapDispatchToProps = dispatch => ({
  onImageConfirmed: image => dispatch(updateImage(image))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGen);
