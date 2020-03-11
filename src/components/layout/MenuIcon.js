import React from "react"
import styled from "styled-components"

const MenuIcon = ({ visible, open }) => {
  return (
    <MenuIconWrapper visible={visible} open={open}>
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
    width: ${props => (props.open ? "0%" : "100%")};
    height: 2px;
    transition: background-color 0.2s ease-in-out;
    background-color: ${props =>
      props.visible
        ? props.theme.darkMedium
        : props.open
        ? props.theme.darkMedium
        : props.theme.white};
  }

  .bar::before,
  .bar::after {
    content: "";
    height: 2px;
    transition: background-color 0.3s ease-in-out;
    background-color: ${props =>
      props.visible
        ? props.theme.darkMedium
        : props.open
        ? props.theme.darkMedium
        : props.theme.white};
    position: absolute;
  }

  .bar::before {
    ${props =>
      props.open
        ? "width: 100%; transform:rotate(45deg);"
        : "width: 100%;transform: translateY(-11px);"}
  }

  .bar::after {
    ${props =>
      props.open
        ? "width: 100%; transform:rotate(-45deg);"
        : "width: 80%;transform: translateY(11px);"}
  }
`

export default MenuIcon
