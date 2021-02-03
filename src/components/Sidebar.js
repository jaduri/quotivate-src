import React from "react";

function Sidebar(){

  return (
    <div className="sidebar card">
      <h2 className="side-heading">Quote Settings</h2>
      <p className="setting">
        <label>Font size</label>
        <input type="range" />
      </p>
      <p className="setting">
        <label>Font colour</label>
        <input type="color" />
      </p>
      <p className="setting">
        <label>Font style</label>
        <select></select>
      </p>
      <h2 className="side-heading">Image Settings</h2>

    </div>
  );
}

export default Sidebar;
