import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import {
  COLORS,
  MEDIA_QUERIES,
  SHADOW,
  TRANSITION,
  BORDER_RADIUS,
} from '../styles/constants'

import { Heading, Paragraph } from './shared/Typography'

const CardContainer = styled.div`
  height: 100%;
  background-color: ${COLORS.white};
  text-decoration: none !important;
  display: grid;
  align-items: center;
  border-radius: ${BORDER_RADIUS.card};
  box-shadow: ${SHADOW};
  grid-template-areas: ${`
    "photo" "text"
  `};
  grid-template-rows: 3fr 2fr;
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
  display: grid;
  grid-template-rows: auto auto 20px;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`
const PhotoContainer = styled.div`
  height: 100%;
  min-height: 120px;
  border-radius: 5px;
  grid-area: photo;
  align-items: center;
  background-color: ${COLORS.lightGray};
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`

const BlogCard = ({ date, imageUrl, title, subtitle, claps, link }) => {
  return (
    <Link to={link} sx={{ textDecoration: 'none' }}>
      <CardContainer>
        <PhotoContainer imageUrl={imageUrl} />
        <TextContainer>
          <Heading
            color="black"
            size="xlarge"
            weight="bold"
            sx={{ marginBottom: 10 }}
          >
            {title}
          </Heading>
          <Paragraph style={{ marginBottom: 10 }} size="medium" color="gray">
            {subtitle}
          </Paragraph>
          <Paragraph
            size="small"
            color="lightGray"
            sx={{
              marginBottom: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Paragraph>
        </TextContainer>
      </CardContainer>
    </Link>
  )
}

export default BlogCard
