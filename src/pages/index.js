import React from 'react'
import Layout from '../components/layout'
import CTAButton from '../components/CtaButton'

const elevatorSpeech = 'I am a software engineer in the Atlanta area. I love building websites using React and Node as well as making things with Java, Python and functional languages . I am a big fan of all things blockchain and AI.'
const cta = "If you think you might have a project or if you need my help with anything then let's get in touch."


const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Michael Landry</h1>
    <h2>A software engineer.</h2>
    <h3>It's nice to meet you</h3>
    <p>{elevatorSpeech}</p>
    <p>{cta}</p>
    <CTAButton />
  </Layout>
)

export default IndexPage
