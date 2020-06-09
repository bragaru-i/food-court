import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 30 30',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4H20C21.1 4 22 4.90002 22 6V18C22 19.1 21.1 20 20 20H4C2.89999 20 2 19.1 2 18L2.01001 6C2.01001 4.90002 2.89999 4 4 4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
