import styled from "styled-components";
import bannerBg from "../assets/img/banner.jpg";

export const AboutSection = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 2;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const AboutText = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const SkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const ImageSection = styled.section`
  padding: 50px 0;
  position: relative;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
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
  max-width: 300px;
  height: auto;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const SkillBubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  animation: float ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(
        ${(props) => props.moveX}px,
        ${(props) => props.moveY}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }

  &:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.2);
  }
`;
