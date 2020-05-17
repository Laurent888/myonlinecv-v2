import styled from "styled-components"

const AboutmeSectionWrapper = styled.section`
  width: 100%;

  padding: 0 5rem;
  margin: 3rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0 1rem;
    margin: 3rem 0;
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    padding: 0rem;
    margin: 3rem 0;
  }

  .flex-row {
    justify-content: center;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .photo-container {
    width: 40rem;
    height: 100%;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      width: 80%;
      margin-bottom: -3rem;
    }

    .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .description {
    padding: 7rem;
    padding-left: 10rem;
    margin-left: -5rem;
    width: 70rem;
    background-color: ${props => props.theme.darkLight};
    color: ${props => props.theme.darkColor};

    @media (max-width: ${props => props.theme.tabletWidth}) {
      width: 90%;
      margin-left: 0rem;
      padding: 1rem;
      padding-top: 5rem;
    }
  }
`

export default AboutmeSectionWrapper
