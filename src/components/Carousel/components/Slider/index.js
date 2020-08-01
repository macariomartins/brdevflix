/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import {
  FaChevronLeft as ChevronLeft,
  FaChevronRight as ChevronRight,
} from 'react-icons/fa';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: content-box;
    transform: initial;

    &:before {
      display: none;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: -1px;
  }

  .slick-arrow {
    background: rgba(0, 0, 0, .7);
    transition: all ease 300ms;
    height: calc(100% - 4px);
    color: rgba(255, 255, 255, .5);

    &:hover {
      background: rgba(0, 0, 0, .9);
      color: var(--primary);
    }
  }
`;

const ArrowWraper = ({
  currentSlide, slideCount, children, ...props
}) => (
    <span {...props} style={{ display: 'flex', alignItems: 'center' }}>
      {children}
    </span>
  );

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    prevArrow: (
      <ArrowWraper>
        <ChevronLeft size={32} />
      </ArrowWraper>
    ),
    nextArrow: (
      <ArrowWraper>
        <ChevronRight size={32} />
      </ArrowWraper>
    ),
  };

  return (
    <Container>
      <SlickSlider {...slickSettings}>
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
