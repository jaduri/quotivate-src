import React, { useRef, useState } from "react";
import { connect } from "react-redux";

function CompositeDisplay({ quote, image, font }){
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);
  const imageContainer = useRef(null);
  const quoteContainer = useRef(null);
  const pos = useRef({x: 0, y: 0});
  const cursor = useRef({x: 0, y: 0})

  const fontStyle = {
    fontSize: `${font.size}px`,
    color: `${font.color}`,
    fontStyle: `bold`,
    top: `${y}px`,
    left: `${x}px`,
  }

  const drag = (e) => {

    const imageEl = imageContainer.current.getBoundingClientRect();
    const quoteEl = quoteContainer.current.getBoundingClientRect();

    const top = quoteEl.top - imageEl.top;
    const left = quoteEl.left - imageEl.left;

    pos.current = {
      x : left,
      y : top
    }
    cursor.current = {
      x : e.clientX,
      y : e.clientY
    }
  }

  const drop = (e) => {
    let topDiff = e.clientY - cursor.current.y;
    let leftDiff = e.clientX - cursor.current.x;

    setY(pos.current.y + topDiff);
    setX(pos.current.x + leftDiff);
  }

  return (
    <div className="large-container card">
      <div
        className="display-area"
        >
        <img
          className="compImg"
          src={image}
          ref={imageContainer}
          alt="image preview"  />
        <p className="quote-area"
          style={fontStyle}
          ref={quoteContainer}
          draggable="true"
          onDragStart={drag}
          onDragEnd={drop} >
          {quote}</p>
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
