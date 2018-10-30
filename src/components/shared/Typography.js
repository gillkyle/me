import React from 'react'

import Text from './Text'

export const Heading = props => (
  <Text
    color={props.inverted ? 'white' : 'darkBlue'}
    size="huge"
    weight="bold"
    style={{ marginBottom: 25 }}
    {...props}
  >
    {props.children}
  </Text>
)
