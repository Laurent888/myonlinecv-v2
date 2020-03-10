import React from "react"
import Image from "gatsby-image"

import SingleProjectWrapper from "./SingleProject.styles.js"

const SingleProject = ({ props, left }) => {
  // EXTRACT DATA FROM QUERY
  const title = props.frontmatter.title
  const url = props.frontmatter.url
  const text = props.html
  const image = props.frontmatter.imagePath.childImageSharp.fluid

  // RENDER THE COMPONENT
  return (
    <SingleProjectWrapper left={left}>
      <div className="description-container">
        <div className="description">
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
          <div className="button-row">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="overlay"></div>
        <p className="image-title">{title}</p>
        <Image fluid={image} className="image" />
      </div>
    </SingleProjectWrapper>
  )
}

export default SingleProject
