import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer'

const elevatorSpeech = 'I am a software engineer in the Atlanta area. I love building websites using React and Node as well as making things with Java, Python and functional languages . I am a big fan of all things blockchain and AI.'
const cta = "If you think you might have a project or if you need my help with anything then let's get in touch."

const IndexPage = () => (
  <Layout>
    <h1>Michael Landry</h1>
    <h1>SOFTWARE ENGINEER</h1>
    <p>{elevatorSpeech}</p>
    <p>{cta}</p>
    <Footer />
  </Layout>
)

export default IndexPage
