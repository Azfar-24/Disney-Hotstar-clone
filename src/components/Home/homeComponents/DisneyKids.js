import React from "react";
import styled from "styled-components";
import luca from "../../Images/LUCA-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DisneyKids = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <Container>
        <h1>Disney for kids</h1>
        <Carousel {...settings}>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
          <Wrap>
            <div>
              <img src={luca} alt="LUCA-2" />
            </div>
          </Wrap>
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.section`
  h1 {
    padding: 10px 15px;
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 990px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.9rem;
    }
  }
`;
const Carousel = styled(Slider)`
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
    padding: 5px;
    border-radius: 4px;
    padding: 4px;
    z-index: 3;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    object-position: center;

    img {
      width: 100%;
      height: 15v;
      object-fit: fill;
      border-radius: 4px;

      @media screen and (max-width: 990px) {
        height: auto;
        object-fit: cover;
      }
    }
    &:hover {
      padding: 1px;
      border: 4px solid white;
      border-radius: 13px;
      transition: 0.03s;
      transform: scale(1.05);
    }
  }
`;
