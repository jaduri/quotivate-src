import React, { useState } from "react";
import { connect } from "react-redux";
import { updateQuote } from "../actions";

function QuoteGen({ quote, onQuoteConfirmed }){
  const [ inputValue, setInputValue ] = useState("Quote of the day");

  const trackInput = (e) => {
    const val = e.target.value;
    return setInputValue(val);
  }

  return (
    <div className="small-container quote-container card">
      <button className="fresh-content">
        <img src="/icons/sync.svg" width="15px" height="15px" />
      </button>

      <p>{inputValue}</p>

      <p className="quote-setter">
      <input type="text"
        className="gen-text"
        value={inputValue}
        onChange={trackInput}
         />
      <button className="add-quote"
        onClick={()=>{onQuoteConfirmed(inputValue)}}
        >
        <img src="/icons/add.svg" width="15px" height="15px" />
      </button>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  quote: state.quote
});

const mapDispatchToProps = dispatch => ({
  onQuoteConfirmed: quote => dispatch(updateQuote(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGen);
