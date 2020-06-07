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
      d="M12 21C8.38661 17.7733 2 13.7597 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.74441 12 5C13.09 3.74441 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 13.751 15.6214 17.7907 12 21Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
