import styled from "styled-components";
import { Link } from "react-router-dom";
import emailIcon from "../assets/img/social/email.png";
import linkedinIcon from "../assets/img/social/linkedin.png";
import githubIcon from "../assets/img/social/github.contact.png";

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, rgb(24, 55, 110), rgb(5, 21, 55));
  color: white;
  width: 100%;
  height: 230px;
  padding: 10px;
  font-size: 15px;
  padding-top: 60px;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 100%;
`;

const SocialContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.img`
  width: 35px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const RightsContainer = styled.div`
  text-align: center;
  font-size: 13px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialContainer>
          <Link to="/contact">
            <h3>Kontakt &#128072;</h3>
          </Link>
          <SocialLinks>
            <a
              href="mailto:triubilla@gmail.com?subject=Kontakt från Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="Skicka ett mail"
            >
              <SocialIcon src={emailIcon} alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/%E2%9A%A1%EF%B8%8Ftrinidad-ubilla-46924429a/"
              target="_blank"
              rel="noopener noreferrer"
              title="Besök LinkedIn profil"
            >
              <SocialIcon src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/TriUbi"
              target="_blank"
              rel="noopener noreferrer"
              title="Besök GitHub profil"
            >
              <SocialIcon src={githubIcon} alt="GitHub" />
            </a>
          </SocialLinks>
        </SocialContainer>
      </FooterContent>
      <RightsContainer>
        <p>Trinidad Ubilla {currentYear} | © All rights reserved</p>
      </RightsContainer>
    </FooterContainer>
  );
};

export default Footer;
