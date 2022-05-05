import React from "react";
import { Banner } from "./Banner";
import styled from "styled-components";
import { Stream } from "./Stream";
import { DownloadNow } from "./DownloadNow";
import { GroupWatch } from "./GroupWatch";
import { MarvelStudio } from "./MarvelStudio";
import { GridTheme } from "./GridTheme";
import { Devices } from "./Devices";
import { Advertise } from "./Advertise";
import { Footer } from "../footer/Footer";


export const Login = () => {
  return (
    <>
      <Main>
        
        <Banner />
        <Stream />
        <GroupWatch />
        <MarvelStudio />
        <GridTheme />
        <DownloadNow />
        <Advertise />
        <Devices />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;
