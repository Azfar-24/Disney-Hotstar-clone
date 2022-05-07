import React from "react";
import styled from "styled-components";
import img1 from "../Images/TV.png";
import img2 from "../Images/Laptop.png";
import img3 from "../Images/mobile.png";
import img4 from "../Images/XBOX.png";

export const Devices = () => {
  const Img_API = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
  ];
  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1>Available stream at your faviorate Devices </h1>
            <p></p>
          </Title>
          <GridImg>
            <Image>
              <img src={img2} alt="logo/img" />
              <span>TV</span>
            </Image>
            <Image>
              <img src={img1} alt="logo/img" />
              <span>Laptop</span>
            </Image>
            <Image style={{ width: "11%", objectFit: "center" }}>
              <img src={img3} alt="logo/img" />
              <span>Mobile</span>
            </Image>
            <Image>
              <img src={img4} alt="logo/img" />
              <span>Xbox</span>
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
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 20px auto;
  @media screen and (max-width: 950px) {
    /* display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); */
  }
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  width: 20%;
  padding: 1%;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -1 rgb(0 0 0 / 69%) 0px 26px 30px -1;
  img {
    /* padding: 1%; */
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    @media screen and (max-width: 950px) {
      width: 100%;
    }
  }
  span {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;
const GetBundleBtn = styled.div`
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
