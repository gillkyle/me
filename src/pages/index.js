import React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/hero'
import About from '../components/about'
import Layout from '../components/layout'
import Image from '../components/shared/Image'

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
