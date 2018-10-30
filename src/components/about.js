import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Image from './shared/Image'

import AboutMeGraphicSVG from '../images/AboutMeGraphic.svg'
import AboutMeLeftSidebar from '../images/AboutMeLeftSidebar.svg'
import AboutMeRightSidebar from '../images/AboutMeRightSidebar.svg'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
  GRADIENT,
  BORDER_RADIUS,
  MEDIA_QUERIES,
} from '../styles/constants'

const AboutContainer = styled.div`
  background: ${COLORS.white};
  min-height: 820px;
  padding: ${MARGIN.default};
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding: ${MARGIN.small};
  }
`
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  };
`

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const AboutName = styled.div`
  margin-bottom: 25px;
`
const AboutDescription = styled.div`
  margin-bottom: 25px;
`
const CenteredContainer = styled.div`
  display: flex;
  place-content: center;
`

const About = () => (
  <AboutContainer>
    <Image
      src={AboutMeLeftSidebar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    />
    <Image
      src={AboutMeRightSidebar}
      style={{ position: 'absolute', right: 0 }}
      lighten
    />
    <ContentContainer>
      <AboutMeContainer>
        <AboutName>
          <Text color="darkBlue" size="huge" weight="bold">
            About Me
          </Text>
        </AboutName>
        <AboutDescription>
          <Text color="black" size="large" lineHeight={1.75}>
            Hello! I’m a software engineer that loves the junction of
            engineering and design. I build experiences with pixel perfect
            attention to detail that comes through clean code and a solid
            architecture.
          </Text>
          <br />
          <br />
          <Text color="black" size="large" lineHeight={1.75}>
            I’m graduating from Brigham Young University with a Master’s Degree
            in Information Systems and a focus on engineering and software
            development. I love technology because I’m always learning something
            new.
          </Text>
          <br />
          <br />
          <Text color="black" size="large" lineHeight={1.75}>
            Here are some things I'm experienced with:
          </Text>
        </AboutDescription>
      </AboutMeContainer>
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
        <Image src={AboutMeGraphicSVG} />
      </CenteredContainer>
    </ContentContainer>
  </AboutContainer>
)

export default About
