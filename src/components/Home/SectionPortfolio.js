import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionPortfolioWrapper from "./SectionPortfolio.styles"

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
            techUsed
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

export default SectionPortfolio
