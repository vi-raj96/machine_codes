import React, { useState } from 'react';
import './StarRating.css'

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <div>
      <h2>Star Rating</h2>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={index <= (hoverRating || rating) ? 'star filled' : 'star'}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>{rating} out of 5 stars</p>
    </div>
  );
}

export default StarRating;
