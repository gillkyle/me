import React from 'react'
import styled from '@emotion/styled'
import Github from 'react-feather/dist/icons/github'
import Star from 'react-feather/dist/icons/star'

import {
  COLORS,
  FONT_SIZES,
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
const CardHeadingGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  margin-bottom: 10px;
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
const GithubInfo = styled.span`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-self: flex-end;
  color: ${COLORS.lightGray};
  font-size: ${FONT_SIZES.small};
`

class ProjectCard extends React.Component {
  state = {
    stars: null,
  }

  componentDidMount() {
    if (this.props.repoName) {
      fetch(`https://api.github.com/repos/gillkyle/${this.props.repoName}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({ stars: data.stargazers_count })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  openLink = () => {
    let newPage = window.open(this.props.link, '_blank')
    newPage.focus()
  }

  render() {
    const { icon, title, desc } = this.props
    const { stars } = this.state

    return (
      <CardContainer onClick={() => this.openLink()}>
        <IconContainer>
          <Image src={icon} />
        </IconContainer>
        <TextContainer>
          <CardHeadingGrid>
            <Heading
              color="black"
              size="xlarge"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              {title}
            </Heading>
            {stars && (
              <GithubInfo>
                <Star size={16} style={{ marginRightt: 5 }} />
                {stars}
              </GithubInfo>
            )}
          </CardHeadingGrid>
          <Paragraph size="medium" color="gray" style={{ marginBottom: 0 }}>
            {desc}
          </Paragraph>
        </TextContainer>
      </CardContainer>
    )
  }
}

export default ProjectCard
