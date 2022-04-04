import React from "react";
import styled from "styled-components";
import MenuAppBar from "../components/Navbar";
import home from "../images/homepage.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Homepage() {
  return (
    <Wrapper>
      <MenuAppBar />
      <Sosmed>
        <div>
          <InstagramIcon sx={{ my: 0 }} />
          <p>Instagram</p>
        </div>
        <div>
          <TwitterIcon sx={{ my: 0 }} />
          <p>Twitter</p>
        </div>
        <div></div>
      </Sosmed>
      <TitleHome>
        <h1>PLAY THE GAME</h1>
        <br />
        <p>
          Let's play the game with your curiosity. You can play any games in
          list game page, get point from the game and set your position in top
          leaderboard!
        </p>
      </TitleHome>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${home}) no-repeat center center / cover;
  height: 100vh;
  width: 100%;
`;

const Sosmed = styled.div`
  display: flex;
  gap: 2rem;
  h5 {
    color: white;
    font-weight: 300;
  }
  position: absolute;
  bottom: 1rem;
  left: 3rem;
  div {
    display: flex;
    gap: 0.3rem;
    color: white;
  }
`;

const TitleHome = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 3rem;
  color: white;
  h1 {
    font-size: 6rem;
    text-align: start;
    width: 50rem;
    font-weight: 600;
  }
  h5 {
    width: 25rem;
    text-align: start;
    font-weight: 300;
    margin-top: -80px;
  }
`;

export default Homepage;
