import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "AboutMeGraphic.png" }) {
          childImageSharp {
            gatsbyImageData(width: 784, placeholder: TRACED_SVG, layout: FIXED)
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        style={{
          objectFit: 'contain',
          width: '100%',
          minHeight: 200,
          maxHeight: 600,
        }}
      />
    )}
  />
)
export default Image
