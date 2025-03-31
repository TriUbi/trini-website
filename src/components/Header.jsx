import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useState } from "react";

const HeaderContainer = styled.header`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: none;
  position: fixed;
  align-items: center;
  top: 0;
  z-index: 1000;
  isolation: isolate;
  mix-blend-mode: normal;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);
    pointer-events: none;
    z-index: -1;
  }
`;

const Logo = styled(Link)`
  flex: 1;
  position: relative;
  z-index: 2;
  img {
    width: 150px;
  }

  @media (max-width: 768px) {
    img {
      width: 120px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  a {
    color: white;
    text-shadow: 0 0 10px rgb(0, 0, 0);
    border-radius: 20px;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    transition: ease-in 0.8s;
    backdrop-filter: none;

    &:hover {
      color: #3498db;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      font-size: 24px;
      margin: 0;
      padding: 15px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 3;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background: white;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={logo} alt="Trinidad Ubilla logo" />
      </Logo>
      <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <Nav isOpen={isOpen}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Hem
        </Link>
        <Link to="/projekt" onClick={() => setIsOpen(false)}>
          Projekt
        </Link>
        <Link to="/kontakt" onClick={() => setIsOpen(false)}>
          Kontakt
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
