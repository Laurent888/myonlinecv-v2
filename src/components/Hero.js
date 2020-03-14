import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import wave from "../images/wave-1.svg"

const Hero = ({ className, isIE }) => {
  const { file } = useStaticQuery(getHeroImg)
  const image = file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={image} className={className} isIE={isIE}>
      <div className="overlay"></div>
      <div className="hero-container">
        <div className="heroTitle">
          <h4>Welcome to my online CV </h4>
          <p>Have a pleasant visit !</p>
          <h5>Laurent Tram</h5>
        </div>
        {!isIE && <img src={wave} alt="wave" className="hero-wave" />}
      </div>
    </BackgroundImage>
  )
}

const getHeroImg = graphql`
  query {
    file(relativePath: { eq: "stockholm1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default styled(Hero)`
  margin-top: -6rem;
  width: 100%;
  height: 50rem;
  background-position: center bottom;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  position: relative;

  &::before {
    background-attachment: fixed;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 50rem;
    top: 0;
    left: 0;
    background-color: rgba(139, 65, 51, 0.6);
    z-index: 10;
  }
  .hero-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .heroTitle {
    position: absolute;
    left: 30%;
    top: 25%;
    padding: 0 3rem;
    max-width: 60rem;
    color: ${props => props.theme.white};
    z-index: 20;

    h4 {
      font-size: 5rem;
    }

    h5 {
      margin-top: 2rem;
      font-family: "Nothing You Could Do", cursive;
      font-size: 3rem;
      text-align: end;
    }

    p {
      font-size: 4rem;
    }

    @media (max-width: ${props => props.theme.tabletWidth}) {
      top: 30%;
      left: 20%;
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 3rem;
      }
    }

    @media (max-width: ${props => props.theme.mobileWidth}) {
      top: 40%;
      left: 5%;
      h4 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }

  .hero-wave {
    position: absolute;
    bottom: 0;

    @media (max-width: ${props => props.theme.mobileWidth}) {
      display: none;
    }
  }
`
