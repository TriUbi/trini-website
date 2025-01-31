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
  padding: 15px 30px;
  border-radius: 30px;
  border: white 1px solid;
  color: white;
  background: transparent;
  cursor: pointer;
  font-size: 17px;
  box-shadow: 0 0 10px rgb(255, 255, 255);
  display: inline-block;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 16px;
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
        <Button to="/kontakt">Kontakta mig!</Button>
      </ButtonContainer>
    </BannerSection>
  );
};

export default Banner;
