import React, { useState } from "react"; //Without CSS

const starRating = () => {
  const [star, setStar] = useState(0);

  const handleStar = (index) => {
    setStar(index);
  };

  return (
    <>
      <h1>start rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index} onClick={() => handleStar(index)}>
            *
          </span>
        ))}
      </div>
      <p>{star} out of 5 stars</p>
    </>
  );
};

export default starRating;










import React, { useState } from "react";  // Using extrenal css

const starRating = () => {
  const [star, setStar] = useState(0);

  const handleStar = (index) => {
    setStar(index);
  };

  return (
    <>
      <h1>start rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index} onClick={() => handleStar(index)}>
            {" "}
            *
          </span>
        ))}
      </div>
      <p>{star} out of 5 stars</p>
    </>
  );
};

export default starRating;

















import React, { useState } from 'react';  // Using external css
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
