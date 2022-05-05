import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideApi } from "./API";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <CarsouseImgs {...settings}>
        {SlideApi?.map((data, i) => (
          <Wrap key={i}>
            <div>
              <img src={data.imgSrc} alt="Slide/imgs" />
            </div>
          </Wrap>
        ))}
      </CarsouseImgs>
    </>
  );
};

const CarsouseImgs = styled(Slider)`
  ul li button {
    &::before {
      font-size: 11px;
      color: rgb(150 160 170);
    }
    ul li .slick-active button {
      &::before {
        color: #fff !important;
      }
    }
  }

  // left-right button
  & > button {
    opacity: 0;
    z-index: 2;
    width: 5vw;
    height: 100%;

    &:hover {
      opacity: 1;
      z-index: 3;
      transition: opacity 0.2s ease 0s;
    }
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -50px;
  }

  /// slick-list

  .slick-list {
    overflow: initial;
  }
`;
const Wrap = styled.div`
  div {
    border-radius: 4px;
    padding: 4px;
    z-index: 3;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    object-position: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
    &:hover {
      padding: 1px;
      border: 4px solid white;
      transition: 0.03s;
    }
  }
`;
