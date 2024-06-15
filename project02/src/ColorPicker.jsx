import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ADD8E6");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return (
    <div className="colorPickerContainer">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor :color}}>
        <p>Selected Color: <h1>{color}</h1></p>
      </div>
      <label>Select a color</label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
  );
}

export default ColorPicker;
