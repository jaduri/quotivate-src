import React, { useRef, useState } from "react";
import TextBtn from "./sub-components/TextBtn";
import IconBtn from "./sub-components/IconBtn";
import { connect } from "react-redux";
import { updateImage } from "../actions";

function ImageGen({image, onImageConfirmed}){
  const file = useRef(null);
  const [ imageUrl, setImageUrl ] = useState("/images/sunset.jpg");
  const [ query, setQuery ] = useState("sunset");

  const uploadFile = () => {
    return file.current.click();
  }

  const updateInput = (e) => {
    const val = e.target.value;
    return setQuery(val);
  }

  const readFile = async () => {
    const reader = new FileReader();
    if (file.current.files[0]){
      reader.readAsDataURL(file.current.files[0])
    }
    reader.onload = function(url){
    return setImageUrl(url.target.result)
    }
  }

  const getRandomImage = () => {

    fetch(`/api/content/image?query=${query}`)
    .then(res => res.json())
    .then(data =>{
      return setImageUrl(data.regular);
    })
    .catch(err => console.log(err));
  }

  return (
    <div
    className="small-container image-container card"
    style={{
      backgroundImage: `url("${imageUrl}")`,
      backgroundPosition: '50%',
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <p className="image-getter">
      <input type="text"
        className="gen-text"
        value={query}
        onChange={updateInput}/>
      <IconBtn
        classes="fresh-content"
        iconUrl="/icons/sync.svg"
        clickHandler={getRandomImage}
         />
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
