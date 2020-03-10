import React from "react"
import ContactSectionWrapper from "./ContactSection.styles"
import { MdSend } from "react-icons/md"
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa"

const ContactSection = () => {
  return (
    <ContactSectionWrapper id="contact-section">
      <div className="links">
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
      <form
        action="https://formspree.io/xayjvyqk"
        method="POST"
        className="contact-form"
      >
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

export default ContactSection
