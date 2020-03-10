import React from "react"
import styled from "styled-components"

const Navbar = ({ visible }) => {
  return (
    <NavbarWrapper visible={visible}>
      <ul className="flex-row">
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
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  transition: background-color 0.2s ease-in-out;
  background-color: ${props => props.visible && "rgba(248, 248, 248, 0.93)}"};
  box-shadow: ${props =>
    props.visible ? "0 3px 8px rgba(0, 0, 0, 0.3)" : "none"};

  .flex-row {
    justify-content: center;
    @media (max-width: ${props => props.theme.tabletWidth}) {
      display: none;
    }

    li {
      margin: 0 2rem;
      padding: 2rem 0;
      font-size: 1.8rem;
      color: ${props =>
        props.visible ? props.theme.primaryColor : props.theme.white};
    }
  }
`

export default Navbar
