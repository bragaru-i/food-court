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
      d="M19.0711 16.9497L20.4854 15.5355L12.0001 7.05023L3.51479 15.5355L4.929 16.9497L12.0001 9.87866L19.0711 16.9497Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
