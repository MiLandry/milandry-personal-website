import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const CtaButton = ({ children, onClick }) => (

  <Button
    variant="contained"
    color="primary"
    type="submit"
    onClick={onClick}
  >
    {children}
  </Button>
)

CtaButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CtaButton
