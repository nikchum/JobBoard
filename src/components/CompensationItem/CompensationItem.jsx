import React from 'react';

export const CompensationItem = ({ item }) => {
  return (
    <li className="font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:font-sans xl:ml-[-20px]">
      <span className="mr-4 xl:mr-3 inline-flex items-center w-[9px] h-[9px] bg-[#38415d] opacity-[0.8]"></span>
      {item}
    </li>
  );
};
