import React from 'react'

import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Work from '../components/work'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Work />
  </Layout>
)

export default IndexPage
