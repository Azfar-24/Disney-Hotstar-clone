import React from "react";
import styled from "styled-components";
import bgImg from "../Images/BlackPanther.jpg";

export const MarvelStudio = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h1>Endless Entertainment</h1>
            <p>
              Disney classics, Pixer adventure,Marvel epics, Start War sagas,
              National Geographic explorations, and more
            </p>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 750px) and (max-width: 1200px) {
    height: 60vh;
  }
  @media screen and (min-width: 280px) and (max-width: 750px) {
    height: 55vh;
    object-fit: contain;
    object-position: center;
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  p {
    color: #D1D1D1;
  }
  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top: 13vh;
  }
`;
