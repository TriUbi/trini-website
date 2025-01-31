import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: transparent;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectCard = styled.div`
  background: rgba(53, 56, 83, 0.5);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${(props) => props.color || "#2c3e50"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const TechIcon = styled.div`
  color: #3498db;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2ecc71;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
`;

const LinkButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "E-handel Platform",
      description:
        "En fullständig e-handelsplattform med användarautentisering, produkthantering och betalningsintegration.",
      color: "#2980b9",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiExpress],
    },
    {
      title: "Task Management System",
      description:
        "Ett projekthanteringssystem med realtidsuppdateringar och team-samarbetsfunktioner.",
      color: "#8e44ad",
      tech: [SiReact, SiNodedotjs, SiPostgresql, SiDocker],
    },
    {
      title: "Booking System",
      description:
        "Ett bokningssystem för tjänster med kalendersync och automatiska påminnelser.",
      color: "#27ae60",
      tech: [SiReact, SiNodedotjs, SiMongodb],
    },
    {
      title: "Social Media Dashboard",
      description:
        "En dashboard för att hantera och analysera sociala medier-konton.",
      color: "#d35400",
      tech: [SiReact, SiNodedotjs, SiPostgresql],
    },
    {
      title: "Real Estate Platform",
      description:
        "En plattform för fastighetsannonser med sökfunktioner och kartintegration.",
      color: "#c0392b",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiExpress],
    },
    {
      title: "Learning Management System",
      description:
        "Ett system för online-utbildning med videokurser och framstegsspårning.",
      color: "#16a085",
      tech: [SiReact, SiNodedotjs, SiPostgresql, SiDocker],
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Mina Projekt</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage color={project.color}>
              <SiReact />
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((Icon, i) => (
                  <TechIcon key={i}>
                    <Icon />
                  </TechIcon>
                ))}
              </TechStack>
              <Links>
                <LinkButton href="#" target="_blank">
                  <FaGithub /> Kod
                </LinkButton>
                <LinkButton href="#" target="_blank">
                  <FaExternalLinkAlt /> Demo
                </LinkButton>
              </Links>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
