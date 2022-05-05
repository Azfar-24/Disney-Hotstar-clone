import React from "react";
import styled from "styled-components";
import { BrandAPI } from "./API";

export const Brand = () => {
  console.log(BrandAPI);
  return (
    <>
      <Container>
        {BrandAPI?.map((data, index) => (
          <Wrap key={index}>
            <img src={data.imgSrc} alt="Brand/Img" />
            <video
              src={data.videoSrc}
              autoPlay={true}
              loop={true}
              playsInline={true}
              muted={true}
            ></video>
          </Wrap>
        ))}
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;

  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
`;
const Wrap = styled.div`
  inset: 0;
  position: relative;
  /* padding-top: 56%; */
  border-radius: 10px;
  cursor: default;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transform: all 0.25s;
  object-position: center;
  border: 4px solid rgba(249, 259, 249, 0.5);
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 3;
    border-radius: 10px;
    transition: opacity 500ms ease-in-out 0s;
  }
  video {
    /* position: absolute;
    top: 0; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.1);
    border-color: rgba(249, 259, 249, 0.9);

    video{
        opacity: 1;
        z-index: 5;
    }
  }
`;
