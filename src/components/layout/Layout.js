import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"

import theme from "../../styles/theme"

const Layout = ({ children, visible }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar visible={visible} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
