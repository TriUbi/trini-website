import styled from "styled-components";
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

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: rgba(24, 55, 110, 0.95);
`;

const AboutSection = styled.section`
  padding: 60px 20px;
  position: relative;
  z-index: 1;
`;

const AboutContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

const AboutText = styled.div`
  color: white;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 120px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  color: white;
  font-size: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 1.4em;
  }

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  align-self: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ImageSection = styled.section`
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  padding: 30px 20px 120px;
  z-index: 1;
  min-height: 60vh;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 56, 83, 0.2);
    z-index: -1;
  }
`;

const ImageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 350px 1fr;
  gap: 10px;
  align-items: center;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const SkillsLeft = styled.div`
  position: relative;
  height: 100%;
`;

const SkillsRight = styled.div`
  position: relative;
  height: 100%;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
  z-index: 2;
`;

const SkillBubble = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  animation: float ${(props) => props.duration + 4}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.9;
  backdrop-filter: blur(5px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  svg {
    font-size: 1.5em;
  }

  &:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  @keyframes float {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(10px, -10px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const GitHubSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: rgba(53, 56, 83, 0.5);
  backdrop-filter: blur(10px);
`;

const GitHubLink = styled.a`
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

          // Animate each number with a delay
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
              Jag är en person som älskar att lära mig nya saker varje dag. Om
              jag faller, reser jag mig upp igen. Jag vill bidra till projekt
              och team som har en tydlig vision och där alla medlemmar är
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
        </AboutContent>
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
