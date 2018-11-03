import styled from 'styled-components'
import { COLORS } from '../../styles/constants'

export const UList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columns}, minmax(140px, ${560 / props.columns}px))`};
  margin: 0;
`
UList.defaultProps = {
  columns: 2,
}

export const ListItem = styled.li`
  position: relative;
  padding-left: 25px;
  &:before {
    position: absolute;
    left: 0;
    content: '▹';
    color: ${props => COLORS[props.color || 'blue']};
    font-weight: 700;
  }
`
