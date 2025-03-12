import Banner from "../components/Banner";
import omMigBild from "../assets/img/om-mig.png";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaServer,
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
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  AboutSection,
  AboutContent,
  AboutText,
  Title,
  Description,
  SkillsContainer,
  SkillTag,
  StatsContainer,
  StatsTitle,
  StatsWrapper,
  StatItem,
  StatNumber,
  StatLabel,
  ImageSection,
  ImageContainer,
  SkillsLeft,
  SkillsRight,
  AboutImage,
  SkillBubble,
} from "../styles/AboutStyles.jsx";
import { GitHubSection, GitHubLink } from "../styles/GitHubStyles.jsx";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: rgba(24, 55, 110, 0.95);
  overflow: hidden;
`;

const Home = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    contributions: 0,
    engagement: 0,
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateValue = (key, endValue, duration = 1500) => {
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      if (current === steps) {
        clearInterval(timer);
        setCounts((prev) => ({ ...prev, [key]: endValue }));
      } else {
        const progress = current / steps;
        const currentValue = Math.floor(endValue * progress);
        setCounts((prev) => ({ ...prev, [key]: currentValue }));
      }
    }, stepDuration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          setTimeout(() => animateValue("years", 2, 1000), 0);
          setTimeout(() => animateValue("projects", 15, 1500), 500);
          setTimeout(() => animateValue("contributions", 380, 2000), 1000);
          setTimeout(() => animateValue("engagement", 200, 1500), 1500);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const mainSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, side: "left", position: 15 },
    { name: "CSS3", icon: <FaCss3Alt />, side: "left", position: 35 },
    { name: "JavaScript", icon: <FaJs />, side: "left", position: 55 },
    { name: "React", icon: <FaReact />, side: "left", position: 75 },
    { name: "TypeScript", icon: <SiTypescript />, side: "left", position: 95 },
    { name: "Node.js", icon: <FaNodeJs />, side: "right", position: 15 },
    { name: "Express", icon: <SiExpress />, side: "right", position: 35 },
    { name: "MongoDB", icon: <SiMongodb />, side: "right", position: 55 },
    { name: "PostgreSQL", icon: <SiPostgresql />, side: "right", position: 75 },
    { name: "Firebase", icon: <SiFirebase />, side: "right", position: 90 },
    { name: "Docker", icon: <FaDocker />, side: "right", position: 110 },
  ];

  const getRandomPosition = () => ({
    moveX: Math.random() * 20 - 10,
    moveY: Math.random() * 20 - 10,
    duration: 4 + Math.random() * 2,
    delay: Math.random() * 3,
  });

  const leftSkills = skills.filter((skill) => skill.side === "left");
  const rightSkills = skills.filter((skill) => skill.side === "right");

  return (
    <MainContainer>
      <Banner />
      <AboutSection>
        <AboutContent>
          <AboutText>
            <Title>Om mig</Title>
            <Description>
              Är en engagerad Fullstackutvecklare som vill bidra till innovativa
              projekt. Jag trivs med både frontend- och backendutveckling. Jag
              är passionerad i allt jag gör och vill fortsätta lära mig och
              utveckla mina färdigheter tillsammans med rätt företag
            </Description>
            <Description>
              Erfaren inom fullstackutveckling med speciella kunskaper inom
              React, TypeScript och JavaScript. Arbetat med React och Firebase
              för att bygga och optimera digitala lösningar för e-handel, SaaS
              och realtidsapplikationer. Har erfarenhet av API- integrationer,
              betalningslösningar, autentisering och databashantering i
              Firestore och SQL. Djup kunskap inom WordPress och SEO. Arbetat
              med styling i Styled Components, CSS och SASS. Har god förståelse
              för agila metoder och parprogrammering. Ständig utveckling och
              lärande är en naturlig del av mitt arbete.
            </Description>
            <SkillsContainer>
              {mainSkills.map((skill, index) => (
                <SkillTag key={index}>
                  {skill.icon} {skill.name}
                </SkillTag>
              ))}
            </SkillsContainer>
          </AboutText>
        </AboutContent>
        <StatsWrapper>
          <StatsTitle>Min Erfarenhet i Siffror</StatsTitle>
          <StatsContainer ref={statsRef}>
            <StatItem>
              <StatNumber>{counts.years}+</StatNumber>
              <StatLabel>Års Erfarenhet</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{counts.projects}+</StatNumber>
              <StatLabel>Projekt Genomförda</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{counts.contributions}+</StatNumber>
              <StatLabel>Kontributioner</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{counts.engagement}%</StatNumber>
              <StatLabel>Engagemang</StatLabel>
            </StatItem>
          </StatsContainer>
        </StatsWrapper>
      </AboutSection>
      <ImageSection>
        <ImageContainer>
          <SkillsLeft>
            {leftSkills.map((skill, index) => {
              const pos = getRandomPosition();
              return (
                <SkillBubble
                  key={index}
                  style={{
                    top: `${skill.position}%`,
                    left: `${20 + (index % 2) * 20}%`,
                  }}
                  moveX={pos.moveX}
                  moveY={pos.moveY}
                  duration={pos.duration}
                  delay={pos.delay}
                >
                  {skill.icon}
                </SkillBubble>
              );
            })}
          </SkillsLeft>
          <AboutImage src={omMigBild} alt="Om mig illustration" />
          <SkillsRight>
            {rightSkills.map((skill, index) => {
              const pos = getRandomPosition();
              return (
                <SkillBubble
                  key={index}
                  style={{
                    top: `${skill.position}%`,
                    right: `${20 + (index % 2) * 20}%`,
                  }}
                  moveX={pos.moveX}
                  moveY={pos.moveY}
                  duration={pos.duration}
                  delay={pos.delay}
                >
                  {skill.icon}
                </SkillBubble>
              );
            })}
          </SkillsRight>
        </ImageContainer>
      </ImageSection>
      <GitHubSection>
        <GitHubLink
          href="https://github.com/TriUbi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Check out my projects on GitHub
        </GitHubLink>
      </GitHubSection>
    </MainContainer>
  );
};

export default Home;
