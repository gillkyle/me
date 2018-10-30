import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Image from './shared/Image'
import { Heading } from './shared/Typography'
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
const IntroButton = styled.button`
  background-color: ${COLORS.white};
  border-radius: ${BORDER_RADIUS};
  padding: 20px 60px;
  letter-spacing: 2px;
  color: ${COLORS.blue};
  font-weight: ${FONT_WEIGHTS.bold};
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
          <Text color="white" size="large" style={{ lineHeight: 1.75 }}>
            Here are a few places I've worked:
          </Text>
        </IntroDescription>
        <div>
          <IntroButton>GET IN TOUCH</IntroButton>
        </div>
      </Intro>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
