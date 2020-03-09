import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import jsLogo from "../../images/js-logo.svg"
import reactLogo from "../../images/react-logo.svg"
import htmlLogo from "../../images/html-logo.svg"
import nodeLogo from "../../images/node.svg"
import firebaseLogo from "../../images/firebase-logo.svg"
import mongoLogo from "../../images/mongodb.svg"

import TechCard from "./TechCard"
import SideSquareTitle from "./SideSquareTitle"

const logos = [htmlLogo, jsLogo, reactLogo]
const logosBack = [nodeLogo, mongoLogo, firebaseLogo]

const SectionSkills = () => {
  const { skills } = useStaticQuery(getData)

  const renderedCardsFrontend = skills.edges
    .filter((_, idx) => idx < 3)
    .map(({ node }, index) => (
      <TechCard
        logo={logos[index]}
        title={node.frontmatter.title}
        text={node.html}
        level={node.frontmatter.level}
      />
    ))

  const renderedCardsBackend = skills.edges
    .filter((_, idx) => idx > 2)
    .map(({ node }, idx) => (
      <TechCard
        logo={logosBack[idx]}
        title={node.frontmatter.title}
        text={node.html}
        level={node.frontmatter.level}
      />
    ))

  return (
    <SectionSkillsWrapper>
      <div className="side-title">
        <SideSquareTitle title="frontend skills" />
      </div>
      <div className="card-list">{renderedCardsFrontend}</div>
      <div className="side-title right">
        <SideSquareTitle right title="backend skills" />
      </div>
      <div className="card-list">{renderedCardsBackend}</div>
    </SectionSkillsWrapper>
  )
}

const getData = graphql`
  query {
    skills: allMarkdownRemark(
      sort: { fields: frontmatter___id }
      filter: { frontmatter: { category: { eq: "tech" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            id
            level
          }
          html
        }
      }
    }
  }
`

const SectionSkillsWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;

  .card-list {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .side-title {
    margin: 3rem 0;
  }

  .side-title .right {
    display: flex;
    justify-content: flex-end;
  }
`

export default SectionSkills
