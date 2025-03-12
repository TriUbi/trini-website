import styled from "styled-components";

export const GitHubSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: rgba(53, 56, 83, 0.5);
  backdrop-filter: blur(10px);
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
