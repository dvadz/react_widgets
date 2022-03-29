import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedColor, onSelectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
  }, []);

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
    <div className='ui form' ref={ref}>
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
