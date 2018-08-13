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
  height: 300px;
  box-shadow: ${({theme}) => theme.boxShadow};
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
  }

  .home-page-header {
    &__outer {
    }

    &__inner {
      height: 100%;
      padding: 0px;
      margin: 0px;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin: auto;
      }
    }

    &__image {
      margin-top: 45px;
      width: 100%;
      height: 100%;
      background-image: url(/svg/cover--no-blue-lines.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin-top: 0;
      }
    }
  }
`
