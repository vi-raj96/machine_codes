import React, { useState } from 'react';

function OTPGenerator() {
  const [otp, setOTP] = useState('');

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOTP(newOTP);
  };

  return (
    <div>
      <h2>OTP Generator</h2>
      <button onClick={generateOTP}>Generate OTP</button>
      {otp && <p>Generated OTP: {otp}</p>}
    </div>
  );
}

export default OTPGenerator;
