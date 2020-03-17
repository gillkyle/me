import { graphql } from 'gatsby'
import PostsPage from 'gatsby-theme-blog-core/components/posts'

export default PostsPage

export const query = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost: allMdxBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
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
  }
`
