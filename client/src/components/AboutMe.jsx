import styled from "styled-components";
import aboutImg from "../assets/img/om-mig.png";
import bannerBg from "../assets/img/banner.jpg";

const AboutSection = styled.section`
  background-image: url(${bannerBg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    background-attachment: scroll;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const AboutImage = styled.img`
  border-radius: 200px;
  width: 400px;

  @media (max-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const TextContainer = styled.div`
  .about-text {
    background: linear-gradient(90deg, rgb(5, 21, 55), rgb(103, 149, 171));
    border-radius: 30px;
    margin-bottom: 30px;
    padding: 20px;
    max-width: 800px;

    h3 {
      margin-bottom: 5px;
    }

    p {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    .about-text {
      padding: 15px;
      font-size: 15px;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutSection>
      <Container>
        <AboutImage src={aboutImg} alt="Trinidad Ubilla" />
        <TextContainer>
          <div className="about-text">
            <h3>Frontend</h3>
            <p>
              Skapa snygga, användarvänliga webbsidor med fokus på imponerande
              och tillgängliga digitala upplevelser.
            </p>
          </div>
          <div className="about-text">
            <h3>Backend</h3>
            <p>
              Fokus på att utveckla snabba och optimerade back-end system samt
              API:er
            </p>
          </div>
          <div className="about-text">
            <h3>SEO</h3>
            <p>
              Ökar synlighet, optimerar innehåll för ökad trafik och resultat
            </p>
          </div>
        </TextContainer>
      </Container>
    </AboutSection>
  );
};

export default AboutMe;
