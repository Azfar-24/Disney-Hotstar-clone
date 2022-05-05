import React from "react";
import styled from "styled-components";
import img1 from "../Images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg";
import img2 from "../Images/ForkyAsksAQuestion_en-US.jpg";
import img3 from "../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg";
import img4 from "../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg";
import img5 from "../Images/Poster_InfinityWar_EN.jpg";
import img6 from "../Images/Soul_EN_(1).png";
import img7 from "../Images/LUCA-2.png";
import img8 from "../Images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg";
import img9 from "../Images/SW_Clone_Wars.png";

export const GridTheme = () => {
  const Img_API = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
    { imgSrc: img5 },
    { imgSrc: img6 },
    { imgSrc: img7 },
    { imgSrc: img8 },
    { imgSrc: img9 },
  ];
  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1>Stream Exclusive Disney+ Originals</h1>
            <p>New Stories from our incredible family of studios</p>
            <p></p>
          </Title>
          <GridImg>
            <Image>
              <img src={img1} alt="logo/img" />
            </Image>
            <Image>
              <img src={img2} alt="logo/img" />
            </Image>
            <Image>
              <img src={img3} alt="logo/img" />
            </Image>
            <Image>
              <img src={img4} alt="logo/img" />
            </Image>
            <Image>
              <img src={img5} alt="logo/img" />
            </Image>
            <Image>
              <img src={img6} alt="logo/img" />
            </Image>
            <Image>
              <img src={img7} alt="logo/img" />
            </Image>
            <Image>
              <img src={img8} alt="logo/img" />
            </Image>
            <Image>
              <img src={img9} alt="logo/img" />
            </Image>
          </GridImg>
          <GetBundleBtn>Get the Disney bundles</GetBundleBtn>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 3vh;
  p {
    font-size: 16px;
    @media screen and (max-width: 550px) {
      font-size: 13px;
    }
  }
`;
const GridImg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Image = styled.div`
  /* margin-right: 10px; */
  width: 100%;
  /* padding: 1%; */
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -1 rgb(0 0 0 / 69%) 0px 26px 30px -1;
  img {
    /* padding: 1%; */
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const GetBundleBtn = styled.div`
  margin-top: 15px;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  background: #0063e5;
  color: #f9f9f9;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0083ff;
  }
`;
