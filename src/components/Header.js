import React from 'react'

import { DesktopMenu } from './'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export const Header = () => {
  return (
    <HeaderStyles className='header__outer'>
      <StyledSlatInner className='header__inner'>
        <header className='header'>
          <a className='header__logo' href='#'/>
          <DesktopMenu />
        </header>
      </StyledSlatInner>
    </HeaderStyles>
  )
}

const HeaderStyles = StyledSlatOuter.extend`
  color: ${({theme}) => theme.brown};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;

  box-shadow: rgba(32,32,32,0.05) 0px 0px 30px 0px;

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
      background-image: url(/images/logo--cihuatan.png);
      background-color: ${({theme}) => theme.brown};
      background-position: left center;
      background-repeat: no-repeat;
    }
  }
`
