import React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Image filePath="gatsby-astronaut.png" />
  </Layout>
)

export default IndexPage
