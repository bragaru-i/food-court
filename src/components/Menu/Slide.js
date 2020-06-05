import React from 'react';

import sliderImg from '../../img/food-cards/assorted-salads.jpg';

import './Slide.css';

const Slide = ({ img, name }) => {
  return (
    <div className="slider">
      <img src={img === undefined ? sliderImg : img} alt="Slider"></img>
      <h3> {name}</h3>
    </div>
  );
};

export default Slide;
