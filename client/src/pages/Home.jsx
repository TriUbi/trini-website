import styled from "styled-components";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <MainContainer>
      <Banner />
      <AboutMe />
      <Skills />
    </MainContainer>
  );
};

export default Home;
