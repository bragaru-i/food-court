import React from 'react';

const SVG = ({
  name,
  style = {},
  fill = 'white',
  width = '100%',
  viewBox = '0 0 192 192',
}) => (
  <svg
    width={width}
    className={`svg-icon icon-${name}`}
    style={style}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M4.92886 7.05027L3.51465 8.46449L11.9999 16.9498L20.4852 8.46449L19.071 7.05027L11.9999 14.1213L4.92886 7.05027Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
