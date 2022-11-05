import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectorGetJobs } from 'redux/jobs/jobSelectors';

import data from '../../data/data.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as Star } from '../../img/star.svg';
import { ReactComponent as Shape } from '../../img/shape.svg';
import { ReactComponent as Bookmark } from '../../img/bookmark.svg';

import { Additionalnfo } from 'components/Additionalnfo';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Wrapper';
import { Salary } from 'components/Salary';
import { PostedDays } from 'components/PostedDays';
import { Carousel } from 'components/Carousel/Carousel';
import { Address } from 'components/Address';
import { CompensationList } from 'components/CompensationList/CompensationList';

export const JobDetails = () => {
  const { compensation, responsibilities } = data;

  const { id: idParams } = useParams();
  const jobs = useSelector(selectorGetJobs);

  const findJobById = id => jobs.find(item => item.id === id);

  const {
    title,
    createdAt,
    salary,
    description,
    pictures,
    employment_type,
    benefits,
    name,
    email,
    phone,
    address,
    location: { lat, long },
  } = findJobById(idParams);

  return (
    <main className="xl:bg-secondary-bg xl:pb-[105px]">
      <Wrapper padding={'px-4 xl:px-[90px]'} bgColor={'bg-secondary-bg '}>
        <section className="pt-[24px] pb-[37px] xl:flex xl:pt-14 xl:pb-0 xl:gap-[130px]">
          <div>
            <div className="xl:flex justify-between items-center">
              <div className="xl:hidden">
                <Title text="Job Details" />
              </div>
              <h2 className="hidden xl:block font-bold text-xl tracking-wides text-primary-text ">
                Job Details
              </h2>
              <section className="flex mt-[24px] gap-9 font-normal text-base tracking-tighter text-subtitle-text xl:text-lg  xl:font-sans xl:mt-0">
                <p className="flex gap-3 hover:text-primary-text cursor-pointer items-center">
                  <Star className="xl:hidden" />
                  <Bookmark className="hidden xl:block" />
                  Save to my list
                </p>
                <p className="flex gap-3 hover:text-primary-text cursor-pointer items-center">
                  <Shape />
                  Share
                </p>
              </section>
            </div>
            <span className=" xl:block xl:w-[100%] xl:h-[1px] xl:bg-secondary-text xl:mt-3"></span>
            <div className="hidden xl:block mt-[39px]">
              <Button text="APPLY NOW" />
            </div>
            <h2 className="mt-8 font-bold text-lh tracking-tightest text-primary-text xl:flex xl:justify-between">
              {title}
              <div className="hidden xl:block xl:ml-[40px]">
                <Salary salary={salary} reverse={true} />
              </div>
            </h2>
            <div className="hidden xl:block mt-[7px] ">
              <PostedDays created={createdAt} />
            </div>
            <section className="flex justify-between items-center mt-1 xl:hidden">
              <PostedDays created={createdAt} />
              <Salary salary={salary} />
            </section>
            <p className="mt-[14px] font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:mt-[7px] xl:font-sans">
              {description}
            </p>
            <section className="mt-[43px] ">
              <h3 className="font-bold text-lg tracking-tighter text-primary-text xl:text-lx xl:tracking-[-0.62px]">
                Responsopilities
              </h3>
              <p className="mt-2 font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:mt-4 xl:font-sans">
                {responsibilities}
              </p>
            </section>
            <section className="mt-5 xl:mt-[43px] ">
              <h3 className="font-bold text-lg tracking-tighter text-primary-text xl:text-lx xl:tracking-[-0.62px]">
                Compensation & Benefits:
              </h3>
              <p className="mt-5 font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] xl:font-sans xl:mt-4">
                Our physicians enjoy a wide range of benefits, including:
              </p>
              <CompensationList compensation={compensation} />
              <div className="flex justify-center xl:block">
                <Button text="APPLY NOW" />
              </div>
            </section>
            <div className="xl:flex xl:flex-col-reverse xl:mt-[41px]">
              <section className="mt-[135px] xl:mt-[67px] ">
                <Title text="Attached images" />
                <div className="mt-5 w-5/6 mx-auto xl:max-w-[700px] xl:mx-0">
                  <div className="xl:hidden">
                    <Carousel pictures={pictures} count={2} />
                  </div>
                  <div className="hidden xl:block">
                    <Carousel pictures={pictures} count={3} />
                  </div>
                </div>
              </section>
              <Additionalnfo employment={employment_type} benefits={benefits} />
            </div>
          </div>
          <section className="mt-[63px] xl:mt-0 ">
            <div className="xl:hidden">
              <Title text="Contacts" />
            </div>
            <div className="mt-[21px]  w-full  bg-primary-map rounded-lg xl:w-[402px] xl:mt-0 ">
              <Address
                name={name}
                address={address}
                phone={phone}
                email={email}
                long={long}
                lat={lat}
              />
            </div>
          </section>
        </section>
        <div className="hidden xl:block pt-[80px] ml-[-90px]">
          <Button text="RETURN TO JOB BOARD" back path="/job-board" />
        </div>
      </Wrapper>
    </main>
  );
};
