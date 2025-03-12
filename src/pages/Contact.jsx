import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/img/profile.png";
import bannerBg from "../assets/img/banner.jpg";
import { useEffect, useState } from "react";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    rgb(28, 58, 109),
    rgb(5, 21, 55),
    rgb(24, 55, 110),
    rgb(52, 152, 219),
    rgb(41, 128, 185),
    rgb(33, 97, 140),
    rgb(24, 55, 110),
    rgb(28, 58, 109)
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding-top: 80px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    z-index: -1;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.3s ease;
  z-index: 2;
  mix-blend-mode: screen;
`;

const ContactCard = styled.div`
  background-image: url(${bannerBg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 40px;
  max-width: 500px;
  width: 90%;
  margin: 20px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px 0 rgba(31, 38, 135, 0.47);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(53, 56, 83, 0.5);
    backdrop-filter: blur(2px);
    pointer-events: none;
    z-index: 1;
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
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
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
  font-size: 1.3rem;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  z-index: 1;
`;

const InfoItem = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  svg {
    color: #3498db;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 28px;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(52, 152, 219, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #3498db;
    transform: translateY(-5px);

    &::before {
      transform: scale(2);
    }
  }
`;

const Contact = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const size = Math.random() * 10 + 5;
      const particle = { x, y, size, id: Date.now() };

      setParticles((prev) => [...prev, particle]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", createParticle);
    return () => window.removeEventListener("mousemove", createParticle);
  }, []);

  return (
    <ContactContainer>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          style={{
            left: particle.x,
            top: particle.y,
          }}
          size={particle.size}
        />
      ))}
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
    </ContactContainer>
  );
};

export default Contact;
