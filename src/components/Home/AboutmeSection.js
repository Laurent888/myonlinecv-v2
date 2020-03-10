import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import AboutmeSectionWrapper from "./AboutMeSection.styles"

const AboutmeSection = () => {
  const { file, presentation } = useStaticQuery(getMyMyData)

  return (
    <AboutmeSectionWrapper id="aboutme-section">
      <div className="container flex-row">
        <div className="photo-container">
          <Image fluid={file.childImageSharp.fluid} className="photo" />
        </div>
        <div className="description">
          <div dangerouslySetInnerHTML={{ __html: presentation.html }}></div>
        </div>
      </div>
    </AboutmeSectionWrapper>
  )
}

const getMyMyData = graphql`
  query {
    file(relativePath: { eq: "CV_photo-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    presentation: markdownRemark(frontmatter: { title: { eq: "About me" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default AboutmeSection
