import React from 'react';

import './Book.css';
const Book = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sumbit');
  };
  return (
    <div className="book row">
      <form className="book__form" onSubmit={handleSubmit}>
        <h2>Book A Table</h2>
        <div className="line-break--orange"></div>
        <div className="form__column">
          <label>
            <input type="text" placeholder="Name" />
          </label>
          <label>
            <input type="text" placeholder="Last Name" />
          </label>
        </div>
        <div className="form__column">
          <label>
            <input type="text" placeholder="Phone" />
          </label>
          <label>
            <input type="number" placeholder="Guests" />
          </label>
        </div>
        <div className="form__column">
          <label>
            <input type="date" placeholder="Date here" />
          </label>
          <label>
            <input type="time" />
          </label>
        </div>
        <div className="form__column">
          <input
            style={{ margin: '0.5rem' }}
            className="btn btn__cta--main"
            type="submit"
            placeholder="BOOK NOW"
          />
        </div>
      </form>
      <div className="book__photo"> </div>
    </div>
  );
};

export default Book;
