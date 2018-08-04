import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export const Footer = () => {
  return (
    <FooterStyles className='footer'>
      <StyledSlatOuter className='footer-info__outer'>
        <StyledSlatInner className='footer-info__inner'>
        </StyledSlatInner>
      </StyledSlatOuter>

      <StyledSlatOuter className='footer-social__outer'>
        <StyledSlatInner className='footer-social__inner'>
        </StyledSlatInner>
      </StyledSlatOuter>

    </FooterStyles>
  )
}

const FooterStyles = styled.div`
  height: 400px;

  .footer-info {
    &__outer {
      height: 75%;
    }
    &__inner {
      height: 100%;
    }
  }
  .footer-social {
    &__outer {
      height: 25%%;
    }
    &__inner {
      height: 100%;
    }
  }
`
