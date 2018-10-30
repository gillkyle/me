import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styles/constants'

const Text = styled.span`
  color: ${({ color }) => COLORS[color] || 'currentColor'};
  font-size: ${({ size }) => FONT_SIZES[size]};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ weight }) => FONT_WEIGHTS[weight]};
  font-family: ${({ font }) => font};
`

Text.propTypes = {
  children: PropTypes.any,
  uppercase: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(COLORS)),
  size: PropTypes.oneOf(Object.keys(FONT_SIZES)),
  weight: PropTypes.oneOf(Object.keys(FONT_WEIGHTS)),
}

Text.defaultProps = {
  size: 'medium',
  weight: 'normal',
  lineHeight: 1.25,
}

export default Text
