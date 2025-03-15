import styled from "styled-components";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaWordpress } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
} from "react-icons/si";

// Importar imágenes de desarrollo
import bokWebshop from "../assets/utveckling/bok-webshop.png";
import todoList from "../assets/utveckling/todo-list.png";
import fertilityCalc from "../assets/utveckling/simple-fertility-calculator.png";
import lettersAndCode from "../assets/utveckling/lettersandcode.png";
import smashEmoji from "../assets/utveckling/smash-the-emoji.png";
import parentsApp from "../assets/utveckling/parentsapp.png";
import tastyBurger from "../assets/utveckling/tastyburger.png";

// Importar imágenes de WordPress
import cleanderSite from "../assets/wordpress/cleander.png";
import prissidaSite from "../assets/wordpress/prissida.png";
import estellarSite from "../assets/wordpress/estellar.png";
import nicatakSite from "../assets/wordpress/nicatak.png";

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

const ProjectImage = styled.div`
  height: 250px;
  background: ${(props) =>
    props.category === "code" ? props.color || "#2c3e50" : "transparent"};
  background-image: ${(props) =>
    props.category === "wordpress" ? `url(${props.image})` : "none"};
  background-size: ${(props) =>
    props.category === "wordpress" ? "cover" : "contain"};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.category === "wordpress" ? "0" : "20px")};
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
      props.category === "wordpress"
        ? "none"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))"};
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: ${(props) =>
      props.category === "wordpress"
        ? "none"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))"};
  }
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const FilterButton = styled.button`
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
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Parents App",
      description:
        "En app för föräldrar att organisera barnens aktiviteter och schema.",
      image: parentsApp,
      color: "#16a085",
      tech: [SiReact, SiNodedotjs, SiMongodb],
      githubLink: "https://github.com/TriUbi/parents-app",
      hasDemo: true,
      category: "code",
    },
    {
      title: "TastyBurger",
      description:
        "En modern restauranghemsida med online-beställning och realtidsuppdateringar. Byggd med React och Node.js.",
      image: tastyBurger,
      color: "#e67e22",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      githubLink: "https://github.com/TriUbi/tastyburger",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Bok Webshop",
      description:
        "En modern bokhandel online byggd med React och Vite. Komplett e-handelslösning med kundvagn och betalning.",
      image: bokWebshop,
      color: "#2980b9",
      tech: [SiReact, SiVite, SiJavascript, SiCss3],
      githubLink: "https://github.com/TriUbi/bok-webshop",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Todo List",
      description:
        "En elegant och användarvänlig todo-lista med drag-and-drop funktionalitet.",
      image: todoList,
      color: "#8e44ad",
      tech: [SiReact, SiJavascript],
      githubLink: "https://github.com/TriUbi/todo-list",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Fertility Calculator",
      description:
        "Ett verktyg för att beräkna och spåra fertilitet med en intuitiv kalendervy.",
      image: fertilityCalc,
      color: "#27ae60",
      tech: [SiReact, SiJavascript, SiCss3],
      githubLink: "https://github.com/TriUbi/fertility-calculator",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Letters & Code",
      description: "En personlig blogg som kombinerar poesi och programmering.",
      image: lettersAndCode,
      color: "#c0392b",
      tech: [SiReact, SiNodedotjs],
      githubLink: "https://github.com/TriUbi/letters-and-code",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Smash The Emoji",
      description:
        "Ett roligt spel byggt med React där spelaren ska matcha emojis.",
      image: smashEmoji,
      color: "#d35400",
      tech: [SiReact, SiJavascript],
      githubLink: "https://github.com/TriUbi/smash-emoji",
      hasDemo: true,
      category: "code",
    },
    {
      title: "Estellar",
      description: "E-handelsplattform för mode och accessoarer.",
      image: estellarSite,
      color: "#2c3e50",
      tech: [FaWordpress],
      demoLink: "https://estellar.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Cleander",
      description:
        "Professionell företagshemsida för städtjänster med bokningssystem.",
      image: cleanderSite,
      color: "#21759b",
      tech: [FaWordpress],
      demoLink: "https://cleander.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Prissida",
      description: "Modern prissättningssida med dynamiska priskalkylatorer.",
      image: prissidaSite,
      color: "#96588a",
      tech: [FaWordpress, SiJavascript, SiHtml5, SiCss3],
      demoLink: "https://www.wndy.se/priser/",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Nicatak",
      description:
        "Företagshemsida med fokus på visuell presentation och kundinteraktion.",
      image: nicatakSite,
      color: "#34495e",
      tech: [FaWordpress],
      demoLink: "https://nicatak.se",
      hasDemo: true,
      category: "wordpress",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <ProjectsContainer>
      <Title>Mina Projekt</Title>
      <FilterContainer>
        <FilterButton
          active={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        >
          Alla Projekt
        </FilterButton>
        <FilterButton
          active={activeFilter === "code"}
          onClick={() => setActiveFilter("code")}
        >
          Utvecklingsprojekt
        </FilterButton>
        <FilterButton
          active={activeFilter === "wordpress"}
          onClick={() => setActiveFilter("wordpress")}
        >
          WordPress
        </FilterButton>
      </FilterContainer>
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage
              color={project.color}
              image={project.image}
              category={project.category}
            >
              {project.category === "code" && <SiReact />}
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
                    <FaExternalLinkAlt />{" "}
                    {project.category === "wordpress" ? "Link" : "Demo"}
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
