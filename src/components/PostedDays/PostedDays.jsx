import { getDifferenceOfDays } from 'functions/commonFunctions';
import React from 'react';

export const PostedDays = ({ created }) => {
  return (
    <p className="font-light text-sx text-subtitle-text tracking-[0.19px] xl:text-base xl:tracking-[0.24px]">
      Posted {getDifferenceOfDays(new Date(created))} days ago
    </p>
  );
};
