import React from 'react';

const Child = (props) => {
  const data = 'Hello from Child!';
  const sendData = () => {
    props.onChildData(data);
  }
  return (
    <button onClick={sendData}>
      Send Data to Parent
    </button>
  );
};

export default Child;
