import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

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

class Learning extends React.Component {
  state = {
    selectedIndex: null,
  }

  onSelectJob = selectedIndex =>
    console.log(selectedIndex) || this.setState({ selectedIndex })

  render() {
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
              <Paragraph
                size="xlarge"
                weight="bold"
                color="lightWhite"
                inverted
              >
                I blog about things I've learned and done on Medium, these are a
                few of my posts
              </Paragraph>
            </IntroDescription>
          </Intro>
          <CardGrid mediaSize="desktop">
            <StaticQuery
              query={graphql`
                query MediumPosts {
                  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
                    edges {
                      node {
                        id
                        title
                        uniqueSlug
                        virtuals {
                          totalClapCount
                          subtitle
                          previewImage {
                            imageId
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={({ allMediumPost: { edges } }) => (
                <>
                  {edges.map(
                    ({
                      node: {
                        title,
                        uniqueSlug,
                        virtuals: {
                          subtitle,
                          totalClapCount,
                          previewImage: { imageId },
                        },
                      },
                    }) => (
                      <BlogCard
                        title={title}
                        subtitle={subtitle}
                        claps={totalClapCount > 50 ? totalClapCount : '<50'}
                        imageUrl={imageId}
                        link={`https://medium.com/@kyle.robert.gill/${uniqueSlug}`}
                      />
                    )
                  )}
                </>
              )}
            />
          </CardGrid>
        </ContentContainer>
      </SectionContainer>
    )
  }
}

export default Learning
