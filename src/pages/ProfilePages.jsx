import * as React from "react";
import ProfileDetail from "../components/ProfileDetail";
import ProfileForm from "../components/ProfileForm";
import Navbar from "../components/Navbar"
import styled from "styled-components";

export default function BasicGrid() {
  return (
    <Container>
      <Card>
        <ProfileDetail />
        <ProfileForm />
      </Card>
    </Container>


   
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #724C21;
background: -webkit-linear-gradient(to right, #9c835f, #724C21);
background: linear-gradient(to right, #9c835f, #724C21);
`;
const Card = styled.div`
height: 80vh;
width: 50vw;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(18px);
-webkit-backdrop-filter: blur(14px);
border-radius: 10px;
display: flex;
`;
