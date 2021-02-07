import React, { useState } from "react";
import IconBtn from "./sub-components/IconBtn";
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
      <IconBtn
        classes="fresh-content"
        iconUrl="/icons/sync.svg"
        clickHandler={()=>{"Clicked"}}
         />

      <p>{inputValue}</p>

      <p className="quote-setter">
      <input type="text"
        className="gen-text"
        value={inputValue}
        onChange={trackInput}
         />
      </p>
      <IconBtn
        classes="preview-content"
        iconUrl="/icons/preview.svg"
        clickHandler={()=>{onQuoteConfirmed(inputValue)}}
         />
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
