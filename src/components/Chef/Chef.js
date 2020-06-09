import React from 'react';

import './Chef.css';
import chef1 from '../../img/chef-1.jpg';
import Icon from '../../Icons';

// TODO: CAROUSSEL

const Chef = () => {
  return (
    <div className="chef row">
      <div className="chef__title">
        <h2>Our Chef Team</h2>
      </div>
      <div className="line-break--orange"></div>
      <div className="chef__content">
        <div className="chef__content__photo">
          <div className="chef__image">
            <img src={chef1} alt="Chef" />
          </div>
        </div>
        <div className="chef__content__text">
          <h3>Sous Chef</h3>
          <p style={{ textAlign: 'justify' }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est,
          </p>
        </div>
      </div>
      <div className="chef__actions">
        <Icon name="checkbox-active" width="14px" />
        <Icon name="checkbox" width="14px" />
        <Icon name="checkbox" width="14px" />
        <Icon name="checkbox" width="14px" />
      </div>
    </div>
  );
};

export default Chef;
