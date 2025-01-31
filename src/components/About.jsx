import styled from "styled-components";
import omMigImage from "../assets/img/om-mig.png";

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #1a2238;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: 0 15px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 80px;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  color: white;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
    margin: 0 auto 20px;
  }
`;

const ExperienceBox = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #3498db;
  margin-top: 30px;
  max-width: 200px;

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

const ExperienceNumber = styled.h3`
  font-size: 48px;
  color: #3498db;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ExperienceText = styled.p`
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutContent>
          <Title>Om mig</Title>
          <Description>
            Jag är en person som älskar att lära mig nya saker varje dag. Om jag
            faller, reser jag mig upp igen. Jag vill bidra till projekt och team
            som har en tydlig vision och där alla medlemmar är viktiga.
          </Description>
          <Description>
            På min fritid är jag en familjeperson som älskar att laga mat och
            umgås med mina nära och kära.
          </Description>
          <ExperienceBox>
            <ExperienceNumber>2+</ExperienceNumber>
            <ExperienceText>Års erfarenhet</ExperienceText>
          </ExperienceBox>
        </AboutContent>
        <ImageContainer>
          <AboutImage src={omMigImage} alt="Om mig" />
        </ImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
