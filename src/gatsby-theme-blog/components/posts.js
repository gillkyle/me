/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Styled, css } from 'theme-ui'

import Layout from 'gatsby-theme-blog/src/components/layout'
import SEO from 'gatsby-theme-blog/src/components/seo'
import Footer from 'gatsby-theme-blog/src/components/home-footer'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <div key={node.slug} sx={{ marginBottom: 30 }}>
            <Styled.h2
              css={css({
                mb: 1,
              })}
            >
              <SEO title="Home" keywords={keywords} />
              <Styled.a
                as={Link}
                css={{
                  textDecoration: `none`,
                }}
                to={node.slug}
              >
                {title}
              </Styled.a>
            </Styled.h2>
            <Styled.p sx={{ marginBottom: 0 }}>{node.excerpt}</Styled.p>
            <small>{node.date}</small>
          </div>
        )
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
