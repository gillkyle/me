/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query BlogPosts {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const blogPostTemplate = path.resolve(`src/templates/template-blog-post.js`)

  const posts = result.data.allMdx.edges
  posts.forEach(({ node: post }) => {
    createPage({
      path: `/blog${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
