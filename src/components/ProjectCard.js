import React from 'react'
import styled from 'styled-components'

import {
  MEDIA_QUERIES,
  SHADOW,
  TRANSITION,
  BORDER_RADIUS,
} from '../styles/constants'

import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'

const CardContainer = styled.div`
  text-decoration: none !important;
  display: grid;
  align-items: center;
  border-radius: ${BORDER_RADIUS.card};
  box-shadow: ${SHADOW};
  grid-template-areas: ${`
    "image text"
  `};
  grid-gap: 20px;
  padding: 30px 30px 30px 0px;
  transition: ${TRANSITION};
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-columns: 1fr 3fr;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const IconContainer = styled.div`
  grid-area: image;
  align-items: center;
`

class ProjectCard extends React.Component {
  openLink = () => {
    let newPage = window.open(this.props.link, '_blank')
    newPage.focus()
  }

  render() {
    const { icon, title, desc } = this.props

    return (
      <CardContainer onClick={() => this.openLink()}>
        <IconContainer>
          <Image src={icon} />
        </IconContainer>
        <TextContainer>
          <Heading
            color="black"
            size="xlarge"
            weight="bold"
            style={{ marginBottom: 10 }}
          >
            {title}
          </Heading>
          <Paragraph size="medium" color="gray" style={{ marginBottom: 0 }}>
            {desc}
          </Paragraph>
        </TextContainer>
      </CardContainer>
    )
  }
}

export default ProjectCard
