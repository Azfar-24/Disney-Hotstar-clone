import React from "react";
import { Banner } from "./homeComponents/Banner";
import styled from "styled-components";
import background from "../Images/background.jpg";
import { Brand } from "./homeComponents/Brand";
import { Originals } from "./homeComponents/Originals";
import { Trending } from "./homeComponents/Trending";
import { NewToDisney } from "./homeComponents/NewToDisney";
import { Hollywood } from "./homeComponents/Hollywood";
import { DisneyKids } from "./homeComponents/DisneyKids";
import { Popular } from "./homeComponents/Popular";

export const Home = () => {
  return (
    <>
      <Container>
        <Banner />
        <Brand />
        <Originals />
        <Trending />
      </Container>
      <NewToDisney />
      <Hollywood />
      <DisneyKids/>
      <Popular/>
    </>
  );
};

const Container = styled.div`
  position: relative;
  /* min-height: calc(100vh - 300px); */
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${background});
`;
