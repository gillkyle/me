import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import { ContentContainer, SectionContainer } from './shared/Containers'

import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'

import { COLORS, FONT_WEIGHTS, BORDER_RADIUS } from '../styles/constants'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
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
        <Heading inverted>Experience</Heading>
        <IntroDescription>
          <Paragraph inverted>Here are a few places I've worked:</Paragraph>
        </IntroDescription>
      </Intro>
      <div />
    </ContentContainer>
  </SectionContainer>
)

export default Hero
