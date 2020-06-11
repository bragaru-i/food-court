import React, { useEffect, Fragment, useState } from 'react';

import './Navigation.css';
import Icon from '../../../Icons';
import scrollToComponent from 'react-scroll-to-component';
import logo from '../../../img/logo.png';

const Navigation = () => {
  const [open, setOpen] = useState(false);
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
        <div className="burger-toggler">
          <div className="navbar__logo"></div>
          <span style={{ paddingLeft: '1.2rem' }}>Food Court</span>
          <span className="button-toggler" onClick={() => setOpen(!open)}>
            <Icon
              className="menu-toggler"
              name="menu-toggler"
              fill="white"
              width="3rem"
            />
          </span>
        </div>
        <ul className={!open ? 'navbar__items' : 'navbar__items open'}>
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
            <span
              style={{ color: 'var(--color-primary)' }}
              onClick={() => scrollToComponent(document.getElementById('book'))}
            >
              <strong> BOOKING </strong>
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
              Blog
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
