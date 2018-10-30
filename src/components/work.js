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

const Hero = () => (
  <SectionContainer>
    <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    />
    <ContentContainer>
      <Heading>Projects</Heading>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
