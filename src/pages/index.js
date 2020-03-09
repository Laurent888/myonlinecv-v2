import React from "react"

import Layout from "../components/layout/Layout"
import "../styles/index.css"
import Hero from "../components/Hero"
import Title from "../components/Title"
import SectionSkills from "../components/Home/SectionSkills"
import SectionPortfolio from "../components/Home/SectionPortfolio"
import AboutmeSection from "../components/Home/AboutmeSection"

export default () => (
  <div>
    <Layout>
      <Hero />
      <Title title="Technical Skills" />
      <SectionSkills />
      <Title title="My Portfolio" />
      <SectionPortfolio />
      <Title title="Who am I ?" />
      <AboutmeSection />
    </Layout>
  </div>
)
