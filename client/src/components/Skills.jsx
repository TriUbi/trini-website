import styled from "styled-components";
import { FaCode, FaServer, FaSearchengin } from "react-icons/fa";

const SkillsSection = styled.section`
  padding: 100px 20px;
  background: transparent;
  position: relative;
  z-index: 1;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: rgba(53, 56, 83, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  ${SkillCard}:hover & {
    color: #2ecc71;
  }
`;

const SkillTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const SkillDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <FaCode />,
      title: "Frontend",
      description:
        "Jag skapar responsiva och användarvänliga webbapplikationer med modern teknologi som React, TypeScript och Styled Components. Fokus ligger på användarupplevelse och tillgänglighet.",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      description:
        "Jag utvecklar robusta och skalbara backend-lösningar med Node.js, Express och olika databaser. API-design och säkerhet är alltid i fokus.",
    },
    {
      icon: <FaSearchengin />,
      title: "SEO",
      description:
        "Jag optimerar webbplatser för bättre synlighet i sökmotorer genom teknisk SEO, innehållsoptimering och prestandaförbättringar.",
    },
  ];

  return (
    <SkillsSection>
      <SkillsContent>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard key={index}>
              <IconContainer>{skill.icon}</IconContainer>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsSection>
  );
};

export default Skills;
