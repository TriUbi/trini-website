import styled from "styled-components";

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: transparent;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ProjectCard = styled.div`
  background: rgba(53, 56, 83, 0.8);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.div`
  height: 250px;
  background: ${(props) =>
    props.showImage ? "transparent" : props.color || "#2c3e50"};
  background-image: ${(props) =>
    props.showImage ? `url(${props.image})` : "none"};
  background-size: ${(props) => (props.showImage ? "cover" : "contain")};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.showImage ? "10px" : "20px")};
  position: relative;
  overflow: hidden;

  svg {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.showImage
        ? "none"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))"};
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: ${(props) =>
      props.showImage
        ? "none"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))"};
  }
`;

export const ProjectInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 250px);
`;

export const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

export const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: auto;
  flex-wrap: wrap;
`;

export const TechIcon = styled.div`
  color: #3498db;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5rem;
  }

  &:not(:has(svg)) {
    font-size: 0.9rem;
  }

  &:hover {
    color: #2ecc71;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressText = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-left: auto;
  padding-left: 10px;

  @keyframes ellipsis {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
  }

  &::after {
    content: '';
    animation: ellipsis 2s infinite;
    display: inline-block;
    width: 20px;
    text-align: left;
  }
`;

export const LinkButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  position: relative;

  &[title]:hover::after {
    content: attr(title);
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
  }

  &:hover {
    color: #3498db;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 25px;
  }
`;

export const FilterButton = styled.button`
  background: ${(props) =>
    props.active ? "rgba(52, 152, 219, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(52, 152, 219, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.85rem;
    border-radius: 20px;
  }
`;
