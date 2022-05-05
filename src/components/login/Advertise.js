import React from "react";
import styled from "styled-components";

import logo1 from "../Images/cta-logo-one.svg";
import logo2 from "../Images/cta-logo-two.png";

export const Advertise = () => {
  return (
    <Section>
      <Container>
        <ImgInfo>
          <img src={logo1} alt="" />
        </ImgInfo>
        <TextInfo>
          <p>
            Get the Disney Bundle to stream the best movies, shows, and sports
            with Disney+, HULU and ESPN+. Terms Apply.
          </p>
          <button type="button">Get The Disney Bundle</button>
        </TextInfo>
      </Container>
    </Section>
  );
};

const Section = styled.section``;
const Container = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid gray;
  height: auto;
  width: 70%;
  margin: auto;

  display: flex;

  align-items: center;
  justify-content: center;

  @media screen and (min-width: 550px) and (max-width: 900px) {
    flex-direction: column;
    width: 89%;
  }

  p {
    margin-top: 20px;
    text-align: center;
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
  }

  button {
    margin: 10px auto;
    margin-left: 15px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    background: #0063e5;
    color: #f9f9f9;
    text-transform: uppercase;

    @media screen and (max-width: 900px) {
      font-size: 11px;
    }

    &:hover {
      background-color: #0083ff;
    }
  }
`;
const ImgInfo = styled.div`
  width: 50%;
  padding: 0 15px;
  /* margin: auto; */
  @media screen and (min-width: 550px) and (max-width: 1070px) {
    width: 80%;
    padding: 0 12px;
  }
  @media screen and (max-width: 1070px) {
    width: 100%;
    padding: 0 10px;
  }
`;
const TextInfo = styled.div``;
