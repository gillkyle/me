import styled from 'styled-components'
import { COLORS } from '../../styles/constants'

export const UList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columns || 2}, minmax(140px, 200px))`};
  margin: 0;
`
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
