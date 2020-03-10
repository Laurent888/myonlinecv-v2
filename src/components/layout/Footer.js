import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <small className="text-copyright">
        &copy; Copyright 2020, Laurent Tram
      </small>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .text-copyright {
    text-align: center;
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }
`

export default Footer
