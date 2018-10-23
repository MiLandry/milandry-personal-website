import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Michael Landry</h1>
    <p>It's nice to meet you!.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
