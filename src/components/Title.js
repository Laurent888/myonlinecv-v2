import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      <div className="bar"></div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 4rem;
    font-weight: 300;
    margin-top: 4rem;
    color: ${props => props.theme.secondaryColor};
  }
  .bar {
    width: 15rem;
    height: 3rem;
    border-bottom: 1px solid ${props => props.theme.darkMedium};
  }
`

export default Title
