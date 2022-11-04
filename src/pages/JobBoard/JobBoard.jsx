import { Pagination } from '@mui/material';
import { JobItem } from 'components/JobItem';
import { Wrapper } from 'components/Wrapper';
import React from 'react';

export const JobBoard = () => {
  return (
    <main>
      <section className="pt-2 pb-3 xl:pt-[29px] xl:pb-16">
        <Wrapper padding={'px-2 xl:px-5'}>
          <ul className="flex flex-col gap-2">
            <JobItem />
          </ul>
          <div className="flex justify-center mt-[26px] xl:hidden ">
            <Pagination count={5} />
          </div>
          <div className="sm:hidden xl:flex xl:justify-center  xl:mt-[49px] ">
            <Pagination count={5} size="large" />
          </div>
        </Wrapper>
      </section>
    </main>
  );
};
