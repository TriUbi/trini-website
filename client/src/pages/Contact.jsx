import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/img/profile.png";
import bannerBg from "../assets/img/banner.jpg";

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: 0;
`;

const ContactCard = styled.div`
  background-image: url(${bannerBg});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(53, 56, 83, 0.5);
    backdrop-filter: blur(2px);
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  margin: 20px auto 20px;
  display: block;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ContactInfo = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #3498db;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const InfoItem = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #3498db;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
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
              href="https://github.com/minportfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/trinidad-ubilla"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
        </ContactInfo>
      </ContactCard>
    </ContactContainer>
  );
};

export default Contact;
