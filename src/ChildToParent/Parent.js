import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('');

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <p>Message from Child: {message}</p>
      <Child onChildData={handleChildData} />
    </div>
  );
};

export default Parent;
