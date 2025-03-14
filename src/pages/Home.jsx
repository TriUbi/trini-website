import Banner from "../components/Banner";
import omMigBild from "../assets/img/om-mig.png";
import bannerBg from "../assets/img/banner.jpg";
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
import styled, { keyframes } from "styled-components";
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
  SkillColumn,
  SkillTitle,
} from "../styles/AboutStyles.jsx";
import { GitHubSection, GitHubLink } from "../styles/GitHubStyles.jsx";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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

const Home = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    contributions: 0,
    engagement: 0,
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateValue = (key, endValue, duration = 2000) => {
    const startTime = Date.now();
    const startValue = counts[key];

    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };

    const updateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(easedProgress * endValue);

      setCounts((prev) => ({ ...prev, [key]: currentValue }));

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          animateValue("years", 3, 1500);
          setTimeout(() => animateValue("projects", 15, 2000), 200);
          setTimeout(() => animateValue("contributions", 380, 2500), 400);
          setTimeout(() => animateValue("engagement", 200, 2000), 600);
        }
      },
      { threshold: 0.3 }
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
    { name: "Frontend", icon: "🎨", isHeader: true },
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "SEO", icon: "SEO" },
    { name: "Backend", icon: "⚙️", isHeader: true },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: "PHP" },
    { name: "Express", icon: <SiExpress /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL DB", icon: <FaDatabase /> },
  ];

  const skills = [
    // Frontend
    { name: "React", icon: <FaReact />, side: "left", position: 15 },
    { name: "TypeScript", icon: <SiTypescript />, side: "left", position: 35 },
    { name: "JavaScript", icon: <FaJs />, side: "left", position: 55 },
    { name: "HTML5", icon: <FaHtml5 />, side: "left", position: 75 },
    { name: "CSS3", icon: <FaCss3Alt />, side: "left", position: 95 },
    { name: "WordPress", icon: <FaWordpress />, side: "left", position: 115 },

    // Backend
    { name: "Node.js", icon: <FaNodeJs />, side: "right", position: 15 },
    { name: "Express", icon: <SiExpress />, side: "right", position: 35 },
    { name: "Firebase", icon: <SiFirebase />, side: "right", position: 55 },
    { name: "MongoDB", icon: <SiMongodb />, side: "right", position: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql />, side: "right", position: 95 },
    { name: "Docker", icon: <FaDocker />, side: "right", position: 115 },
  ];

  const getRandomPosition = () => ({
    moveX: Math.random() * 10 - 5,
    moveY: Math.random() * 10 - 5,
    duration: 3 + Math.random(),
    delay: Math.random() * 2,
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
              <SkillColumn>
                <SkillTitle>Frontend</SkillTitle>
                {mainSkills
                  .filter(
                    (skill) =>
                      !skill.isHeader &&
                      mainSkills.indexOf(skill) <
                        mainSkills.findIndex((s) => s.name === "Backend")
                  )
                  .map((skill, index) => (
                    <SkillTag key={index}>
                      {typeof skill.icon === "string" ? (
                        <span className="text-icon">{skill.icon}</span>
                      ) : (
                        skill.icon
                      )}{" "}
                      {skill.name}
                    </SkillTag>
                  ))}
              </SkillColumn>
              <SkillColumn>
                <SkillTitle>Backend</SkillTitle>
                {mainSkills
                  .filter(
                    (skill) =>
                      !skill.isHeader &&
                      mainSkills.indexOf(skill) >
                        mainSkills.findIndex((s) => s.name === "Backend")
                  )
                  .map((skill, index) => (
                    <SkillTag key={index}>
                      {typeof skill.icon === "string" ? (
                        <span className="text-icon">{skill.icon}</span>
                      ) : (
                        skill.icon
                      )}{" "}
                      {skill.name}
                    </SkillTag>
                  ))}
              </SkillColumn>
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
