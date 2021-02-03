import React from "react";

function QuoteGen(){

  return (
    <div className="small-container quote-container card">
      <button className="fresh-content">
        <img src="/icons/sync.svg" width="15px" height="15px" />
      </button>

      <p className="quote-setter">
      <input type="text" className="gen-text" />
      <button className="add-quote" >
        <img src="/icons/add.svg" width="15px" height="15px" />
      </button>
      </p>
    </div>
  );
}

export default QuoteGen;
