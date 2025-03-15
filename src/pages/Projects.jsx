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
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

import bokWebshop from "../assets/utveckling/bok-webshop.png";
import todoList from "../assets/utveckling/todo-list.png";
import fertilityCalc from "../assets/utveckling/simple-fertility-calculator.png";
import lettersAndCode from "../assets/utveckling/lettersandcode.png";
import smashEmoji from "../assets/utveckling/smash-the-emoji.png";
import parentsApp from "../assets/utveckling/parentsapp.png";
import tastyBurger from "../assets/utveckling/tastyburger.png";

import cleanderSite from "../assets/wordpress/cleander.png";
import prissidaSite from "../assets/wordpress/prissida.png";
import estellarSite from "../assets/wordpress/estellar.png";
import nicatakSite from "../assets/wordpress/nicatak.png";

import {
  ProjectsContainer,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechIcon,
  Links,
  LinkButton,
  FilterContainer,
  FilterButton,
} from "../styles/ProjectsStyles";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Parents App",
      description:
        "En innovativ plattform designad för att koppla samman föräldrar och skapa ett stödjande community. Appen underlättar föräldrars sociala liv genom att hjälpa dem hitta andra föräldrar med liknande intressen och livssituationer.",
      image: parentsApp,
      color: "#16a085",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiFirebase, name: "Firebase" },
        { icon: SiVite, name: "Vite" },
        { name: "Styled-components" },
        { name: "Material-UI" },
        { name: "Framer Motion" },
        { name: "React Router" },
        { name: "RESTful API" },
        { name: "Stripe API" },
      ],
      githubLink: "https://github.com/TriUbi/parents-app",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Bok Webshop",
      description:
        "En modern bokhandel online byggd med React och Vite. Komplett e-handelslösning med kundvagn och betalning.",
      image: bokWebshop,
      color: "#2980b9",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiVite, name: "Vite" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiCss3, name: "CSS3" },
      ],
      githubLink: "https://github.com/TriUbi/bok-webshop",
      hasDemo: true,
      category: "code",
      showImage: false,
    },
    {
      title: "TastyBurger",
      description:
        "En modern restauranghemsida med online-beställning och realtidsuppdateringar. Byggd med React och Node.js.",
      image: tastyBurger,
      color: "#e67e22",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
      githubLink: "https://github.com/TriUbi/tastyburger",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Todo List",
      description:
        "En elegant och användarvänlig todo-lista med drag-and-drop funktionalitet.",
      image: todoList,
      color: "#8e44ad",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      githubLink: "https://github.com/TriUbi/todo-list",
      hasDemo: true,
      category: "code",
      showImage: false,
    },
    {
      title: "Smash The Emoji",
      description:
        "Ett roligt spel byggt med React där spelaren ska matcha emojis.",
      image: smashEmoji,
      color: "#d35400",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      githubLink: "https://github.com/TriUbi/smash-emoji",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Letters & Code",
      description: "En personlig blogg som kombinerar poesi och programmering.",
      image: lettersAndCode,
      color: "#c0392b",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiNodedotjs, name: "Node.js" },
      ],
      githubLink: "https://github.com/TriUbi/letters-and-code",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Fertility Calculator",
      description:
        "Ett verktyg för att beräkna och spåra fertilitet med en intuitiv kalendervy.",
      image: fertilityCalc,
      color: "#27ae60",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiCss3, name: "CSS3" },
      ],
      githubLink: "https://github.com/TriUbi/fertility-calculator",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Estellar",
      description: "E-handelsplattform för mode och accessoarer.",
      image: estellarSite,
      color: "#2c3e50",
      tech: [{ icon: FaWordpress, name: "WordPress" }],
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
      tech: [{ icon: FaWordpress, name: "WordPress" }],
      demoLink: "https://cleander.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Prissida",
      description: "Modern prissättningssida med dynamiska priskalkylatorer.",
      image: prissidaSite,
      color: "#96588a",
      tech: [
        { icon: FaWordpress, name: "WordPress" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
      ],
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
      tech: [{ icon: FaWordpress, name: "WordPress" }],
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
              showImage={project.category === "wordpress" || project.showImage}
            >
              {project.category === "code" && !project.showImage && <SiReact />}
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech &&
                  project.tech.map((tech, i) => (
                    <TechIcon key={i}>
                      {tech.icon ? <tech.icon /> : tech.name}
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
