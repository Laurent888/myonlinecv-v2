import React from "react"
import styled from "styled-components"

const MenuIcon = () => {
  return (
    <MenuIconWrapper>
      <div className="bar"></div>
    </MenuIconWrapper>
  )
}

const MenuIconWrapper = styled.div`
  height: 22px;
  width: 35px;
  display: flex;
  align-items: center;
  position: relative;

  .bar {
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.white};
  }

  .bar::before,
  .bar::after {
    content: "";
    height: 2px;
    background-color: ${props => props.theme.white};
    position: absolute;
  }

  .bar::before {
    width: 100%;
    transform: translateY(-11px);
  }

  .bar::after {
    width: 80%;
    transform: translateY(11px);
  }
`

export default MenuIcon
