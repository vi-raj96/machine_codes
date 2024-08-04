import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div onClick={toggleAccordion}>
          <h3>{title}</h3>
        </div>
        {isOpen && <div>{content}</div>}
      </div>
    );
  }

export default Accordion;
