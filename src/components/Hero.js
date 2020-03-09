import React from "react"
import styled from "styled-components"

import wave from "../images/wave-1.svg"

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero-container">
        <div className="heroTitle">
          <h1>Welcome to my online CV. </h1>
          <p>Have a pleasant visit !</p>
          <h5>Laurent Tram</h5>
        </div>
        <img src={wave} alt="wave" className="hero-wave" />
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header`
  margin-top: -6rem;
  width: 100%;
  height: 50rem;
  background-color: ${props => props.theme.primaryColor};
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  .hero-container {
    width: 100%;
    height: 100%;

    position: relative;
    .heroTitle {
      position: absolute;
      left: 30%;
      top: 30%;
      padding: 0 3rem;
      max-width: 60rem;
      color: ${props => props.theme.white};

      h1 {
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
        left: 20%;
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 3rem;
        }
      }

      @media (max-width: ${props => props.theme.mobileWidth}) {
        left: 5%;
        h1 {
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
    }
  }
`

export default Hero
