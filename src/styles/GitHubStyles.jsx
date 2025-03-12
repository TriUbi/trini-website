import styled, { keyframes } from "styled-components";

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

export const GitHubSection = styled.div`
  text-align: center;
  padding: 40px 20px;
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
`;

export const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 1.5em;
  }
`;
