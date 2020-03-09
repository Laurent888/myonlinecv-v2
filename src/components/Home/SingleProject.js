import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const SingleProject = () => {
  return (
    <SingleProjectWrapper>
      <div>
        <h4>Title</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ea molestias at, illo non exercitationem placeat enim ducimus eligendi
          quos.
        </p>
      </div>
      <div>
        <Image />
      </div>
    </SingleProjectWrapper>
  )
}

const SingleProjectWrapper = styled.div``

export default SingleProject
