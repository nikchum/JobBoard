import React from 'react';
import { ReactComponent as Arrow } from '../../img/arrow.svg';

const primaryStyle = 'bg-primary-btn text-[#FFFFFF] px-[30px] ';
const secondaryStyle = 'bg-secondary-btn text-primary-btn px-[24px] ';

export const Button = ({ text = '', back = false }) => {
  return (
    <button
      className={`hover:opacity-[0.8] focus:opacity-[0.8] flex items-center transition-opacity justify-center font-semibold text-s rounded-lg h-[50px] ${
        back ? secondaryStyle : primaryStyle
      }`}
      type="button"
    >
      {back && <Arrow className="mr-[19px]" />}
      {text}
    </button>
  );
};
