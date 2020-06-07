import React, { useEffect, Fragment } from 'react';

import './Navigation.css';

import scrollToComponent from 'react-scroll-to-component';

const Navigation = () => {
  useEffect(() => {
    let nav = document.getElementById('nav-bar');
    let header = document.getElementById('header');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky + 100) {
        nav.classList.add('sticky');
        if (window.pageYOffset === header.offsetTop) {
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
            <span onClick={() => scrollToComponent(document.getElementById('header'))}>
              Home
            </span>
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('about'))}>
              About
            </span>
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('chef'))}>
              Chef
            </span>
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('book'))}>
              Book a Table
            </span>
          </li>

          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('menu'))}>
              Menu
            </span>
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('events'))}>
              Events
            </span>
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('blog'))}>
              Food BLOG
            </span>{' '}
          </li>
          <li className="navbar__item">
            <span onClick={() => scrollToComponent(document.getElementById('contact'))}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
