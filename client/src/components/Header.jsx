import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const HeaderContainer = styled.header`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  align-items: center;
  top: 0;
  z-index: 1;
`;

const Logo = styled(Link)`
  flex: 1;
  img {
    width: 150px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-shadow: 0 0 10px rgb(0, 0, 0);
    border-radius: 20px;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    transition: ease-in 0.8s;

    &:hover {
      color: #3498db;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 16px;
      margin-right: 10px;
      padding: 8px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={logo} alt="Trinidad Ubilla logo" />
      </Logo>
      <Nav>
        <Link to="/">Hem</Link>
        <Link to="/projekt">Projekt</Link>
        <Link to="/kontakt">Kontakt</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
