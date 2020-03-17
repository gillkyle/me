import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Experience from '../components/experience'
import Work from '../components/work'
import Blog from '../components/learning'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Work />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
