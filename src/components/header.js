import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import { COLORS, FONT_WEIGHTS, MARGIN, SHADOW } from '../styles/constants'

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
`

const NavLinks = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(6, auto);
  align-items: center;
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
      <NavLink>About</NavLink>
      <NavLink>Experience</NavLink>
      <NavLink>Work</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>Contact</NavLink>
      <NavLinkButton>Resume</NavLinkButton>
    </NavLinks>
  </HeaderBar>
)

export default Header
