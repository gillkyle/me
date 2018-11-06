import React from 'react'
import styled from 'styled-components'

import Image from './shared/Image'
import { UList, ListItem } from './shared/List'
import {
  ContentContainer,
  SectionContainer,
  CenteredContainer,
} from './shared/Containers'

import AboutMeGraphicSVG from '../images/AboutMeGraphic.svg'
import AboutMeLeftSideBar from '../images/AboutMeLeftSideBar.svg'
import AboutMeRightSideBar from '../images/AboutMeRightSideBar.svg'

import { Heading, Paragraph } from './shared/Typography'

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const AboutName = styled.div`
  margin-bottom: 25px;
`
const AboutDescription = styled.div``

const About = () => (
  <SectionContainer id="about">
    <Image
      src={AboutMeLeftSideBar}
      style={{ position: 'absolute', left: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <Image
      src={AboutMeRightSideBar}
      style={{ position: 'absolute', right: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <ContentContainer numColumns={2}>
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <AboutDescription>
          <Paragraph>
            Hello! I’m a software engineer that loves the junction of
            engineering and design. I build experiences with pixel perfect
            attention to detail that comes through clean code and a solid
            architecture.
          </Paragraph>
          <Paragraph>
            I’m graduating from Brigham Young University with a Master’s Degree
            in Information Systems and a focus on engineering and software
            development. I love technology because I’m always learning something
            new.
          </Paragraph>
          <Paragraph>Here are some things I'm experienced with:</Paragraph>
          <UList>
            <ListItem>Javascript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Gatsby</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>Ruby on Rails</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Sketch</ListItem>
            <ListItem>Figma</ListItem>
          </UList>
        </AboutDescription>
      </AboutMeContainer>
      <CenteredContainer>
        <Image src={AboutMeGraphicSVG} />
      </CenteredContainer>
    </ContentContainer>
  </SectionContainer>
)

export default About
