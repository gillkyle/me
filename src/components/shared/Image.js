import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { MEDIA_QUERIES } from '../../styles/constants'

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

const ImageComponent = styled.img`
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    opacity: ${props => (props.lighten ? 0.5 : 1)};
  }
`

const Image = props => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 300) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  // />
  <ImageComponent
    src={props.src}
    className={props.lighten ? 'background-image' : ''}
    {...props}
  />
)
export default Image
