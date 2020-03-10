import React from "react"
import styled from "styled-components"
import { MdSend } from "react-icons/md"
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa"

const ContactSection = () => {
  return (
    <ContactSectionWrapper id="contact-section">
      <div className="links flex-row">
        <div className="link">
          <a
            href="https://github.com/Laurent888"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <FaGithub className="link-icon" />
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/laurent-tram-ba037a17b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN <FaLinkedin className="link-icon linkedin" />
          </a>
        </div>
        <div className="link">
          <p>
            <span className="label-email">Email:</span>laurent.tram@gmail.com
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-header">
          <h2>Or by contact form</h2>
          <FaChevronDown className="chevron-down" />
        </div>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea placeholder="Your message" />
        <button type="submit">
          SEND <MdSend className="icon" />
        </button>
      </form>
    </ContactSectionWrapper>
  )
}

const ContactSectionWrapper = styled.section`
  margin: 5rem 0;
  .links {
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
  }

  .flex-row {
    justify-content: center;
  }

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
  }
`

export default ContactSection
