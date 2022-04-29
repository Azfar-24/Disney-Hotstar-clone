import React from "react";
import { Banner } from "./Banner";
import styled from "styled-components";
import { Stream } from "./Stream";
import { DownloadNow } from "./DownloadNow";
import { GroupWatch } from "./GroupWatch";
import { MarvelStudio } from "./MarvelStudio";

export const Login = () => {
  return (
    <>
      <Main>
        <Banner />
        <Stream />
        <GroupWatch />
        <MarvelStudio/>
        <DownloadNow />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;
