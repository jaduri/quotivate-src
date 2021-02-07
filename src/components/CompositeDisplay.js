import React from "react";
import { connect } from "react-redux";

function CompositeDisplay({ quote, image, font }){

  const fontStyle = {
    fontSize: `${font.size}px`,
    color: `${font.color}`,
    fontStyle: `bold`
  }

  return (
    <div className="large-container card">
      <div
        className="display-area"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat"
        }}
        >
        <p className="quote-area"
          style={fontStyle} >{quote}</p>
      </div>
      <p className="composite-actions">
        <button className="generate long-btn">
          <span>Generate</span>
          <img src="/icons/create.svg" width="15px" height="15px" />
        </button>
        <button className="download long-btn">
          <span>Download</span>
          <img src="/icons/download.svg" width="15px" height="15px" />
        </button>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  quote: state.quote,
  image: state.image,
  font: state.font
})

export default connect(mapStateToProps)(CompositeDisplay);
