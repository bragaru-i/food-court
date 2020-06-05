import React, { useState, useEffect } from 'react';

import './Menu.css';

import Slide from './Slide';
import img1 from '../../img/food-cards/assorted-salads.jpg';
import img2 from '../../img/food-cards/avocado-cooked.jpg';
import img3 from '../../img/food-cards/food-dinner.jpg';
import img4 from '../../img/food-cards/blur-breakfast.jpg';
import img5 from '../../img/food-cards/chocolate.jpg';
import img6 from '../../img/food-cards/dessert.jpg';
import img7 from '../../img/food-cards/pasta.jpg';
import img8 from '../../img/food-cards/shrimps-salad.jpg';
import img9 from '../../img/food-cards/plate.jpg';

const Menu = ({ items = [] }) => {
  const [current, setCurrent] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  // const carroussel = items.map((item, i) => (
  //   <div
  //     className={
  //       i + 1 === current
  //         ? 'caroussel-item-next'
  //         : i === current
  //         ? 'caroussel-item-active'
  //         : i - 1 === current
  //         ? 'caroussel-item-prev'
  //         : 'caroussel-item'
  //     }
  //     key={i}
  //   >
  //     {item}
  //   </div>
  // ));
  useEffect(() => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 5000);

    return () => clearTimeout(id);
  }, [current]);

  const onClick = (e) => {
    let tag = e.currentTarget.dataset.index;
    setCurrent(tag);
  };

  return (
    <div className="menu row">
      <h3>Our Menu</h3>
      <div className="menu__caroussel">
        <div className="menu__image">
          <Slide img={images[current]} name="Food Name" description="Description" />
        </div>
        <div className="menu__controller">
          {images.map((item, i) => (
            <div
              onClick={onClick}
              key={i}
              data-index={i}
              className={
                i === current
                  ? 'menu-controller__image image--active'
                  : i + 1 === current
                  ? 'menu-controller__image image--next'
                  : i - 1 === current
                  ? 'menu-controller__image image--prev'
                  : 'menu-controller__image'
              }
            >
              <img src={item} alt="Menu Foods"></img>{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
