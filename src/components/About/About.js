import React from 'react';

import './About.css';

import aboutImage from '../../img/about.jpg';
const About = () => {
  return (
    <div className="about row">
      <div className="about__text">
        <h2>Who we are</h2>
        <div className="line-break--orange"></div>
        <p className="h2__subheading--main">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti.
        </p>
        <br />
        <p className="h2__subheading--second">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi.
        </p>
      </div>
      <div className="about__image">
        <img src={aboutImage} alt="About us"></img>
      </div>
    </div>
  );
};

export default About;
