import React, { useState, useEffect } from 'react';
import slides from "./CarouselData.json"
import Carousel from './Carousel';
import './MainCarousel.css';

const MainCarousel = () => {
  return (
    <div className='mainApp'>
      <Carousel data = {slides}/>
    </div>
  );
};

export default MainCarousel;