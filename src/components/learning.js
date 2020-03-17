import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { StaticQuery, graphql, Link } from 'gatsby'

import Button from './shared/Button'
import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import {
  ContentContainer,
  SectionContainer,
  CardGrid,
} from './shared/Containers'
import BlogCard from './BlogCard'

import ExpLeftSideBar from '../images/ExpLeftSideBar.svg'
import ExpRightSideBar from '../images/ExpRightSideBar.svg'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
`

const Learning = () => {
  return (
    <SectionContainer id="learning" backgroundFilled>
      <Image
        src={ExpLeftSideBar}
        style={{
          position: 'absolute',
          left: 0,
          transform: 'translateY(-50px)',
        }}
        lighten
      />
      <Image
        src={ExpRightSideBar}
        style={{
          position: 'absolute',
          right: 0,
          transform: 'translateY(-50px)',
        }}
        lighten
      />
      <ContentContainer style={{ gridGap: 30 }}>
        <Intro>
          <Heading inverted>Learning</Heading>
          <IntroDescription>
            <Paragraph size="xlarge" weight="bold" color="lightWhite" inverted>
              I blog about things I've learned on my site, these are a few of my
              posts
            </Paragraph>
          </IntroDescription>
        </Intro>
        <CardGrid mediaSize="desktop">
          <StaticQuery
            query={graphql`
              query MyBlogPosts {
                allMdxBlogPost(limit: 4, sort: { fields: date, order: DESC }) {
                  nodes {
                    id
                    date
                    slug
                    title
                    parent {
                      ... on Mdx {
                        frontmatter {
                          image
                          description
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={({ allMdxBlogPost: { nodes } }) => (
              <>
                {nodes.map(
                  ({
                    date,
                    slug,
                    title,
                    parent: {
                      frontmatter: { image: imageUrl, description: subtitle },
                    },
                  }) => (
                    <BlogCard
                      date={date}
                      title={title}
                      subtitle={subtitle}
                      claps={'<50'}
                      imageUrl={imageUrl}
                      link={slug}
                    />
                  )
                )}
              </>
            )}
          />
        </CardGrid>
        <div sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/blog">
            <Button>See all posts</Button>
          </Link>
        </div>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Learning
