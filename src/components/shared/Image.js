import React from 'react'
import styled from 'styled-components'

import { MEDIA_QUERIES } from '../../styles/constants'

const ImageComponent = styled.img`
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    opacity: ${props => (props.lighten ? 0.5 : 1)};
  }
`

const Image = props => (
  <ImageComponent
    src={props.src}
    className={props.lighten ? 'background-image' : ''}
    style={{ marginBottom: 0 }}
    {...props}
  />
)
export default Image
