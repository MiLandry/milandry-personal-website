import React from 'react'
import Button from '@material-ui/core/Button'

const urlForResume = 'https://www.dropbox.com/s/95y94uz2hhvh1xg/F%202018%20resume%20Landry%20%282%29.docx?dl=0'
const onClick = () => {
  if (typeof window !== 'undefined') {
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

export default CtaButton
