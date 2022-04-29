import React from "react";
import styled from "styled-components";
import bgImg from "../Images/Soul_Groupwatch.jpg";

export const GroupWatch = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h1 className="disney-title">Virtual Movie Nights with</h1>
            <h1 className="disney-title">GroupWatch</h1>
            <ul>
              <li>Watch together, even when apart</li>
              <li>Stream with upto 6 friends</li>
              <li>pause, rewind, react together</li>
              <li>Easy setup and Sharing!</li>
            </ul>
          </Content>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  background: url(${bgImg}) center/cover no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 750px) and (max-width: 1200px) {
    height: 60vh;
  }
  @media screen and (min-width: 280px) and (max-width: 750px) {
    height: 55vh;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 280px) and (max-width: 900px) {
    width: 85%;
  }
`;
const Content = styled.div`
  margin-top: 17vh;
  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top: 13vh;
  }

  li {
    font-size: 1rem;
    font-weight: 300;
    @media screen and (min-width: 280px) and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
