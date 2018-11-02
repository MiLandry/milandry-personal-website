import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ children, href }) => (

  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: 'white',
      textDecoration: 'none',
      fontFamily: 'proxima-nova',
      margin: '0 1rem',
    }}
  >
    {children}
  </a>
)

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default ExternalLink
