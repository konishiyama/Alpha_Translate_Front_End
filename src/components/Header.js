import React, { useContext, useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";

const Container = styled.div`
  position: fixed;
  z-index: 12;
  height: 60px;
  width: 100px;
  top: 0;
  left: 0;
  background-color: #fff;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
const Toggle = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 20px;
  cursor: pointer;
  background-color: #fff;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: ${(props) => (props.open ? "-1" : "11")};

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 64px;
    background-color: #fff;
    transition: all 0.4s;
    opacity: ${(props) => (props.open ? "0" : "100%")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 23px;
  height: 1px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 23px;
    height: 1px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`;

const Logo = styled.img`
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 20px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    left: 1.5vw;
  }
`;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Container
        style={{
          backgroudColor: `#fff`,
        }}
      >
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
        <a href="/">
          <Logo src="../images/S-logo.png"></Logo>
        </a>
      </Container>
    </>
  );
};

export default Header;
