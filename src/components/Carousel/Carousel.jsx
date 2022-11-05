import React from 'react';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';

export const Carousel = ({ pictures, count }) => {
  const settingsSlider = {
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settingsSlider}>
      {pictures?.length > 0 &&
        pictures.map((picture, i) => (
          <div key={picture}>
            <img
              width={120}
              className="flex mx-auto rounded-lg xl:ml-0 xl:mr-2"
              key={nanoid()}
              src={picture}
              alt={'photo' + { i }}
            />
          </div>
        ))}
    </Slider>
  );
};
