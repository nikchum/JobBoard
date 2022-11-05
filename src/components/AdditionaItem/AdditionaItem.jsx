import React from 'react';

const employmentStyle = 'bg-[#E1E6F4] text-[#55699E] border-[#ABB2C8] ';
const benefitsStyle = 'bg-[#FFF8D9] text-[#988B49] border-[#FFCF00] ';

export const AdditionaItem = ({ item, benefits = false }) => {
  return (
    <li>
      <div
        className={`${
          benefits ? benefitsStyle : employmentStyle
        } flex px-3 justify-center items-center font-bold text-sl border tracking-tight rounded-lg h-[50px] xl:px-[70px] `}
      >
        {item}
      </div>
    </li>
  );
};
