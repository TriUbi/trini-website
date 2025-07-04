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
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    justify-content: center;
    padding: 0 20px;
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
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
    width: auto;
    min-width: 150px;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    min-width: 120px;
  }
`;

const TextLink = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
          Tycker du att din produkt är innovativ och full av potential? Letar du
          efter en utvecklare med hunger och vilja att bidra till ditt företags
          tillväxt? Då är jag just den personen du söker!
        </p>
      </BannerText>
      <ButtonContainer>
        <Button to="/kontakt">Kontakta mig!</Button>
      </ButtonContainer>
    </BannerSection>
  );
};

export default Banner;
