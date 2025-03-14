import styled from "styled-components";
import bannerBg from "../assets/img/banner.jpg";

export const GitHubSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 83, 0.8);
    z-index: 1;
  }
`;

export const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-3px);
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;
