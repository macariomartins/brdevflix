/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Container = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 42px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }

  .slick-arrow {
    background: rgba(0,0,0,.7);
    display: block;
    height: 100%;
  }

  /* .slick-next::before, .slick-prev::before {
    color: rgba(0,0,0,.7);
    fill: white;
  } */

  .custom-left-arrow {
    background: rgba(0,0,0,.8);
    border: none;
    cursor: pointer;
    height: 100%;
    border-radius: 9px 0 0 9px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

// const CustomArrowsContainer = styled.div`
// `;

// function CustonPrevArrow() {
//   return (
//     <CustomArrowsContainer className="custom-left-arrow">
//       <FaChevronLeft
//         color="white"
//         size="32px"
//       />
//     </CustomArrowsContainer>
//   );
// }

// function CustonNextArrow() {
//   return (
//     <CustomArrowsContainer>
//       <FaChevronRight
//         color="white"
//         size="32px"
//       />
//     </CustomArrowsContainer>
//   );
// }

const Slider = ({ children }) => {
  const slickSettings = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    // prevArrow: <FaArrowLeft values={{ color: 'white' }} />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <Container>
      {/* <CustonPrevArrow /> */}
      <SlickSlider {...slickSettings}>
        {children}
      </SlickSlider>
      {/* <CustonNextArrow /> */}
    </Container>
  );
};

export default Slider;
