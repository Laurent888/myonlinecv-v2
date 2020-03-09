import React from "react"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul className="flex-row">
        <li>Tech Skills</li>
        <li>Portfolio</li>
        <li>Experiences</li>
        <li>Contact</li>
      </ul>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;

  .flex-row {
    justify-content: center;

    li {
      margin: 0 2rem;
      padding: 2rem 0;
      font-size: 1.8rem;
      color: ${props => props.theme.white};
    }
  }
`

export default Navbar
