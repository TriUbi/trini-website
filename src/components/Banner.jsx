import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerBg from "../assets/img/banner.jpg";

const BannerContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: white;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const ContactButton = styled(Link)`
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
  margin: 0 auto;

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
    width: fit-content;
    margin: 0 auto;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Title>Trinidad Ubilla.</Title>
      <Subtitle>Fullstack Utvecklare</Subtitle>
      <Description>
        Söker du en entusiastisk fullstack-utvecklare med problemlösningsfokus
        och önskan att bidra till framgångsrika projekt?
      </Description>
      <ContactButton to="/kontakt">Kontakta mig!</ContactButton>
    </BannerContainer>
  );
};

export default Banner;
