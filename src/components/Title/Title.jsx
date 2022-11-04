import React from 'react';

export const Title = ({ text = '' }) => {
  return (
    <h2 className="font-bold text-xl tracking-widest text-primary-text">
      {text}
      <span className="block w-[100%] h-[1px] bg-secondary-text mt-3"></span>
    </h2>
  );
};
