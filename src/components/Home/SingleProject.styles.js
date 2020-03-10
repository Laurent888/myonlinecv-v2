import styled from "styled-components"

const SingleProjectWrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: ${props => (props.left ? "row-reverse" : "row")};

  @media (max-width: ${props => props.theme.tabletWidth}) {
    height: 40rem;
  }

  @media (max-width: ${props => props.theme.tabletWidthBis}) {
    flex-direction: column;
    height: 37rem;
  }

  /* DESCRIPTION BOX */
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

        @media (max-width: ${props => props.theme.tabletWidth}) {
          margin-bottom: 1rem;
        }
      }

      .button-row {
        position: absolute;
        bottom: 4rem;
        right: 3rem;
        transition: all 0.2s ease-in-out;

        &:hover {
          bottom: 4.2rem;
        }
      }

      .tech-list{
        position:absolute;
        left:2rem;
        bottom:2rem;
        display:flex;
        flex-direction:row;
        align-items:center;

        @media (max-width: ${props => props.theme.tabletWidth}) {
          bottom:9rem;
        }
      }
    }
  }

  /* IMAGE BOX */
  .image-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (max-width: ${props => props.theme.tabletWidthBis}) {
      display: none;
    }

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

export default SingleProjectWrapper
