import React from "react"
import styled from "styled-components"

const HeaderSection = () => {
  return (
    <HeaderSectionWrapper>
      <h1>Laurent Tram: A passionate Frontend developer based in Stockholm</h1>
    </HeaderSectionWrapper>
  )
}

const HeaderSectionWrapper = styled.section`
  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: transparent;
  }
`

export default HeaderSection
