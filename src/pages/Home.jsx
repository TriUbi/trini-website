import Banner from "../components/Banner";
import GitHubStats from "../components/GitHubStats";
import omMigBild from "../assets/img/om-mig.png";
import bannerBg from "../assets/img/banner.jpg";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaDocker,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import styled from "styled-components";
import {
  AboutSection,
  AboutContent,
  AboutText,
  Title,
  Description,
  SkillsContainer,
  SkillTag,
  AboutImage,
} from "../styles/AboutStyles.jsx";
import { GitHubSection, GitHubLink } from "../styles/GitHubStyles.jsx";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 83, 0.8);
    pointer-events: none;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Home = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <FaDocker /> },
  ];

  return (
    <MainContainer>
      <Banner />
      <AboutSection>
        <AboutContent>
          <AboutText>
            <Title>Om mig</Title>
            <Description>
              Jag är en person som älskar att lära mig nya saker varje dag. Om
              jag faller, reser jag mig upp igen. GER INTE UPP! Har önskan att bidra till projekt
              och team som har en tydlig vision, vill växa och där alla medlemmar är
              viktiga.
            </Description>
            <Description>
              På min fritid är jag med min familj, skriver poesi och skapar små
              projekt eftersom jag har hittat min stora passion: att koda.
            </Description>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillTag key={index}>
                  {skill.icon} {skill.name}
                </SkillTag>
              ))}
            </SkillsContainer>
          </AboutText>
        </AboutContent>
      </AboutSection>
      <GitHubStats />
      <GitHubSection>
        <GitHubLink
          href="https://github.com/TriUbi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Check out my projects on GitHub
        </GitHubLink>
      </GitHubSection>
      <ImageWrapper>
        <AboutImage src={omMigBild} alt="Om mig illustration" />
      </ImageWrapper>
    </MainContainer>
  );
};

export default Home;
