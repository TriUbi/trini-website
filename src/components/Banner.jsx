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
  max-width: 600px;
  margin-bottom: 30px;
  margin-left: 100px;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 50px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 35px;
    color: #3498db;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;

    h1 {
      font-size: 35px;
      margin-bottom: 2px;
    }

    h3 {
      font-size: 25px;
      margin-bottom: 20px;
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
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background: transparent;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.6rem;
    width: 80%;
    max-width: 250px;
  }
`;

const Banner = () => {
  return (
    <BannerSection>
      <Overlay />
      <BannerText>
        <h1>Trinidad Ubilla</h1>
        <h3>Fullstack Utvecklare</h3>
        <p>
          Söker du en flexibel fullstack-utvecklare med problemlösningsfokus och
          önskan att bidra till framgångsrika projekt?
        </p>
      </BannerText>
      <ButtonContainer>
        <Button to="/kontakt">Kontakta mig!</Button>
      </ButtonContainer>
    </BannerSection>
  );
};

export default Banner;
