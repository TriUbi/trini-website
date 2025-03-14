import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/img/profile.png";
import bannerBg from "../assets/img/banner.jpg";
import { useEffect, useState } from "react";

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding-top: 80px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 83, 0.8);
    pointer-events: none;
    z-index: 1;
  }
`;

const ContactContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 4px solid rgba(255, 255, 255, 0.2);
  margin: 20px auto;
  display: block;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 20px;
  font-weight: 500;
`;

const InfoItem = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: transform 0.3s ease;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
  }

  svg {
    color: #3498db;
    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 28px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(52, 152, 219, 0.2) 0%,
      transparent 70%
    );
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #3498db;
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      transform: scale(2);
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatTitle = styled.h3`
  color: #3498db;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const StatDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactCard>
          <ProfileImage src={profileImage} alt="Trinidad Ubilla" />
          <ContactInfo>
            <Title>Trinidad Ubilla</Title>
            <Subtitle>Fullstack Utvecklare</Subtitle>
            <InfoItem>
              <FaEnvelope /> triubilla@gmail.com
            </InfoItem>
            <InfoItem>📍 Stockholm, Sverige</InfoItem>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/TriUbi"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/%E2%9A%A1%EF%B8%8Ftrinidad-ubilla-46924429a"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </SocialIcon>
            </SocialLinks>
          </ContactInfo>
        </ContactCard>

        <StatsContainer>
          <StatCard>
            <StatTitle>Samarbete</StatTitle>
            <StatDescription>
              Jag tror på öppen kommunikation och aktivt teamarbete för att nå
              gemensamma mål.
            </StatDescription>
          </StatCard>
          <StatCard>
            <StatTitle>Innovation</StatTitle>
            <StatDescription>
              Alltid på jakt efter nya tekniker och kreativa lösningar för att
              förbättra projekt.
            </StatDescription>
          </StatCard>
          <StatCard>
            <StatTitle>Engagemang</StatTitle>
            <StatDescription>
              Dedikerad till att leverera högkvalitativa resultat och
              kontinuerlig utveckling.
            </StatDescription>
          </StatCard>
        </StatsContainer>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
