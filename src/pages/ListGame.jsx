import React, { useEffect, useState } from "react";
import Card from "../components/Cards";
import MenuAppBar from "../components/Navbar";
import styled from "styled-components";
import background from "./../images/requirements.png";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

function List() {
  const [games, setGames] = useState([{}]);
  const userCollectionRef = collection(db, "games");
  useEffect(() => {
    const getDataGames = async () => {
      const data = await getDocs(userCollectionRef);
      setGames(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getDataGames();
  }, []);
  return (
    <Wrapper>
      <div className="App">
        <MenuAppBar />
        {games.map((item) => {
          <Card>
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <a href={item.img_url}></a>
            </div>
          </Card>;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${background}) center center / cover;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default List;
