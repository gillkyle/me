import React from 'react'

import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Work from '../components/work'
import Layout from '../components/layout'
import Blog from '../components/learning'

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Work />
    <Blog />
  </Layout>
)

export default IndexPage
