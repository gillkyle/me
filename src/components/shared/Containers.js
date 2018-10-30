import styled from 'styled-components'

import { MEDIA_QUERIES, GRADIENT, MARGIN } from '../../styles/constants'

export const SectionContainer = styled.div`
  background: ${props => (props.backgroundFilled ? GRADIENT : 'white')};
  padding: ${MARGIN.default};
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding: ${MARGIN.small};
  }
`
export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  };
`
