import React from 'react'
import ExternalLink from './ExternalLink'

const myLinkedIn = 'https://www.linkedin.com/in/michael-l-25263060/'
const myGithub = 'https://github.com/MiLandry'

const Header = () => (
  <div
    style={{
      position: 'absolute',
      top: '1rem',
      right: '2rem',
    }}
  >
    <ExternalLink href={myLinkedIn}>LinkedIn</ExternalLink>
    <ExternalLink href={myGithub}>GitHub</ExternalLink>
  </div>
)

export default Header
