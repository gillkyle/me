import React, { Fragment } from 'react'
/** @jsx jsx */
import { jsx, Styled, css } from 'theme-ui'
import { Link } from 'gatsby'

import Layout from 'gatsby-theme-blog/src/components/layout'
import SEO from 'gatsby-theme-blog/src/components/seo'
import Footer from './home-footer'
import { SHADOW, TRANSITION } from '../../styles/constants'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <Styled.a
              as={Link}
              css={css({
                textDecoration: `none`,
              })}
              to={node.slug}
            >
              <div
                sx={{
                  color: `gray`,
                  backgroundColor: `white`,
                  padding: 4,
                  borderRadius: 20,
                  boxShadow: SHADOW,
                  mb: 4,
                  transition: TRANSITION,
                  '&:hover': {
                    transform: `scale(1.03)`,
                    cursor: `pointer`,
                  },
                }}
              >
                <Styled.h2 sx={{ mt: `0`, mb: `2`, color: `primary` }}>
                  {title}
                </Styled.h2>
                <Styled.p sx={{ mb: 1, color: `gray` }}>
                  {node.excerpt}
                </Styled.p>
                <small>{node.date}</small>
              </div>
            </Styled.a>
          </Fragment>
        )
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
