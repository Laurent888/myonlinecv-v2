import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const SingleProject = ({ props, left }) => {
  const title = props.frontmatter.title
  const url = props.frontmatter.url
  const text = props.html
  const image = props.frontmatter.imagePath.childImageSharp.fluid
  console.log(image)
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

const SingleProjectWrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: ${props => (props.left ? "row-reverse" : "row")};

  .description-container {
    height: 100%;
    width: 100%;
    background-color: ${props =>
      props.left ? "rgba(219, 138, 15, 0.1)" : "transparent"};
    position: relative;

    .description {
      height: inherit;
      width: inherit;
      padding: 3rem 3rem;

      h4 {
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 3rem;
      }

      .button-row {
        position: absolute;
        bottom: 4rem;
        right: 3rem;
      }
    }
  }

  .image-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    .image-title {
      font-style: italic;
      color: ${props => props.theme.white};
      position: absolute;
      top: 38%;
      left: 10%;
      font-size: 4rem;
      font-weight: 600;
      z-index: 20;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      transition: all 0.4s ease-in-out;
      z-index: 10;
    }

    .image {
      height: 100%;
      width: 100%;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      cursor: default;
      .image {
        transform: scale(1.07);
      }
      .overlay {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default SingleProject
