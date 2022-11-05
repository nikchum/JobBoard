import { Pagination } from '@mui/material';
import { JobItem } from 'components/JobItem';
import { Wrapper } from 'components/Wrapper';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTotalPages } from 'redux/jobs/jobSelectors';
import { changePage } from 'redux/jobs/jobSlice';

export const JobBoard = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectorTotalPages);
  return (
    <main>
      <section className="pt-2 pb-3 xl:pt-[29px] xl:pb-16">
        <Wrapper padding={'px-2 xl:px-5'}>
          <ul className="flex flex-col gap-2">
            <JobItem />
          </ul>
          <div className="flex justify-center mt-[26px] xl:hidden ">
            <Pagination
              count={totalPages}
              onChange={(_, num) => {
                dispatch(changePage(num));
                window.scrollTo({
                  top: '5000px',
                  behavior: 'smooth',
                });
              }}
            />
          </div>
          <div className="hidden xl:flex xl:justify-center  xl:mt-[49px] ">
            <Pagination
              count={totalPages}
              size="large"
              onChange={(_, num) => {
                dispatch(changePage(num));
                window.scrollTo({
                  top: '5000px',
                  behavior: 'smooth',
                });
              }}
            />
          </div>
        </Wrapper>
      </section>
    </main>
  );
};
