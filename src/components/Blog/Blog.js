import React, { useState } from 'react';

import './Blog.css';
import Icon from '../../Icons';
import Article from './Article/Article';
import articles from './articles';

const Blog = () => {
  let blogArr = [];
  articles.forEach((article) => (blogArr = [...blogArr, <Article {...article} />]));
  const [y, setY] = useState(0);
  const [active, setActive] = useState(0);

  const scrollDown = () => {
    setY(y - 100);

    // stops on reaching the end
    y - 300 === blogArr.length * -100 && setY(y);
  };
  const scrollUp = () => {
    y === 0 ? setY(0) : setY(y + 100);
  };
  return (
    <div className="blog row">
      <h2>Our Blog and Articles</h2>
      <div className="line-break--orange"></div>

      <div className="blog__container">
        <button
          id="scroll-up"
          className="blog__container__btns scroll-up"
          onClick={scrollDown}
        >
          <Icon name="scroll-down" width="1.5rem" fill="f0f0f0" />
        </button>
        <button className="blog__container__btns scroll-down" onClick={scrollUp}>
          <Icon name="scroll-up" width="1.5rem" fill="f0f0f0" />
        </button>
        <div className="col-1-of-2 blog-detailed">
          <img src={articles[active].img} alt={articles[active].title}></img>
          <h4>
            {articles[active].title} by {articles[active].author}
          </h4>
          <p> {articles[active].description}</p>
        </div>
        <div className="col-1-of-2">
          {blogArr.map((item, i) => (
            <div
              onClick={() => setActive(i)}
              key={i}
              className="blog-card"
              style={{ transform: `translateY(${y + 10}%)` }}
            >
              {item}{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
