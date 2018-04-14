import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

import EmailIcon from 'react-icons/lib/io/ios-email';
import LinkedinIcon from 'react-icons/lib/io/social-linkedin';
import GitHubIcon from 'react-icons/lib/io/social-octocat';

const IndexPage = ({ data }) => (
  <div>
    <Img
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        'margin-left': '15vw',
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
      sizes={data.backgroundImage.sizes}
    />
    <h1
      style={{
        color: '#FEB90C',
        'margin-bottom': '15px',
        'margin-top': '25vh',
        'text-shadow': '3px 3px 2px #09080E',
      }}
    >
      LAUREN BARKER
    </h1>
    <p
      style={{
        color: 'white',
        'font-size': '1.75rem',
        'text-shadow': '2px 2px 2px #09080E',
      }}
    >
      full-stack developer | UX enthusiast
    </p>
    <div style={{ 'font-size': '1.25rem' }}>
        <a
          href="mailto:ms.lebarker@gmail.com"
          style={{
            color: '#FEB90C',
            textDecoration: 'none',
          }}
        >
          <span><EmailIcon/></span>
        </a>
        <a
          href="https://github.com/laurenbarker"
          style={{
            color: '#FEB90C',
            textDecoration: 'none',
          }}
        >
          <span style={{ 'padding-left': '.75rem' }}>
            <GitHubIcon/>
          </span>
        </a>
        <a
          href="https://linkedin.com/in/lauren-barker-87708b65"
          style={{
            color: '#FEB90C',
            textDecoration: 'none',
          }}
        >
          <span style={{ 'padding-left': '.75rem' }}>
            <LinkedinIcon/>
          </span>
        </a>
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    backgroundImage: imageSharp(id: { regex: "/chuttersnap-297551.jpg/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
