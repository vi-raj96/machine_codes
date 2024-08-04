import React, { useState } from 'react';
import Accordion from './Accordion';

const mainAccordion = () => {
  return (
    <div>
        <Accordion title="Section 1" content="Content for section 1" />
        <Accordion title="Section 2" content="Content for section 2" />
        <Accordion title="Section 3" content="Content for section 3" />
    </div>
  );
};

export default mainAccordion;
