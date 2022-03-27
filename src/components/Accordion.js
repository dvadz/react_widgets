import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderItems = items.map((item, index) => {
    return (
      <div key={item.title}>
        <div className='title active'>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className='ui styled accordion'>{renderItems}</div>;
};

export default Accordion;
