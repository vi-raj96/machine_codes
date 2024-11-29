import React, { useState } from 'react';  //Using inline CSS

const Theme = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div
      className={isDarkMode ? 'dark' : 'light'}
      style={{
        backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
        color: isDarkMode ? '#f5f5f5' : '#333',
        height: '100vh',
      }}
    >
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};

export default Theme;






import React, { useState } from 'react'; //Using external CSS
import './Theme.css'

const Theme = () => {

    const [isDarkMode,setDarkMode] = useState(false);

    const theme = isDarkMode ? 'dark' : 'light';

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    }

  return (
    <div className={`${theme}`}>
        <h2> Theme switcher </h2>
        <button onClick={toggleTheme}>{isDarkMode ? 'Switch to ligth theme' : 'Switch to Dark theme'}</button> 
    </div>
  );
}

export default Theme;
