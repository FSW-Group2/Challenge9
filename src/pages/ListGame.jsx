import Cards from "../components/Cards";
import MenuAppBar from "../components/Navbar";
import styled from "styled-components";
import background from "./../images/requirements.png";

function List() {
  return (
    <Wrapper>
    <div className="App">
      <MenuAppBar />
      <Cards marginTop={100}/>
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