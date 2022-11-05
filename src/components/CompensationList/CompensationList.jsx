import { CompensationItem } from 'components/CompensationItem';
import { nanoid } from 'nanoid';
import React from 'react';

export const CompensationList = ({ compensation }) => {
  return (
    <ul className="mt-1 mb-5 xl:mb-9">
      {compensation?.length > 0 &&
        compensation.map(item => (
          <CompensationItem key={nanoid()} item={item} />
        ))}
    </ul>
  );
};
