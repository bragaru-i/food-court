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
      d="M12 3C16.92 3 20.91 6.729 20.91 11.332C20.91 13.948 19.619 16.284 17.599 17.811V21L14.558 19.313C13.747 19.541 12.89 19.663 11.999 19.663C7.07903 19.663 3.08904 15.933 3.08904 11.332C3.09004 6.729 7.08003 3 12 3ZM11.062 14.172L13.367 11.778L17.805 14.232L12.94 9.069L10.635 11.464L6.19603 9.009L11.062 14.172Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
