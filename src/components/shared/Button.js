import styled from 'styled-components'
import { TRANSITION, COLORS, FONT_WEIGHTS } from '../../styles/constants'

const Button = styled.button`
  z-index: 2;
  color: ${COLORS.gold};
  transition: ${TRANSITION};
  padding: 10px 30px;
  border: none;
  outline: none;
  white-space: nowrap;
  font-weight: ${FONT_WEIGHTS.bold};
  &:active {
    outline: none;
    box-shadow: ${`0 0 0 1.5px ${COLORS.darkBlue}, 0 0 0 3px ${COLORS.white}`};
  }
  &:focus {
    outline: none;
    box-shadow: ${`0 0 0 1.5px ${COLORS.darkBlue}, 0 0 0 3px ${COLORS.white}`};
  }
`
export default Button
