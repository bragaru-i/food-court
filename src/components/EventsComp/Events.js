import React, { Fragment } from 'react';
import partyJPG from '../../img/events/party.jpg';
import weddingJPG from '../../img/events/wedding.jpg';
import './Events.css';

const Events = () => {
  return (
    <Fragment>
      <div className="events__class">
        <p>YOUR PARTY HOST</p>
      </div>
      <div className="events row">
        <div className=" col-1-of-2  events__first">
          <img src={partyJPG} alt="Book A PARTY"></img>
          <p>Corporate Party Events</p>
        </div>
        <div className="col-1-of-2 events__first">
          <img src={weddingJPG} alt="Book a WEDDING"></img>
          <p>Weddings</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
