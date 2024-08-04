import React, { useState } from 'react';
import './AutoComplete.css'
import Countries from './Countries';


const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = Countries.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (value) => {
    setInputValue(value);
    setFilteredOptions([]);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={handleInputChange}
      />

      {filteredOptions.length > 0 && (
        <ul className="autocomplete-options">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
