import React from 'react';
import  Child from './Child';

function Parent() {
  const name = 'John Doe';
  const age = 30;

  return (
    <div>
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent;
