import React from 'react'

import { DesktopMenu } from './'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export const Header = () => {
  return (
    <HeaderStyles className='header__outer'>
      <StyledSlatInner className='header__inner'>
        <header className='header'>
          <a className='header__logo' href='/' />
          <DesktopMenu />
        </header>
      </StyledSlatInner>
    </HeaderStyles>
  )
}

const HeaderStyles = StyledSlatOuter.extend`
  background: ${({theme}) => theme.white};
  color: ${({theme}) => theme.red};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  position: fixed;
  z-index: 1000;

  box-shadow: ${({theme}) => theme.boxShadow};

  .header {
    display: flex;
    align-items: center;

    &__outer {

    }

    &__inner {
      padding: 0px;
    }

    &__logo {
      width: 146px;
      height: 90px;
      background-image: url(/images/logo--cihuahack.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`
