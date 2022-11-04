import React from 'react';

export const Wrapper = ({ children, bgColor = '', padding }) => {
  return (
    <div className={`sm:container mx-auto ${padding} ${bgColor} min-h-screen `}>
      {children}
    </div>
  );
};
