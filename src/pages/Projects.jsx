import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaWordpress,
  FaLock,
} from "react-icons/fa";
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
import modbusVideo from "../assets/videos/Modbus-simulation.mov";
import todoVideo from "../assets/videos/Todo-app.mov";
import smashEmojisVideo from "../assets/videos/smashemojis.mov";
import parentsAppVideo from "../assets/videos/parentsappdemo.mov";
import calculadoraVideo from "../assets/videos/calculadora.mov";

import cleanderSite from "../assets/wordpress/cleander.png";
import prissidaSite from "../assets/wordpress/prissida.png";
import estellarSite from "../assets/wordpress/estellar.png";
import nicatakSite from "../assets/wordpress/nicatak.png";
import catvisualsSite from "../assets/wordpress/catvisuals.png";

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
  ProgressText,
  ShowMoreButton,
} from "../styles/ProjectsStyles";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

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
      video: parentsAppVideo,
    },
    {
      title: "Bok Webshop",
      description:
        "En modern bokhandel online med Stripe-integration. Användare kan registrera sig, lägga till produkter i kundvagnen och genomföra betalningar.",
      image: bokWebshop,
      color: "#2980b9",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { name: "Stripe API" },
      ],
      githubLink: "https://github.com/TriUbi/bok-webshop",
      hasDemo: true,
      category: "code",
      showImage: false,
    },
    {
      title: "TastyBurger",
      description:
        "Ett grupprojekt utvecklat under utbildningen. En modern restauranghemsida. Projektet demonstrerar komponentbaserad arkitektur, state management och agilt teamarbete med Git/GitHub.",
      image: tastyBurger,
      color: "#e67e22",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiFirebase, name: "Firebase" },
        { icon: FaGithub, name: "GitHub" },
        { name: "Sass" },
        { name: "React Router" },
      ],
      githubLink: "https://github.com/TriUbi/the-restaurant-team",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Todo List",
      description:
        "En modern och interaktiv att-göra-lista med ljust/mörkt tema, uppgiftshantering och minimalistisk design. Byggd med React, TypeScript och Styled Components.",
      image: todoList,
      color: "#8e44ad",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiVite, name: "Vite" },
        { name: "Styled-components" },
        { name: "Ant Design" },
      ],
      githubLink: "https://github.com/TriUbi/todo-list",
      demoLink: "https://triubi.github.io/my-todo-app/",
      hasDemo: true,
      category: "code",
      showImage: true,
      video: todoVideo,
    },
    {
      title: "Smash The Emoji",
      description:
        "Ett interaktivt spel där spelaren ska klicka på så många rörliga emojis som möjligt innan tiden tar slut. Spelet innehåller ljudeffekter och konfettianimation för att fira slutpoängen.",
      image: smashEmoji,
      color: "#d35400",
      tech: [
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      githubLink: "https://github.com/TriUbi/smash-emoji",
      demoLink: "https://triubi.github.io/smash-the-emojis/",
      hasDemo: true,
      category: "code",
      showImage: true,
      video: smashEmojisVideo,
    },
    {
      title: "Letters & Code",
      description:
        "En innovativ plattform där författare och läsare möts. Författare kan enkelt publicera och sälja sina verk genom Stripe-integration, medan läsare får tillgång till unik poesi och litteratur. Innehåller autentisering och realtidsdatabas. [Under utveckling]",
      image: lettersAndCode,
      color: "#c0392b",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiFirebase, name: "Firebase" },
        { name: "Stripe API" },
        { name: "React Router" },
        { name: "Styled-components" },
      ],
      githubLink: "https://github.com/TriUbi/letters-and-code",
      demoLink: "https://letterandcode.web.app/",
      hasDemo: true,
      category: "code",
      showImage: true,
    },
    {
      title: "Fertility Calculator",
      description:
        "En enkel fertilitetsräknare som hjälper användare att beräkna sin fertila period. Appen stöder både engelska och spanska, vilket gör det enkelt för användare att växla mellan språken. Byggd med fokus på användarvänlighet och tillgänglighet.",
      image: fertilityCalc,
      color: "#27ae60",
      tech: [
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      githubLink: "https://github.com/TriUbi/fertility-calculator",
      demoLink: "https://triubi.github.io/fertility-calulator-es-en/",
      hasDemo: true,
      category: "code",
      showImage: true,
      video: calculadoraVideo,
    },
    {
      title: "Estellar",
      description:
        "Webbyrå under utveckling med fokus på moderna digitala lösningar.",
      image: estellarSite,
      color: "#2c3e50",
      tech: [{ icon: FaWordpress, name: "WordPress" }],
      demoLink: "https://estellar.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "CatVisuals",
      description:
        "Modern företagshemsida för en professionell fotograf. Sidan presenterar olika fotopaket, portfolio och bokningssystem. Designad med fokus på visuell presentation och användarvänlighet.",
      image: catvisualsSite,
      color: "#2c3e50",
      tech: [{ icon: FaWordpress, name: "WordPress" }],
      demoLink: "https://catvisuals.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Cleander",
      description:
        "Professionell företagshemsida för städtjänster med bokningssystem. Migrerad från Wix till WordPress för bättre prestanda och anpassningsbarhet.",
      image: cleanderSite,
      color: "#21759b",
      tech: [{ icon: FaWordpress, name: "WordPress" }],
      demoLink: "https://cleander.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Prissida",
      description:
        "Modern prissättningssida för Wndy AB med två dynamiska priskalkylatorer utvecklade med JavaScript. Hjälper kunder att enkelt beräkna kostnader för olika tjänster.",
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
        "Företagshemsida för en takläggare firma. Modern design med fokus på att presentera deras tjänster och expertis inom takläggning. Migrerad från Wix till WordPress för förbättrad funktionalitet.",
      image: nicatakSite,
      color: "#34495e",
      tech: [{ icon: FaWordpress, name: "WordPress" }],
      demoLink: "https://nicatak.se",
      hasDemo: true,
      category: "wordpress",
    },
    {
      title: "Modbus-Simulator Web App",
      description:
        "Detta projekt är ett fullstack web app för att visa och styra enheter i ett sjukhusmiljö via en Modbus-simulator.",
      color: "#2c3e50",
      tech: [
        { name: "C#" },
        { name: "ASP.NET Core Web API" },
        { name: "Blazor Server" },
        { icon: SiDocker, name: "Docker" },
        { name: "MySQL" },
      ],
      githubLink: "https://github.com/TriUbi/modbusTest-v1",
      hasDemo: false,
      category: "code",
      showImage: true,
      video: modbusVideo,
    },
    {
      title: "Subscription Tracker",
      description:
        "En modern webbapplikation som hjälper användare att hantera och spåra månatliga prenumerationstjänster. Håll koll på din budget och övervaka dina streaming-utgifter på ett ställe.",
      color: "#3498db",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiVite, name: "Vite" },
        { icon: SiCss3, name: "CSS3" },
      ],
      githubLink: "https://github.com/TriUbi/Subscription_tracker",
      hasDemo: true,
      category: "code",
      showImage: false,
    },
    
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const showMoreButton = visibleProjects < filteredProjects.length;

  return (
    <ProjectsContainer>
      <Title>Mina Projekt</Title>
      <FilterContainer>
        <FilterButton
          active={activeFilter === "all"}
          onClick={() => {
            setActiveFilter("all");
            setVisibleProjects(6);
          }}
        >
          Alla Projekt
        </FilterButton>
        <FilterButton
          active={activeFilter === "code"}
          onClick={() => {
            setActiveFilter("code");
            setVisibleProjects(6);
          }}
        >
          Programmering
        </FilterButton>
        <FilterButton
          active={activeFilter === "wordpress"}
          onClick={() => {
            setActiveFilter("wordpress");
            setVisibleProjects(6);
          }}
        >
          WordPress
        </FilterButton>
      </FilterContainer>
      <ProjectsGrid>
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage
              color={project.color}
              image={project.image}
              category={project.category}
              showImage={project.category === "wordpress" || project.showImage}
              video={project.video}
            >
              {project.video ? (
                <video autoPlay loop muted playsInline poster={project.image}>
                  <source src={project.video} type="video/mp4" />
                  Tu navegador no soporta el tag de video.
                </video>
              ) : (
                project.category === "code" && !project.showImage && <SiReact />
              )}
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
                {project.title === "Parents App" ? (
                  <LinkButton
                    as="span"
                    title="Denna demo är skyddad av upphovsrätt"
                    style={{ cursor: "not-allowed" }}
                  >
                    <FaLock /> Demo <ProgressText>in progress</ProgressText>
                  </LinkButton>
                ) : project.category === "code" ? (
                  <>
                    <LinkButton
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </LinkButton>
                    <LinkButton
                      href={
                        project.title === "Bok Webshop"
                          ? "https://github.com/TriUbi/Book-Webshop"
                          : project.title === "TastyBurger"
                          ? "https://github.com/TriUbi/the-restaurant-team"
                          : project.demoLink || project.githubLink
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />{" "}
                      {project.title === "Bok Webshop" ||
                      project.title === "TastyBurger"
                        ? "Repo"
                        : "Demo"}
                      {(project.title === "Letters & Code" ||
                        project.title === "Subscription Tracker" ||
                        project.title === "Bok Webshop") && (
                        <ProgressText>in progress</ProgressText>
                      )}
                    </LinkButton>
                  </>
                ) : (
                  <LinkButton
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Link
                  </LinkButton>
                )}
              </Links>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      {showMoreButton && (
        <ShowMoreButton onClick={handleShowMore}>
          Visa fler projekt
        </ShowMoreButton>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
