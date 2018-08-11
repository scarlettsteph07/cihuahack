import React, { Component } from 'react'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export class HomePageHeader extends Component {
  render() {
    return (
      <HomePageHeaderStyles className='home-page-header__outer'>
        <StyledSlatInner className='home-page-header__inner'>
          <div className='home-page-header__image'></div>
        </StyledSlatInner>
      </HomePageHeaderStyles>
    )
  }
}

const HomePageHeaderStyles = StyledSlatOuter.extend`
  height: 645px;
  box-shadow: ${({theme}) => theme.boxShadow};

  .home-page-header {
    &__outer {
    }

    &__inner {
      height: 100%;
      padding: 0px;
    }

    &__image {
      width: 100%;
      height: 100%;
      background-image: url(/svg/cover--with-logos.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`
