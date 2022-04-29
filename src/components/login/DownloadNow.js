import React from "react";
import StreamImg from "../Images/Devices.png";
import styled from "styled-components";

export const DownloadNow = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">Stream the Premier Access the</h1>
            <h1 className="disney-titles">same day it's in theaters</h1>
            <p>
              Coming May 28. Get Premier Access to Cruella for ₹99 with a
              Disney+ Subscription and watch as many times as yoou like before
              it's available to all Disney+ subscription at a later date.
            </p>
            <button type="button" className="btn">
              Download Now
            </button>
          </TextInfo>
          <ImgInfo>
            <img src={StreamImg} alt="Streaming Page" />
          </ImgInfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 50px 4%;
  position: relative;
  background: transparent;
  @media screen and (min-width: 375px) and (max-width: 550) {
    padding: 35px 50px;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const TextInfo = styled.div`
  width: 65%;
  flex: 0 auto;
  opacity: 1;
  z-index: 150;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 10px;
  @media screen and (max-width: 900px) {
    font-size: 13px;
    line-height: 16px;
  }
  button {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    background: #0063e5;
    color: #f9f9f9;
    text-transform: uppercase;

    &:hover {
      background-color: #0083ff;
    }
  }

  h1 {
    margin: 10px 0;
  }

  p {
    line-height: 20px;
    margin: 1rem 0;
    width: 100%;
    font-size: 1rem;
    font-weight: 100;

    @media screen and (min-width: 550px) and (max-width: 900px) {
      text-align: center;
    }

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 13px;
      line-height: 16px;
      text-align: center;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 10px;
      line-height: 16px;
      text-align: center;
    }
  }
`;
const ImgInfo = styled.div`
  width: 65%;
  flex: 0 auto;
  opacity: 1;
  z-index: 150;
  position: relative;
  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-top: 2vh;

    @media screen and (min-width: 375px) and (max-width: 550) {
      height: auto;
      width: 100%;
      object-fit: contain;
      margin-top: 2vh;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      height: 27vh;
      width: 100%;
      object-fit: contain;
      margin-top: 2vh;
    }
  }
`;
