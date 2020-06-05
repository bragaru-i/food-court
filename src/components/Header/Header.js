import React, { Fragment } from 'react';

import Navigation from './Navigation/Navigation';
import './Header.css';
import Icon from '../../Icons';
const Header = () => {
  return (
    <Fragment>
      <div style={{ position: 'relative' }} className="row">
        <Navigation />
      </div>
      <div className="line-break"></div>

      <div className="header__hero row">
        <div className="header__openhours">
          <p>Open Mo-Fri: 4PM-6AM Sa-Su: 1PM-8AM</p>
        </div>
        <div className="header__text">
          <div className="header__logo"></div>
          <h1 className="header__heading">
            <span className="header__heading--main">Food Court</span>
            <span className="header__heading--sub">
              Where hospitability meets <strong> taste </strong>
            </span>
          </h1>
          <div className="header__cta">
            <span className="btn btn--header btn__cta--main">Quick Book </span>
            <span className="btn btn--header btn__cta--info">More details</span>
          </div>
          <div className="header__swipe">Scroll down for more info </div>
        </div>
        <div className="header__social">
          <div className="social__icon--big">
            <Icon name="vk" fill="#fff" width="28px" />
          </div>

          <div className="social__icon--big">
            <Icon name="facebook" fill="#fff" width="28px" />
          </div>
          <div className="social__icon--big">
            <Icon name="tweeter" fill="#fff" width="28px" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
