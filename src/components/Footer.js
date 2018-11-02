import React from 'react'
import CTAButton from './CtaButton'

const urlForResume = 'https://www.dropbox.com/s/95y94uz2hhvh1xg/F%202018%20resume%20Landry%20%282%29.docx?dl=0'
const urlForCodeSample = 'https://github.com/MiLandry/milandry-personal-website'
const onResumeClick = () => {
  if (typeof window !== 'undefined') {
    window.open(urlForResume)
  }
}

const onCodeSampleClick = () => {
  if (typeof window !== 'undefined') {
    window.open(urlForCodeSample)
  }
}

const Footer = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <CTAButton onClick={onResumeClick}>
    Resume
    </CTAButton>
    <CTAButton onClick={onCodeSampleClick}>
    Code Sample
    </CTAButton>
  </div>
)

export default Footer
