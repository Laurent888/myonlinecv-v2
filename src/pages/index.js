import React, { useState, useRef, useEffect } from "react"

import Layout from "../components/layout/Layout"
import "../styles/index.css"
import Hero from "../components/Hero"
import Title from "../components/Title"
import SectionSkills from "../components/Home/SectionSkills"
import SectionPortfolio from "../components/Home/SectionPortfolio"
import AboutmeSection from "../components/Home/AboutmeSection"
import ContactSection from "../components/Home/ContactSection"

import SEO from "../components/SEO"

const useOnScreen = options => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [isIE, setIsIE] = useState(false)

  useEffect(() => {
    var isIEb = /*@cc_on!@*/ false || !!document.documentMode

    if (!isIEb) {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(!entry.isIntersecting)
      }, options)

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) observer.unobserve(ref.current)
      }
    } else {
      setIsIE(true)
    }
  }, [ref, options])

  return [ref, visible, isIE]
}

export default () => {
  const [ref, visible, isIE] = useOnScreen({ rootMargin: "-50px" })

  return (
    <Layout visible={visible}>
      <SEO
        title="Home | Laurent Tram"
        description="frontend developer javascript react reactjs css stockholm laurent tram backend fullstack"
      />
      <div ref={ref}>
        <Hero isIE={isIE} />
      </div>
      <Title title="Technical Skills" />
      <SectionSkills />
      <Title title="My Portfolio" />
      <SectionPortfolio />
      <Title title="Who am I ?" />
      <AboutmeSection />
      <Title title="Contact me" />
      <ContactSection />
    </Layout>
  )
}
