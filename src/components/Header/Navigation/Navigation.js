import React, { useEffect, Fragment } from 'react';

import './Navigation.css';

const Navigation = () => {
  useEffect(() => {
    let nav = document.getElementById('nav-bar');
    let about = document.getElementById('about');
    const sticky = about.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
        if (window.pageYOffset === about.offsetTop) {
          console.log('matches');
        }
      } else {
        nav.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <Fragment>
      <nav id="nav-bar" className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <span>Home</span>
          </li>
          <li className="navbar__item active">
            <span>About</span>
          </li>
          <li className="navbar__item">
            <span>Chef</span>
          </li>
          <li className="navbar__item">
            <span>Book a Table</span>
          </li>

          <li className="navbar__item">
            <span>Menu</span>
          </li>
          <li className="navbar__item">
            <span>Events</span>
          </li>
          <li className="navbar__item">
            <span>Food BLOG</span>{' '}
          </li>
          <li className="navbar__item">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
