import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (selected === option) return null;

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
        <label className='label'>{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
