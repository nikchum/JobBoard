import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectorGetJobs } from 'redux/jobs/jobSelectors';

import data from '../../data/data.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as Star } from '../../img/star.svg';
import { ReactComponent as Shape } from '../../img/shape.svg';

import { Additionalnfo } from 'components/Additionalnfo';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Wrapper';
import { Salary } from 'components/Salary';
import { PostedDays } from 'components/PostedDays';
import { Carousel } from 'components/Carousel/Carousel';
import { Address } from 'components/Address';

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
    <main>
      <Wrapper padding={'px-4 xl:px-5'} bgColor={'bg-secondary-bg'}>
        <div className="pt-[24px] pb-[37px] ">
          <div>
            <Title text="Job Details" />
            <section className="flex mt-[24px] gap-9 font-normal text-base tracking-tighter text-subtitle-text">
              <p className="flex gap-3">
                <Star />
                Save to my list
              </p>
              <p className="flex gap-3">
                <Shape />
                Share
              </p>
            </section>
            <h2 className="mt-8 font-bold text-lh tracking-tightest text-primary-text">
              {title}
            </h2>
            <div className="flex justify-between items-center mt-1">
              <PostedDays created={createdAt} />
              <Salary salary={salary} />
            </div>
            <p className="mt-[14px] font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d]">
              {description}
            </p>
            <div className="mt-[43px] ">
              <h3 className="font-bold text-lg tracking-tighter text-primary-text">
                Responsopilities
              </h3>
              <p className="mt-2 font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d] ">
                {responsibilities}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg tracking-tighter text-primary-text">
                Compensation & Benefits:
              </h3>
              <p className="mt-5 font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d]">
                Our physicians enjoy a wide range of benefits, including:
              </p>
              <ul className="mt-1 mb-5">
                {compensation?.length > 0 &&
                  compensation.map(item => (
                    <li
                      key={nanoid()}
                      className="font-normal text-lg tracking-tighter opacity-[0.8] text-[#38415d]"
                    >
                      <span className="mr-4 inline-flex items-center w-[9px] h-[9px] bg-[#38415d] opacity-[0.8]"></span>
                      {item}
                    </li>
                  ))}
              </ul>
              <div className="flex justify-center">
                <Button text="APPLY NOW" />
              </div>
            </div>
            <section className="mt-[135px]  ">
              <Title text="Attached images" />
              <div className="mt-5 w-5/6 mx-auto ">
                <Carousel pictures={pictures} />
              </div>
            </section>
            <Additionalnfo employment={employment_type} benefits={benefits} />
          </div>
          <section className="mt-[63px] xl:mt-0">
            <div className="xl:hidden">
              <Title text="Contacts" />
            </div>
            <div className="mt-[21px]  w-full  bg-primary-map rounded-lg ">
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
        </div>
      </Wrapper>
      <div className="container"></div>
    </main>
  );
};
