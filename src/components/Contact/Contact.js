import React, { Fragment } from 'react';

import './Contact.css';
import Icon from '../../Icons';

const Contact = () => {
  return (
    <Fragment>
      <div className="contact ">
        <div className="row">
          <h2>Contact us</h2>
          <div className="line-break--orange"></div>
          <h4>We care about your feedback</h4>
          <form className="contact__form">
            <div className="contact__inputs">
              <label>
                <input type="text" placeholder="Name"></input>
              </label>
              <label>
                <input type="email" placeholder="Email"></input>
              </label>
              <input type="phone" placeholder="Phone"></input>
            </div>
            <div className="contact__textarea">
              <textarea placeholder="Leave a message for us"></textarea>
            </div>
            <div className="contact__footer">
              <div className="col-1-of-2">
                <div className="contact__footer-block">
                  <Icon name="pin" width="2rem" fill="var( --color-primary)"></Icon>{' '}
                  Canada Ottawa Railway Blvd 3
                </div>
                <div className="contact__footer-block">
                  <Icon name="phone" width="2rem" fill="var( --color-primary)"></Icon> +
                  12 123 456 789
                </div>{' '}
                <div className="contact__footer-block">
                  <Icon name="mail" width="2rem" fill="var( --color-primary)" />
                  pr@foodcourt.com
                </div>
              </div>
              <div className="col-1-of-2">
                <input
                  style={{ margin: '0.5rem' }}
                  className="btn btn__cta--main"
                  type="submit"
                  placeholder="Send"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="contact__map"></div>
      </div>
    </Fragment>
  );
};

export default Contact;
