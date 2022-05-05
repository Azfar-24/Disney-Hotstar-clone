import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.svg";

export const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <FooterBrand>
            <img src={logo} alt="Disney/logo" />
          </FooterBrand>
          <Nav>
            <li>English</li>
            <li>Subscriber Agreement</li>
            <li>Privacy Policy</li>
            <li>Your Califormia Policy</li>
            <li>Do not Sell my info</li>
            <li>Children's Online Privacy policy</li>
            <li>Closed Captioning</li>
            <li>Interest-Based-Adds</li>
            <li>Supported Devices</li>
            <li>Help</li>
            <li>Gift Disney+</li>
          </Nav>
          <CopyrightDiv>
            <p>@DisneyPlus-JSStack All Rights Reserved</p>
          </CopyrightDiv>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const FooterBrand = styled.div`
  text-align: center;
  img {
    width: 200px;
    height: auto;
    object-fit: fill;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: initial;
  li {
    list-style: none;
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.3rem;
  }
`;
const CopyrightDiv = styled.div`
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
`;
