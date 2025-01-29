import styled, { keyframes } from "styled-components";
import bannerBg from "../assets/img/banner.jpg";
import htmlLogo from "../assets/img/logos/html-5.png";
import cssLogo from "../assets/img/logos/csslogo.png";
import jsLogo from "../assets/img/logos/js.png";
import sqlLogo from "../assets/img/logos/sql-server.png";
import reactLogo from "../assets/img/logos/react.png";
import gitLogo from "../assets/img/logos/git.png";
import githubLogo from "../assets/img/logos/github.png";
import wordpressLogo from "../assets/img/logos/wordpresslogo.png";
import phpLogo from "../assets/img/logos/php.png";
import nodejsLogo from "../assets/img/logos/nodejs.png";

const SkillsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 800px;
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
    background-attachment: scroll;
  }
`;

const Container = styled.div`
  h3 {
    font-size: 35px;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 25px;
      padding: 0;
    }
  }
`;

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  margin-top: 60px;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin: 20px auto;
    max-width: 300px;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LogoItem = styled.div`
  background: linear-gradient(5deg, rgb(5, 21, 55), rgb(103, 149, 171));
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  margin: 10px;
  animation: ${float} 2.5s ease-in-out infinite;

  img {
    width: 60px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    margin: 5px;

    img {
      width: 40px;
    }
  }
`;

const Skills = () => {
  const skills = [
    { logo: htmlLogo, alt: "HTML5" },
    { logo: cssLogo, alt: "CSS3" },
    { logo: jsLogo, alt: "JavaScript" },
    { logo: sqlLogo, alt: "SQL" },
    { logo: reactLogo, alt: "React" },
    { logo: gitLogo, alt: "Git" },
    { logo: githubLogo, alt: "GitHub" },
    { logo: wordpressLogo, alt: "WordPress" },
    { logo: phpLogo, alt: "PHP" },
    { logo: nodejsLogo, alt: "Node.js" },
  ];

  return (
    <SkillsSection>
      <Container>
        <h3>Kompetenser</h3>
        <LogosGrid>
          {skills.map((skill, index) => (
            <LogoItem key={index}>
              <img src={skill.logo} alt={skill.alt} />
            </LogoItem>
          ))}
        </LogosGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
