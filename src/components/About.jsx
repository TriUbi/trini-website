import styled from "styled-components";
import omMigImage from "../assets/img/om-mig.png";

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #1a2238;

  @media (max-width: 700px) {
    padding: 20px 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 50px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 10px;
    padding: 0 15px;
  }
`;

const AboutContent = styled.div`
  flex: 1;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

const TextSection = styled.div`
  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

const Title = styled.h2`
  font-size: 80px;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  color: white;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 600px;

  @media (max-width: 700px) {
    font-size: 11px;
    line-height: 1.3;
    margin-bottom: 5px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 0;
  }
`;

const StatBox = styled.div`
  background-color: transparent;
  text-align: left;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const StatNumber = styled.h3`
  font-size: 48px;
  color: #3498db;
  margin-bottom: 5px;

  @media (max-width: 700px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

const StatText = styled.p`
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 700px) {
    font-size: 10px;
    letter-spacing: 0.5px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 5px;
  }
`;

const TechItem = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  border: 1px solid #3498db;
  border-radius: 20px;
  padding: 8px 15px;
  color: white;
  font-size: 14px;

  @media (max-width: 700px) {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 10px;
    text-align: left;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutContent>
          <TextSection>
            <Title>Om mig</Title>
            <Description>
              Jag är en person som älskar att lära mig nya saker varje dag. Om
              jag faller, reser jag mig upp igen. Jag vill bidra till projekt
              och team som har en tydlig vision och där alla medlemmar är
              viktiga.
            </Description>
            <Description>
              På min fritid är jag en familjeperson som älskar att laga mat och
              umgås med mina nära och kära.
            </Description>
          </TextSection>
          <StatsGrid>
            <StatBox>
              <StatNumber>2+</StatNumber>
              <StatText>Års erfarenhet</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>15+</StatNumber>
              <StatText>Projekt genomförda</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>380+</StatNumber>
              <StatText>Kontributioner</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>200%</StatNumber>
              <StatText>Engagemang</StatText>
            </StatBox>
          </StatsGrid>
          <TechStack>
            <TechItem>HTML5</TechItem>
            <TechItem>CSS3</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>React</TechItem>
            <TechItem>TypeScript</TechItem>
            <TechItem>Node.js</TechItem>
            <TechItem>Express</TechItem>
            <TechItem>MongoDB</TechItem>
          </TechStack>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
