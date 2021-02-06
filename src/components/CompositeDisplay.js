import React from "react";
import { connect } from "react-redux";

function CompositeDisplay({ quote }){

  return (
    <div className="large-container card">
      <div>
        <p>{quote}</p>
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
  quote: state.quote
})

export default connect(mapStateToProps)(CompositeDisplay);
