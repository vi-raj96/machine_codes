import React, { useState } from 'react';
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
