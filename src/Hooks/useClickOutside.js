import { useEffect } from 'react';

const useClickOutside = (ref, open, callback, callback2) => {
  const handleClick = (e) => {
    if (open && ref.current && !ref.current.contains(e.target)) {
      callback();
    } else {
      callback2();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
