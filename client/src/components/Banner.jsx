import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerBg from "../assets/img/banner.jpg";

const BannerSection = styled.section`
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: white;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 56, 83, 0.336);
`;

const BannerText = styled.div`
  text-align: justify;
  max-width: 800px;
  margin-bottom: 30px;
  margin-left: 100px;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 50px;
  }

  h3 {
    font-size: 35px;
    color: #3498db;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 35px;
    }

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-left: 100px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

const Button = styled(Link)`
  margin-right: 25px;
  padding: 13px;
  border-radius: 30px;
  border: white 1px solid;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 17px;
  box-shadow: 0 0 10px rgb(255, 255, 255);
  display: inline-block;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 200px;
  }
`;

const Banner = () => {
  return (
    <BannerSection>
      <Overlay />
      <BannerText>
        <h1>Trinidad Ubilla.</h1>
        <h3>Fullstack Utvecklare</h3>
        <p>
          Söker du en entusiastisk fullstack-utvecklare med problemlösningsfokus
          och önskan att bidra till framgångsrika projekt?
        </p>
      </BannerText>
      <ButtonContainer>
        <Button to="/contact">Kontakta mig!</Button>
        <Button as="a" href="/documents/CV-LIA.pdf" download="LIA-CV-Trinidad">
          Ladda ner CV!
        </Button>
      </ButtonContainer>
    </BannerSection>
  );
};

export default Banner;
