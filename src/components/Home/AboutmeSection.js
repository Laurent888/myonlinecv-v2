import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const AboutmeSection = () => {
  const { file } = useStaticQuery(getMyMyPhoto)
  return (
    <AboutmeSectionWrapper>
      <div className="container flex-row">
        <div className="photo-container">
          <Image fluid={file.childImageSharp.fluid} className="photo" />
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reiciendis est doloribus molestias voluptas labore aliquid mollitia
            minima repudiandae ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio iusto sapiente laboriosam voluptas, officia
            inventore quos natus quod? Fugiat dicta veniam doloremque cupiditate
            rem vero eveniet! Debitis culpa quam veritatis?
          </p>
        </div>
      </div>
    </AboutmeSectionWrapper>
  )
}

const getMyMyPhoto = graphql`
  query {
    file(relativePath: { eq: "CV_photo-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutmeSectionWrapper = styled.section`
  width: 100%;
  height: 40rem;
  padding: 0 5rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0 1rem;
  }

  .flex-row {
    justify-content: center;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .photo-container {
    width: 40rem;
    height: 100%;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      width: 80%;
      margin-bottom: 1rem;
    }

    .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .description {
    padding: 7rem;
    margin-left: -5rem;
    width: 70rem;
    background-color: rgb(241, 186, 160);
    color: ${props => props.theme.darkMedium};
    z-index: 10;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      width: 90%;
      margin-left: 0rem;
      padding: 1rem;
    }
  }
`

export default AboutmeSection
