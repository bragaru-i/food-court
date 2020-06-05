import React from 'react';

import './MenuCard.css';
import cardImg from '../../../img/food-cards/card.png';

let inTitle = 'Mega FOOD';
let inDescription =
  ' Sous Chef At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';
const MenuCard = ({ img, title, description }) => {
  console.log(title);
  if (title === undefined) title = inTitle;
  if (img === undefined) img = cardImg;
  if (description === undefined) description = inDescription;
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="card" />
      </div>

      <div className="card__body">
        <div className="card__body-title">
          <h5>{title}</h5>
        </div>
        <div className="card__body-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
