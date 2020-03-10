import React from "react"
import SideSquareTitleWrapper from "./SideSquareTitle.styles"

const SideSquareTitle = props => {
  return (
    <SideSquareTitleWrapper right={props.right}>
      <h3>{props.title}</h3>
    </SideSquareTitleWrapper>
  )
}

export default SideSquareTitle
