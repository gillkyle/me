import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import HeroGraphic from '../images/HeroGraphic.png'

import Text from './shared/Text'
import Image from './shared/Image'
import { ContentContainer, SectionContainer } from './shared/Containers'

import HeroGraphicSVG from '../images/HeroGraphic.svg'
import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  GRADIENT,
  BORDER_RADIUS,
  MEDIA_QUERIES,
} from '../styles/constants'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroName = styled.div`
  margin-bottom: 25px;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
`
const IntroButton = styled.button`
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS};
  padding: 20px 60px;
  letter-spacing: 2px;
  color: ${COLORS.blue};
  font-weight: ${FONT_WEIGHTS.bold};
`
const CenteredContainer = styled.div`
  display: flex;
  place-content: center;
`

const Hero = () => (
  <SectionContainer backgroundFilled>
    <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    />
    <ContentContainer>
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
        <IntroDescription>
          <Text color="white" size="large" style={{ lineHeight: 1.75 }}>
            I'm a software engineer specializing in developing - and often
            designing - high-quality applications and websites. I’m currently a
            Full-Stack Developer at Ravn in Pleasant Grove, Utah.
          </Text>
        </IntroDescription>
        <div>
          <IntroButton>GET IN TOUCH</IntroButton>
        </div>
      </Intro>
      <CenteredContainer>
        <Image src={HeroGraphicSVG} />
      </CenteredContainer>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
