import React from "react"
import styled from "styled-components"

const TechBadge = ({ label }) => {
  return (
    <TechBadgeWrapper>
      <p>{label}</p>
    </TechBadgeWrapper>
  )
}

const TechBadgeWrapper = styled.div`
  margin-right:1rem;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.badgeColor};
  p {
    color: ${props => props.theme.darkMedium};
    font-size: 1.4rem;
    font-weight:600;
  }
`

export default TechBadge
