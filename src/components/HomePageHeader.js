import React, { Component } from 'react'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export class HomePageHeader extends Component {
  render() {
    return (
      <HomePageHeaderStyles className='header__outer'>
        <StyledSlatInner className='header__inner'>
          <div className='header__image'></div>
        </StyledSlatInner>
      </HomePageHeaderStyles>
    )
  }
}

const HomePageHeaderStyles = StyledSlatOuter.extend`
  height: 645px;
  box-shadow: rgba(32,32,32,0.05) 0px 0px 30px 0px;

  .header {
    &__outer {
    }

    &__inner {
      height: 100%;
      padding: 0px;
    }

    &__image {
      width: 100%;
      height: 100%;
      background-image: url(/images/cihuahack.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`
