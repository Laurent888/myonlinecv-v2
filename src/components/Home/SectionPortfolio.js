import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SingleProject from "./SingleProject"

const SectionPortfolio = () => {
  const { data } = useStaticQuery(getProjectData)
  const edges = data.edges

  const renderedProject = edges.map(({ node }, idx) => (
    <SingleProject
      key={`project-${idx}`}
      props={{ ...node }}
      left={idx % 2 === 0 && true}
    />
  ))

  return (
    <SectionPortfolioWrapper id="portfolio-section">
      {renderedProject}
    </SectionPortfolioWrapper>
  )
}

const getProjectData = graphql`
  query {
    data: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            url
            imagePath {
              childImageSharp {
                fluid(maxWidth: 691) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

const SectionPortfolioWrapper = styled.section`
  padding: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default SectionPortfolio
