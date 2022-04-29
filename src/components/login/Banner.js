import React from "react";
import styled from "styled-components";
import { Stream } from "./Stream";

import logo1 from "../Images/cta-logo-one.svg";
import logo2 from "../Images/cta-logo-two.png";

export const Banner = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <img src={logo1} alt="logo/img" />
            <button type="button" className="get-bundle-btn">
              GET THE DISNEY BUNDLE
            </button>
            <h4>Stream Now : Terms Apply</h4>
            <img src={logo2} alt="logo/img" />
            <button type="button" className="links">
              Sign Up for Disney+ Only
            </button>
            <button type="button" className="links text-gray">
              ₹99 / Month or ₹899 / Year
            </button>
          </Content>
        </Container>
      </Background>
    </>
  );
};

const Background = styled.section`
  background: url("https://disney-clone-d1e27.web.app/images/login-background.jpg");
  height: 95vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`;
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 375px) and (max-width: 549px) {
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 280px) and (max-width: 374px) {
    max-width: auto;
    margin-top: 13vh;
  }
`;

const Content = styled.div`
  margin-bottom: 1vh;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  .get-bundle-btn {
    outline: none;
    width: 100%;
    padding: 11.5px 15px;
    text-align: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 6px;
    transition: all 0.7s ease-in-out;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      padding: 10px 0;
      font-size: 15px;
    }

    @media screen and (min-width: 2800px) and (max-width: 550px) {
      padding: 10px 0;
      font-size: 14px;
    }

    &:hover {
      background-color: #0083ff;
    }
  }
  .links {
    border: none;
    outline: none;
    width: 100%;
    letter-spacing: 1.5px;
    background: transparent;
    color: #f9f9f9;
    font-size: 18px;
    margin-top: 1vh;
  }
  .text-gray {
    color: gray;
  }
  h4 {
    margin: 1vh auto;
  }
`;
