import styled from 'styled-components'
import theme from './theme.js'

const StyledSlatOuter = styled.section`
  margin: auto;
  overflow: hidden;
  font-family: ${theme.baseFont};
  font-weight: normal;
  width: 100%;
  @media (min-width: ${theme.xlarge.inner}) {
    ${'' /* max-width: ${theme.xlarge.outer}; */}
  };
`

export default StyledSlatOuter