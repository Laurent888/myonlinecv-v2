import React from "react"
import styled from "styled-components"
import { FaStar } from "react-icons/fa"

const TechCard = ({ logo, title, text, level }) => {
  const renderedStars = [...Array(level * 1)].map((star, idx) => (
    <FaStar key={idx} className="star-icon" />
  ))
  return (
    <TechCardWrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="stars">
        <span>Level: </span>
        {renderedStars}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </TechCardWrapper>
  )
}

const TechCardWrapper = styled.div`
  margin: 1rem 3rem;
  width: 30rem;
  height: 40rem;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid rgba(121, 188, 247, 0.3);
  background-color: rgba(242, 242, 242);
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    margin: 1rem 1rem;
    height: 35rem;
  }

  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    span {
      margin-right: 2rem;
    }

    .star-icon {
      font-size: 1.6rem;
      color: rgb(241, 208, 20);
      padding-bottom: 0.4rem;
    }
  }

  .logo {
    width: 100%;
    height: 40%;
    margin-bottom: 3rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    @media (max-width: ${props => props.theme.mobileWidth}) {
      height: 30%;
    }
  }

  .content {
    h3 {
      width: 100%;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    li {
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
    }
  }
`

export default TechCard
