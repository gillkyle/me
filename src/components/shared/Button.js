import styled from '@emotion/styled'
import {
  TRANSITION,
  COLORS,
  FONT_WEIGHTS,
  BORDER_RADIUS,
} from '../../styles/constants'

const Button = styled.button`
  z-index: 2;
  color: ${COLORS.gold};
  transition: ${TRANSITION};
  padding: 10px 30px;
  border: none;
  border-radius: ${BORDER_RADIUS.button};
  outline: none;
  white-space: nowrap;
  font-weight: ${FONT_WEIGHTS.bold};
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
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
