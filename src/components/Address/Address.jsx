import React from 'react';
import { ReactComponent as Location } from '../../img/location.svg';

export const Address = props => {
  const { name, address, phone, email, long, lat } = props;
  return (
    <>
      <div className="font-normal px-[62px] py-[32px] text-base tracking-tighter text-[#E7EAF0]">
        <p className="font-bold text-normal tracking-wider ">
          Department name.
        </p>
        <p className="font-bold text-normal tracking-wider ">{name}.</p>
        <p className="flex mt-[14px]">
          <Location className="mr-2" />
          {address}
        </p>
        <p className="mt-[6px] text-secondary-bg opacity-60 tracking-wider">
          {phone}
        </p>
        <p className="text-secondary-bg opacity-60 tracking-wider">{email}</p>
      </div>
      <div className="relative ">
        <img
          className="rounded-b-lg"
          src={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-l-embassy+d8d8d8(${long},${lat})/${long},${lat},14/500x260?access_token=pk.eyJ1Ijoibmljay1uaWNrIiwiYSI6ImNsOXowMHcyYTBhYWMzcmx0cjU0ZDBncngifQ.8DMluoDCeQ7V_uDn5s8sNg`}
          alt="map"
        />
        <span className=" absolute inset-0 bg-primary-map opacity-[0.25] rounded-b-lg"></span>
      </div>
    </>
  );
};
