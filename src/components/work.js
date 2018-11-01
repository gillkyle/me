import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import { SectionContainer, ContentContainer } from './shared/Containers'
import ProjectCard from './ProjectCard'

import CardSurgeIcon from '../images/CardSurgeIcon.svg'
import SyntheticIcon from '../images/SyntheticIcon.svg'
import SyntheticIconPng from '../images/SyntheticIcon.png'
import MoreIcon from '../images/MoreIcon.svg'
import EmojiZooIcon from '../images/EmojiZooIcon.svg'

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

const Hero = () => (
  <SectionContainer>
    {/* <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    /> */}
    <ContentContainer numColumns={1}>
      <Description>
        <Heading>Projects</Heading>
        <Paragraph>Some things I've built:</Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard
          icon={SyntheticIcon}
          title="Synthetic"
          desc="A Spotify powered, data-driven, music discovery app"
          link="https://synthetic.netlify.com"
        />
        <ProjectCard
          icon={CardSurgeIcon}
          title="Card Surge"
          desc="A playground for designing beautiful cards and drop shadows for user interfaces"
          link="https://card.surge.sh"
        />
        <ProjectCard
          icon={EmojiZooIcon}
          title="Emoji Zoo"
          desc="A Twitter bot sending out daily zoo scenes made of Ascii art and emojis "
          link="https://twitter.com/EmojiZoo_"
        />
        <ProjectCard
          icon={MoreIcon}
          title="More"
          desc="I’ve made all sorts of apps, bots, and microservices that live on my Github"
          link="https://github.com/gillkyle"
        />
      </CardGrid>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
