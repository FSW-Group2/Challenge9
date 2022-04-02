import React from "react";
import styled from "styled-components";
import AvatarImage from "../images/male.png";


function ProfileDetail() {
  return (
    <ProfileDetailContainer>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>User</Name>
        <Title>Winrate %</Title>
      </ProfileContainer>
    </ProfileDetailContainer>
  );
}

const ProfileDetailContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* border-right: 1px solid #e7e7e7; */
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 7rem 0 1rem 0;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 5rem;
`;

const Name = styled.h1`
  color: #a53b11;
  font-size: 1.3rem;
  margin: 1rem 0 0.2rem 0;
`;

const Title = styled.h2`
  color: #a53b11;
  font-size: 1rem;
`;


export default ProfileDetail;