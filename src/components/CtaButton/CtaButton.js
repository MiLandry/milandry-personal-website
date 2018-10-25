import React from 'react'
import Button from '@material-ui/core/Button'

const urlForResume = 'https://www.dropbox.com/s/95y94uz2hhvh1xg/F%202018%20resume%20Landry%20%282%29.docx?dl=0'
// import PropTypes from 'prop-types'

// import Header from './header'
// import './layout.css'
const onClick = () => {
  if (typeof window !== 'undefined') {
    // const module = require("module")
    window.open(urlForResume)
  }
}

const CtaButton = () => (

  <Button
    variant="contained"
    color="primary"
    type="submit"
    onClick={onClick}
  >
      Resume
  </Button>
)

// CtaButton.propTypes = {
//   // children: PropTypes.node.isRequired,
// }

export default CtaButton
