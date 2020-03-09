import React from "react"
import styled from "styled-components"

const SideSquareTitle = props => {
  return (
    <SideSquareTitleWrapper right={props.right}>
      <h3>{props.title}</h3>
    </SideSquareTitleWrapper>
  )
}

const SideSquareTitleWrapper = styled.div`
  width: 35rem;
  padding: 2rem;
  background-color: rgb(153, 72, 25);
  margin-left: ${props => (props.right ? "auto" : "none")};
  ${props =>
    props.right
      ? "clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 0%)"
      : "clip-path: polygon(100% 0, 100% 0%, 85% 98%, 0 99%, 0 0)"};

  h3 {
    color: ${props => props.theme.white};
    font-size: 2.5rem;
    ${props => (props.right ? "text-align: end;" : "text-align: start;")}
    text-transform: uppercase;
  }
`

export default SideSquareTitle
