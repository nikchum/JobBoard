import { settingsSlider } from 'constans/settings';
import { nanoid } from 'nanoid';
import React from 'react';
import Slider from 'react-slick';

export const Carousel = ({ pictures }) => {
  return (
    <Slider {...settingsSlider}>
      {pictures?.length > 0 &&
        pictures.map((picture, i) => (
          <div>
            <img
              width={120}
              className="flex mx-auto rounded-lg"
              key={nanoid()}
              src={picture}
              alt={'photo' + { i }}
            />
          </div>
        ))}
    </Slider>
  );
};
