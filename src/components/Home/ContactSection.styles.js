import styled from "styled-components"

const ContactSectionWrapper = styled.section`
  margin: 5rem 0;

  /* LINK SECTION */
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 100%;
    background-color: rgb(230, 230, 230);

    .link {
      margin-right: 5rem;
      a {
        display: flex;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }
      }

      .label-email {
        font-weight: 600;
        margin-right: 1rem;
      }

      .linkedin {
        color: rgb(35, 104, 255);
      }

      .link-icon {
        margin-left: 2rem;
        font-size: 3.5rem;
      }
    }

    @media (max-width: ${props => props.theme.tabletWidthBis}) {
      flex-direction: column;
      height: 100%;

      .link {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-right: 0rem;
      }
    }
  }

  .flex-row {
    justify-content: center;
  }

  /* FORM SECTION */
  .contact-form {
    margin: 2rem auto;
    width: 50rem;
    display: flex;
    flex-direction: column;

    .form-header {
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      .chevron-down {
        font-size: 2rem;
        color: ${props => props.theme.primaryColor};
      }
    }

    input {
      height: 4rem;
      margin-bottom: 2rem;
      background-color: none;
      padding: 0.5rem 1rem;
      font-size: 1.7rem;
      color: ${props => props.theme.darkMedium};

      &:focus {
        border: 1px solid rgb(240, 123, 69);
        box-shadow: 0 0 2px rgb(240, 123, 69);
        outline: none;
      }
    }

    textarea {
      resize: none;
      height: 10rem;
      padding: 1rem;
      margin-bottom: 2rem;
      font-family: "Spartan", sans-serif;

      &:focus {
        border: 1px solid rgb(240, 123, 69);
        box-shadow: 0 0 2px rgb(240, 123, 69);
        outline: none;
      }
    }

    button {
      width: 15rem;
      padding: 1rem 2rem;
      border: 1px solid ${props => props.theme.darkMedium};
      background-color: transparent;
      margin: 0 auto;
      font-size: 2rem;
      transition: all 0.1s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: ${props => props.theme.darkMedium};

      .icon {
        color: rgb(240, 123, 69);
      }

      &:hover {
        cursor: pointer;
        color: rgb(240, 123, 69);
        border: 1px solid ${props => props.theme.primaryColor};
        background-color: rgb(247, 231, 224);
      }
    }

    @media (max-width: ${props => props.theme.tabletWidthBis}) {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`

export default ContactSectionWrapper
