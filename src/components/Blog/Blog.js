import React, { useState } from 'react';

import './Blog.css';

const Blog = () => {
  let blogArr = [1, 2, 3, 4, 5];
  const [y, setY] = useState(0);
  const scrollDown = () => {
    setY(y + 100);
    console.log(y);
  };
  const scrollUp = () => {
    setY(y - 100);
    console.log(y);
  };
  return (
    <div className="blog row">
      <h2>Our Blog and Articles</h2>
      <div className="blog__container">
        <button className="blog__container__btns scroll-up" onClick={scrollDown}>
          Scroll down
        </button>
        <button className="blog__container__btns scroll-down" onClick={scrollUp}>
          Scroll Up
        </button>
        <div className="col-1-of-2">col 1</div>
        <div className="col-1-of-2">
          {blogArr.map((item, i) => (
            <div key={i} className="blog-card" style={{ transform: `translateY(${y}%)` }}>
              {item}{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
