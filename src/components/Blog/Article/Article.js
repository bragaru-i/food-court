import React from 'react';

import './Article.css';

const Article = ({
  img = 'Image',
  title = 'Title',
  description = 'Description',
  author = 'Author Name',
  postedAt = '01-July-2020',
}) => {
  return (
    <div className="article">
      <div className="article__photo">
        <img src={img} alt={title} />
      </div>
      <div className="article__body">
        <h5>{title}</h5>
        <p style={{ fontStyle: 'italic' }}>
          Posted by: {author} at: {postedAt}
        </p>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
};

export default Article;
