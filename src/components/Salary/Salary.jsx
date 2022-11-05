import React from 'react';

export const Salary = ({ salary, reverse = false }) => {
  const normalizeSalary = salary =>
    salary
      .split('-')
      .map(item => Number.parseFloat(item) + ' 000')
      .join(' - ');
  return (
    <div className={`${reverse && 'flex flex-col-reverse xl:w-max'}`}>
      <p className="font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d]">
        Brutto, per year
      </p>
      <p className="mt-1 font-bold text-lg tracking-tighter text-primary-text">
        &euro; {normalizeSalary(salary)}
      </p>
    </div>
  );
};
