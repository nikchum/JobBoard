import React from 'react';
import { nanoid } from 'nanoid';
import { AdditionaItem } from 'components/AdditionaItem';
import { Title } from 'components/Title';

export const Additionalnfo = ({ employment, benefits }) => {
  return (
    <section className="mt-[63px] ">
      <Title text="Additional info" />
      <p className="mt-[15px]  font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:font-sans">
        Employment type
      </p>
      <ul className="flex gap-2 mt-[10px]">
        {employment &&
          employment.map(item => <AdditionaItem key={nanoid()} item={item} />)}
      </ul>
      <p className="mt-[22px]  font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:font-sans">
        Benefits
      </p>
      <ul className="flex gap-2 mt-[10px]">
        {benefits &&
          benefits.map(item => (
            <AdditionaItem key={nanoid()} item={item} benefits />
          ))}
      </ul>
    </section>
  );
};
