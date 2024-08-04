import React, { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateName();
    validateEmail();

    if (!nameError && !emailError) {
      console.log('Submitted:', name, email);
      // Perform additional form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={validateName}
        />
        {nameError && <span>{nameError}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <span>{emailError}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
