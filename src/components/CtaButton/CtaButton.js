import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
// import './layout.css'

const CtaButton = props => (
  <div>CtaButton</div>
)

CtaButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CtaButton
