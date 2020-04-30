import React from 'react'
/** @jsx jsx */
import { jsx, css, Styled } from 'theme-ui'
import Header from './header'
import Image from '../../components/shared/Image'

import WorkRightSideBarSVG from '../../images/WorkRightSideBar.svg'
import WorkLeftSideBarSVG from '../../images/WorkLeftSideBar.svg'

const PostLayout = ({ children, ...props }) => (
  <Styled.root>
    <Header />
    <div sx={{ zIndex: -5 }}>
      <Image
        src={WorkLeftSideBarSVG}
        sx={{
          position: 'absolute',
          left: 0,
          zIndex: -6,
          '&': { opacity: [0.25, 0.5, 1] },
        }}
        lighten
      />
      <Image
        src={WorkRightSideBarSVG}
        sx={{
          position: 'absolute',
          right: 0,
          zIndex: -6,
          '&': { opacity: [0.25, 0.5, 1] },
        }}
        lighten
      />
      <div
        css={css({
          maxWidth: 620,
          margin: `0 auto`,
          px: 3,
          py: 4,
          '& .gatsby-resp-image-wrapper': {
            borderRadius: 10,
            marginLeft: `-6px !important`,
            marginRight: `-6px !important`,
            '& img': {
              borderRadius: 10,
            },
            '& span': {
              borderRadius: 10,
            },
          },
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)

export default PostLayout
