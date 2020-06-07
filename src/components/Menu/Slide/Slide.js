import React from 'react';

import sliderImg from '../../../img/food-cards/assorted-salads.jpg';

import './Slide.css';
import Icon from '../../../Icons';

const Slide = ({ img, name, description }) => {
  return (
    <div className="slider">
      <img src={img === undefined ? sliderImg : img} alt="Slider"></img>

      <div className="slider__text">
        <h3> {name}</h3>
        <p>{description}</p>
        <div className="slider__text__rating">
          <Icon name="heart" width="1.3rem" fill=" #d91e2a"></Icon>
        </div>
      </div>
    </div>
  );
};

export default Slide;
