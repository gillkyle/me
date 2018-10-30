import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import { SectionContainer, ContentContainer } from './shared/Containers'

import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'

import {
  COLORS,
  FONT_WEIGHTS,
  BORDER_RADIUS,
  SHADOW,
} from '../styles/constants'

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 70px;
  grid-template-rows: 1fr;
`
const ProjectCard = styled.div`
  display: grid;
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${SHADOW};
`

const Hero = () => (
  <SectionContainer>
    <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    />
    <ContentContainer numColumns={1}>
      <Description>
        <Heading>Projects</Heading>
        <Paragraph>Some things I've built:</Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard>asdfasdf</ProjectCard>
        <ProjectCard>asdfasdf</ProjectCard>
        <ProjectCard>asdfasdf</ProjectCard>
        <ProjectCard>asdfasdf</ProjectCard>
      </CardGrid>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
