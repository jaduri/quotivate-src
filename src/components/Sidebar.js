import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFont } from "../actions.js";

function Sidebar({ size, color, onFontChange }){
  const [ fontSize, setFontSize ] = useState(size);
  const [fontColor, setFontColor ] = useState(color);

  const changeColor = e => {
    const val = e.target.value;
    setFontColor(val);
    const font = {
      size: fontSize,
      color: val
    }
    return onFontChange(font);
  }

  const changeSize = e => {
    const val = e.target.value;
    setFontSize(val);
    const font = {
      size: val,
      color: fontColor
    }
    return onFontChange(font);
  }

  return (
    <div className="sidebar card">
      <h2 className="side-heading">Text settings</h2>
      <p className="setting">
        <label>Font size</label>
        <select
          defaultValue="32"
          onChange={changeSize}>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
          <option value={128}>128</option>
        </select>
      </p>
      <p className="setting">
        <label>Font colour</label>
        <input type="color" onChange={changeColor}/>
      </p>
      <h2 className="side-heading">Image Settings</h2>

    </div>
  );
}

const mapStateToProps = state => ({
  size: state.font.size,
  color: state.font.color
});

const mapDispatchToProps = dispatch => ({
  onFontChange: fontStyle => dispatch(updateFont(fontStyle))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
