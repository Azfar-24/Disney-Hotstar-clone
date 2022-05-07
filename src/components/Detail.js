import React from "react";
import styled from "styled-components";
import dino from "../components/Images/Dino.png";
import playIcon from "../components/Images/play-icon-black.png";
import trailerIcon from "../components/Images/play-icon-white.png";
import groupIcon from "../components/Images/group-icon.png";

export const Detail = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <ImgTitle>
              <img src={dino} alt="imgTitle" />
              <h2>2015 | 7+ | 5 Seasons |TV Shows Based on Books</h2>
              <p>
                Half dinosaur, half construction truck, full-on fun! Watch gient
                Ty Rux, his little buddy Revvit and the crew come face-to-face
                with evil D-structs
              </p>
              <ButtomGroup>
                <PlayNtn>
                  <img src={playIcon} alt="playIcon" />
                  <span>Play</span>
                </PlayNtn>
                <TrailerBtn>
                  <img src={trailerIcon} alt="trailerIcon" />
                  <span>Trailer</span>
                </TrailerBtn>
                <AddtoPlayListBtn>
                  <span>+</span>
                </AddtoPlayListBtn>
                <GroupMatchBtn>
                  <img src={groupIcon} alt="groupIcon" />
                </GroupMatchBtn>
              </ButtomGroup>
            </ImgTitle>
          </Content>
        </Container>
      </Background>
    </>
  );
};

const Background = styled.main`
  background: url("https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZLmUBWsznumv2uQ9d9dayZrEgLW4MfpNJycr7S8B0B2sGQH5lOUJMb5vk6FZmGmpx-7Q4mUDSYjj09d87U-gqV6HEre6TM1gqUo.jpg?r=e9e")
    center/cover no-repeat;

  &:hover {
    background: linear-gradient(
        to right,
        #181818 10%,
        rgba(23, 23, 23, 0.98) 20%,
        rgba(23, 23, 23, 0.97) 25%,
        rgba(23, 23, 23, 0.95) 35%,
        rgba(23, 23, 23, 0.94) 40%,
        rgba(23, 23, 23, 0.92) 45%,
        rgba(23, 23, 23, 0.9) 50%,
        rgba(23, 23, 23, 0.87) 55%,
        rgba(23, 23, 23, 0.82) 60%,
        rgba(23, 23, 23, 0.75) 65%,
        rgba(23, 23, 23, 0.63) 70%,
        rgba(23, 23, 23, 0.45) 75%,
        rgba(23, 23, 23, 0.27) 80%,
        rgba(23, 23, 23, 0.15) 85%,
        rgba(23, 23, 23, 0.08) 90%,
        rgba(23, 23, 23, 0.03) 95%,
        rgba(23, 23, 23, 0) 100%
      ),
      url("https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZLmUBWsznumv2uQ9d9dayZrEgLW4MfpNJycr7S8B0B2sGQH5lOUJMb5vk6FZmGmpx-7Q4mUDSYjj09d87U-gqV6HEre6TM1gqUo.jpg?r=e9e")
        center/cover no-repeat;
  }

  min-height: 95vh;
  @media screen and (min-width: 990px) and (max-width: 1200px) {
    min-height: 75vh;
  }
  @media screen and (min-width: 580px) and (max-width: 990px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 580px) {
    min-height: 55vh;
  }
`;
const Container = styled.div`
  width: 95%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
    @media screen and (min-width: 990px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 580px) and (max-width: 990px) {
      font-size: 0.9rem;
    }
    @media screen and (min-width: 280px) and (max-width: 580px) {
      font-size: 0.8rem;
    }
  }
  p {
    line-height: 1.4;
    padding: 1rem 0;
    color: #f9f9f9;
    font-size: 20px;
    text-align: center;
    @media screen and (min-width: 990px) and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (min-width: 580px) and (max-width: 990px) {
      font-size: 18px;
    }
    @media screen and (min-width: 280px) and (max-width: 580px) {
      font-size: 16px;
    }
  }
`;
const ImgTitle = styled.div`
  margin-top: 35vh;
  margin-left: 50%;
  @media screen and (min-width: 990px) and (max-width: 1200px) {
    width: 100%;
    max-width: 350px;
    margin-left: 20%;
    margin-top: 25vh;
  }
  @media screen and (min-width: 580px) and (max-width: 990px) {
    width: 100%;
    max-width: 250px;
    margin-left: 20%;
    margin-top: 25vh;
  }
  @media screen and (min-width: 280px) and (max-width: 580px) {
    width: 100%;
    max-width: 150px;
    margin-left: 20%;
    margin-top: 25vh;
  }

  img {
    @media screen and (min-width: 990px) and (max-width: 1200px) {
      width: 100%;
      max-width: 350px;
    }
    @media screen and (min-width: 580px) and (max-width: 990px) {
      width: 100%;
      max-width: 250px;
    }
    @media screen and (min-width: 280px) and (max-width: 580px) {
      width: 100%;
      max-width: 150px;
    }
  }
`;
const ButtomGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
const PlayNtn = styled.button`
  margin-right: 5px;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.2rem;
  }
`;
const TrailerBtn = styled.button`
  border: 1px solid white;
  margin: 0 5px;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  span {
    font-size: 1.2rem;
  }
`;
const AddtoPlayListBtn = styled.button`
  margin-left: 5px;
  padding: 0.3rem 1rem;
  border-radius: 100px;
  border: 1px solid white;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  span {
    font-size: 1.2rem;
  }
`;
const GroupMatchBtn = styled.button`
  margin-left: 5px;
  padding: 0.3rem 0.6rem;
  border-radius: 100px;
  border: 1px solid white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  span {
    font-size: 1.2rem;
  }
`;
