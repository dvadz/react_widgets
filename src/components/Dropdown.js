import React, { useState } from "react";

const Dropdown = ({ options, selectedColor, onSelectChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (selectedColor === option) return null;

    return (
      <div
        key={option.value}
        className='item'
        onClick={() => {
          onSelectChange(option);
        }}>
        {option.label}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}>
          <i className='dropdown icon'></i>
          <div className='text'>{selectedColor.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
