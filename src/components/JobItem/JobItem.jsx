import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostedDays } from 'components/PostedDays';
import { ReactComponent as Location } from '../../img/location.svg';
import { ReactComponent as Bookmark } from '../../img/bookmark.svg';
import {
  selectorGetJobs,
  selectorCurrentPage,
} from '../../redux/jobs/jobSelectors';
import { randomRating } from '../../functions/commonFunctions';

export const JobItem = () => {
  const [currentJobs, setCurrentJobs] = useState(null);

  const currentPage = useSelector(selectorCurrentPage);
  const jobs = useSelector(selectorGetJobs);

  useEffect(() => {
    const getJobsForPage = () =>
      jobs.slice((currentPage - 1) * 10, currentPage * 10);

    setCurrentJobs(getJobsForPage());
  }, [currentPage, jobs]);

  return (
    currentJobs &&
    currentJobs.map(item => {
      const { id, name, title, address, pictures, createdAt } = item;
      return (
        <li
          key={id}
          className="flex px-4 pt-3 pb-7  bg-mob-item-bg rounded-lg shadow-sm xl:bg-secondary-bg xl:px-4 xl:py-6 xl:justify-between"
        >
          <div className="flex">
            <div className="w-20 mt-8 mr-5 xl:w-28 xl:mt-0 xl:mr-2">
              <img
                className="rounded-full  w-16 h-16 xl:w-[85px] xl:h-[85px]"
                src={pictures[0]}
                alt={name}
              />
            </div>

            <div className="w-full ">
              <div className="flex justify-between items-center mb-3 xl:hidden">
                <Rating
                  name="half-rating"
                  color="action"
                  size="small"
                  value={randomRating()}
                  precision={1}
                />
                <PostedDays created={createdAt} />
              </div>

              <Link
                className="font-normal text-lg text-primary-text hover:text-subtitle-text tracking-tighter xl:font-bold xl:text-lx xl:tracking-[-0.63px]"
                to={`${id}`}
              >
                {title}
              </Link>

              <div className="mt-1 text-subtitle-text text-base tracking-wider font-normal xl:mt-2 xl:flex">
                <p className="xl:mr-1">Department name • {name}</p>
                <p>{address}</p>
              </div>
              <div className="mt-2">
                <p className="flex  items-center text-subtitle-text text-base tracking-wider font-normal">
                  <Location className="mr-2" />
                  Vienna, Austria
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex">
            <Rating
              className="flex items-center"
              name="half-rating"
              color="action"
              size="size-medium"
              value={randomRating()}
              precision={1}
            />
            <div className="flex flex-col justify-between items-end ml-[32px]">
              <Bookmark className="hover:opacity-[0.7] transition-opacity cursor-pointer" />
              <PostedDays created={createdAt} />
            </div>
          </div>
        </li>
      );
    })
  );
};
