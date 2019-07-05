import React from 'react'
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
  justify-content: flex-end;
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
    padding-left: 30px;
    padding-right: 30px;
  }
`

const NavLinks = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(6, auto);
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
  <HeaderBar>
    <NavLinks>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Work</NavLink>
      <NavLink href="#learning">Learning</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <a href={resume} download>
        <NavLinkButton>Resume</NavLinkButton>
      </a>
    </NavLinks>
  </HeaderBar>
)

export default Header
