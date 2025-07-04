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
      title: "Subscription Tracker",
      description:
        "En modern webbapplikation byggd med React och Vite som hjälper dig hantera och spåra dina månatliga streamingtjänster. Håll koll på din budget och övervaka dina utgifter på ett ställe.",
      color: "#2980b9",
      tech: [SiReact, SiNodedotjs],
      githubLink: "https://github.com/TriUbi/Subscription_tracker",
      demoLink: "https://triubi.github.io/Subscription_tracker/",
      hasDemo: true,
    },
    {
      title: "Task Management System",
      description:
        "Ett projekthanteringssystem med realtidsuppdateringar och team-samarbetsfunktioner.",
      color: "#8e44ad",
      tech: [SiReact, SiNodedotjs, SiPostgresql, SiDocker],
      githubLink: "",
      demoLink: "",
      hasDemo: false,
    },
    {
      title: "Booking System",
      description:
        "Ett bokningssystem för tjänster med kalendersync och automatiska påminnelser.",
      color: "#27ae60",
      tech: [SiReact, SiNodedotjs, SiMongodb],
      githubLink: "",
      demoLink: "",
      hasDemo: false,
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
                {project.tech &&
                  project.tech.map((Icon, i) => (
                    <TechIcon key={i}>
                      <Icon />
                    </TechIcon>
                  ))}
              </TechStack>
              <Links>
                {project.githubLink && (
                  <LinkButton
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Kod
                  </LinkButton>
                )}
                {project.hasDemo && project.demoLink && (
                  <LinkButton
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </LinkButton>
                )}
              </Links>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
