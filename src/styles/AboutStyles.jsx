import styled from "styled-components";
import bannerBg from "../assets/img/banner.jpg";

export const AboutSection = styled.section`
  padding: 80px 20px;
  position: relative;
  z-index: 1;
  background: rgba(24, 55, 110, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

export const AboutContent = styled.div`
  max-width: 1100px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-bottom: 30px;
  }
`;

export const AboutText = styled.div`
  color: white;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: white;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      white,
      rgba(255, 255, 255, 0.3)
    );
    border-radius: 2px;

    @media (max-width: 768px) {
      width: 100px;
      bottom: -8px;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  max-width: 800px;
`;

export const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem;

  svg {
    font-size: 1.4em;
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: opacity, transform;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const StatsTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin-top: 2rem;
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.8rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const ImageSection = styled.section`
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  padding: 30px 20px 120px;
  z-index: 1;
  min-height: 60vh;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 83, 0.2);
    z-index: -1;
  }
`;

export const ImageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 350px 1fr;
  gap: 10px;
  align-items: center;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const SkillsLeft = styled.div`
  position: relative;
  height: 100%;
`;

export const SkillsRight = styled.div`
  position: relative;
  height: 100%;
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
  z-index: 2;
`;

export const SkillBubble = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  will-change: transform;
  animation: float ${(props) => props.duration + 2}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.9;
  backdrop-filter: blur(5px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  svg {
    font-size: 1.5em;
  }

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.2);
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(5px, -5px);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
