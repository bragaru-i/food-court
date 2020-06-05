import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 512 512',
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
    <path d="M3 8V6H21V8H3Z" fill={fill} />
    <path d="M3 13H21V11H3V13Z" fill={fill} />
    <path d="M12 18H21V16H12V18Z" fill={fill} />
  </svg>
);

export default SVG;
