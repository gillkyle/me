import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Text from './shared/Text'

import HeroGraphic from '../images/HeroGraphic.png'
import HeroGraphicSVG from '../images/HeroGraphic.svg'
import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
  GRADIENT,
} from '../styles/constants'

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
  background: ${GRADIENT};
  height: 820px;
  padding: ${MARGIN.default};
`

const Intro = styled.div``
const IntroName = styled.div`
  margin-bottom: 50px;
`

const CenteredContainer = styled.div`
  display: flex;
  place-content: center;
`

const Header = () => (
  <Hero>
    <img src={HeroLeftSideBar} style={{ position: 'absolute', left: 0 }} />
    <Intro>
      <IntroName>
        <Text color="white" size="large">
          Hi, my name is
        </Text>
        <br />
        <Text color="white" style={{ fontSize: 72 }} weight="bold">
          Kyle Gill
        </Text>
        <br />
        <Text color="white" style={{ fontSize: 60 }}>
          I love to code.
        </Text>
      </IntroName>
      <Text color="white" size="large" style={{ lineHeight: 1.75 }}>
        I'm a software engineer specializing in developing - and often designing
        - high-quality applications and websites. I’m currently a Full-Stack
        Developer at Ravn in Pleasant Grove, Utah.
      </Text>
    </Intro>
    <CenteredContainer>
      {/* <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "HeroGraphic.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      /> */}
      <img src={HeroGraphicSVG} />
    </CenteredContainer>
  </Hero>
)

export default Header
