import styled from 'styled-components'

const StyledSlatInner = styled.div`
  margin: auto 30px;
  overflow: hidden;
  padding: 40px 0;
  @media (min-width: ${({theme}) => theme.large.start}) {
    margin: auto;
    width: 100%;
    max-width: ${({theme}) => theme.large.inner};
  };
  @media (min-width: ${({theme}) => theme.xlarge.start}) {
    width: 100%;
    max-width: ${({theme}) => theme.xlarge.inner};
  };
`

export default StyledSlatInner