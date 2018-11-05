import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
  TRANSITION,
  MEDIA_QUERIES,
} from '../styles/constants'

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
  border-image: ${`linear-gradient(to left, ${COLORS.gold} 0%, ${
    COLORS.semiGold
  } 100%)`};
  border-image-slice: 1;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding: ${MARGIN.small};
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

const NavLinks = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding-right: 60px;
  }
`

const NavLink = styled(AnchorLink)`
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${COLORS.blue};
`

const NavLinkButton = styled.div`
  cursor: pointer;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  border-radius: 5px;
  padding: 10px 20px;
`

const Header = () => (
  <HeaderBar>
    <div />
    <NavLinks>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Work</NavLink>
      <NavLink href="#blog">Blog</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <NavLinkButton>Resume</NavLinkButton>
    </NavLinks>
  </HeaderBar>
)

export default Header
