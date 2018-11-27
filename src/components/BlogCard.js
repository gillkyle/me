import React from 'react'
import styled from 'styled-components'

import {
  COLORS,
  MEDIA_QUERIES,
  SHADOW,
  TRANSITION,
  BORDER_RADIUS,
} from '../styles/constants'

import { Heading, Paragraph } from './shared/Typography'

const CardContainer = styled.div`
  background-color: ${COLORS.white};
  text-decoration: none !important;
  display: grid;
  align-items: center;
  border-radius: ${BORDER_RADIUS.card};
  box-shadow: ${SHADOW};
  grid-template-areas: ${`
    "photo" "text"
  `};
  grid-gap: 20px;
  padding: 30px;
  transition: ${TRANSITION};
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-rows: 2fr 1fr;
  }
  @media (max-width: ${MEDIA_QUERIES['tiny']}px) {
    grid-template-rows: 1fr 1fr;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PhotoContainer = styled.div`
  height: 100%;
  min-height: 120px;
  border-radius: 5px;
  grid-area: photo;
  align-items: center;
  background-color: ${COLORS.lightGray};
  background-image: ${props =>
    `url("https://cdn-images-1.medium.com/fit/c/1400/420/${props.imageUrl}")`};
  background-size: cover;
  background-position: center;
`

class ProjectCard extends React.Component {
  openLink = () => {
    let newPage = window.open(this.props.link, '_blank')
    newPage.focus()
  }

  render() {
    const { imageUrl, title, subtitle, claps } = this.props

    return (
      <CardContainer onClick={() => this.openLink()}>
        <PhotoContainer imageUrl={imageUrl} />
        <TextContainer>
          <Heading
            color="black"
            size="xlarge"
            weight="bold"
            style={{ marginBottom: 10 }}
          >
            {title}
          </Heading>
          <Paragraph size="medium" color="gray">
            {subtitle}
          </Paragraph>
          <Paragraph
            size="small"
            color="lightGray"
            style={{
              marginBottom: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 10 }}
            >
              <g fill={COLORS.lightGray} fillRule="evenodd">
                <path d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z" />
              </g>
            </svg>
            {claps}
          </Paragraph>
        </TextContainer>
      </CardContainer>
    )
  }
}

export default ProjectCard
