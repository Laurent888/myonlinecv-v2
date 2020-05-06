import React, { useState } from "react"
import styled from "styled-components"

import MenuIcon from "./MenuIcon"

const Navbar = ({ visible }) => {
  const [navVisible, setNavVisible] = useState(false)

  return (
    <NavbarWrapper visible={visible} navVisible={navVisible}>
      <ul className="flex-row" onClick={() => setNavVisible(false)}>
        <li>
          <a href="#skill-section">Tech Skills</a>{" "}
        </li>
        <li>
          <a href="#portfolio-section">Portfolio</a>
        </li>
        <li>
          <a href="#aboutme-section">About me</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={() => setNavVisible(!navVisible)}>
        <MenuIcon visible={visible} open={navVisible} />
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  transition: background-color 0.2s ease-in-out;
  background-color: ${props => props.visible && "rgba(50, 50, 50, 0.93)}"};
  box-shadow: ${props =>
    props.visible ? "0 3px 8px rgba(0, 0, 0, 0.3)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;

  .flex-row {
    justify-content: center;

    li {
      margin: 0 2rem;
      padding: 2rem 0;
      font-size: 1.8rem;
      color: ${props =>
        props.visible ? props.theme.white : props.theme.white};
    }

    @media (max-width: ${props => props.theme.tabletWidth}) {
      background-color: rgb(240, 240, 240);
      position: fixed;
      top: 0;
      display: ${props => (props.navVisible ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      width: 100%;

      li {
        text-align: center;
        width: 100%;
        padding: 3rem 0;
        color: ${props => props.theme.primaryColor};
        border-bottom: 1px solid ${props => props.theme.darkLight};
      }
    }
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    background-color: transparent;
    box-shadow: none;
    .menu-icon {
      display: block;
      position: fixed;
      right: 3rem;
      top: 2rem;
    }
  }
`

export default Navbar
