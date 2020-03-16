import React from 'react'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from '@emotion/styled'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
  TRANSITION,
  MEDIA_QUERIES,
} from '../styles/constants'

import Button from './shared/Button'
import resume from '../images/KyleGill-Resume.pdf'

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${COLORS['white']};
  height: 100px;
  padding: ${MARGIN.default};
  padding-top: 0px;
  padding-bottom: 0px;
  box-shadow: ${SHADOW};
  overflow-x: scroll;
  transition: ${TRANSITION};
  border-top: ${COLORS.gold} 4px solid;
  border-image: ${`linear-gradient(to left, ${COLORS.gold} 0%, ${COLORS.semiGold} 100%)`};
  border-image-slice: 1;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding: ${MARGIN.small};
    padding-left: 30px;
    padding-right: 30px;
  }
`

const NavLinks = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: auto;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    overflow-x: scroll;
  }
`

const NavLink = styled(AnchorLink)`
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${COLORS.blue};
  text-decoration: none;
`

const NavLinkButton = styled(Button)`
  cursor: pointer;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  padding: 10px 20px;
  transition: ${TRANSITION};
  &:hover {
    background-color: ${COLORS.lightBlue};
  }
  &:active {
    outline: none;
    box-shadow: ${`0 0 0 1.5px ${COLORS.white}, 0 0 0 3px ${COLORS.blue}`};
  }
  &:focus {
    outline: none;
    box-shadow: ${`0 0 0 1.5px ${COLORS.white}, 0 0 0 3px ${COLORS.blue}`};
  }
`

const Header = () => (
  <Styled.root>
    <HeaderBar>
      <div sx={{ '*+*': { ml: 3 } }}>
        <span sx={{ color: `muted` }}>Kyle Gill</span>
        <Link
          to="/"
          sx={{
            fontSize: 2,
            textDecoration: `none`,
            color: `primary`,
            fontWeight: `bold`,
          }}
        >
          Home
        </Link>
        <Link
          to="/blog"
          sx={{
            fontSize: 2,
            textDecoration: `none`,
            color: `primary`,
            fontWeight: `bold`,
          }}
        >
          Blog
        </Link>
      </div>
      <NavLinks>
        <a
          href="mailto:kylerobertgill@gmail.com"
          sx={{
            fontSize: 2,
            fontWeight: `bold`,
          }}
        >
          <NavLinkButton>Email Me</NavLinkButton>
        </a>
      </NavLinks>
    </HeaderBar>
  </Styled.root>
)

export default Header
