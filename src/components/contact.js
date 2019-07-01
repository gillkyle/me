import React from 'react'
import styled from '@emotion/styled'

import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import { SectionContainer, ContentContainer } from './shared/Containers'

import { BORDER_RADIUS, SHADOW, TRANSITION, COLORS } from '../styles/constants'
import Link from './shared/Link'

import MediumLogo from '../images/logos/medium.png'
import GithubLogo from '../images/logos/github.png'
import DribbbleLogo from '../images/logos/dribbble.png'
import LinkedinLogo from '../images/logos/linkedin.png'
import TwitterLogo from '../images/logos/twitter.png'
import ProducthuntLogo from '../images/logos/producthunt.png'

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
`
const ContactCard = styled.div`
  box-shadow: ${SHADOW};
  border-radius: ${BORDER_RADIUS.card};
  padding: 20px;
  max-height: 100px;
  max-width: 100px;
  transition: ${TRANSITION};
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`
const ContactCardImage = styled(Image)`
  height: 60px;
  width: 60px;
  background-color: ${COLORS.lightGray};
  border-radius: 8px;
`

const contactLinks = [
  { profile: 'https://medium.com/@kyle.robert.gill', logo: MediumLogo },
  { profile: 'https://github.com/gillkyle', logo: GithubLogo },
  { profile: 'https://www.linkedin.com/in/kyle-gill/', logo: LinkedinLogo },
  { profile: 'https://dribbble.com/kylegill', logo: DribbbleLogo },
  { profile: 'https://twitter.com/gill_kyle', logo: TwitterLogo },
  {
    profile: 'https://www.producthunt.com/@gill_kyle',
    logo: ProducthuntLogo,
  },
]

class Contact extends React.Component {
  openLink = link => {
    console.log('opening...')
    let newPage = window.open(link, '_blank')
    newPage.focus()
  }

  render() {
    return (
      <SectionContainer id="contact">
        {/* <Image
          src={HeroLeftSideBar}
          style={{ position: 'absolute', left: 0 }}
          lighten
        /> */}
        <ContentContainer style={{ gridGap: 30 }} numColumns={1}>
          <Description>
            <Heading>Contact</Heading>
            <Paragraph size="xlarge" weight="bold">
              Get in contact via{' '}
              <Link
                style={{ color: COLORS.black }}
                href="mailto:kylerobertgill@gmail.com"
              >
                email
              </Link>{' '}
              or find me online
            </Paragraph>
          </Description>
          <ContactCards>
            {contactLinks.map(node => (
              <ContactCard onClick={() => this.openLink(node.profile)}>
                <ContactCardImage src={node.logo} />
              </ContactCard>
            ))}
          </ContactCards>
        </ContentContainer>
      </SectionContainer>
    )
  }
}

export default Contact
