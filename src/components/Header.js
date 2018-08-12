// @flow
import React, { Component } from 'react'

import { DesktopMenu, MobileMenu, ShareBox } from './'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

// TODO: fix linter parsing error
type Props = {}

type State = {
  mobileMenuShown: boolean,
}

export class Header extends Component<Props, State> {
  state = {
    mobileMenuShown: false,
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuShown: !this.state.mobileMenuShown,
    })
  }

  render() {
    return (
      <HeaderStyles
        className='header__outer'
        mobileMenuShown={this.state.mobileMenuShown}
      >
        <StyledSlatInner className='header__inner'>
          <header className='header'>
            <a className='header__logo' href='/' />
            <DesktopMenu />
            <div className='header__mobile-menu'>
              <ShareBox />
              <button
                className='header__mobile-menu__button'
                onClick={this.toggleMobileMenu}
              />
            </div>
          </header>
        </StyledSlatInner>
        {this.state.mobileMenuShown && <MobileMenu handleOnClick={this.toggleMobileMenu}/>}
      </HeaderStyles>
    )
  }
}

const HeaderStyles = StyledSlatOuter.extend`
  background: ${({theme}) => theme.white};
  color: ${({theme}) => theme.red};
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  position: fixed;
  z-index: 1000;
  box-shadow: ${({theme}) => theme.boxShadow};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__inner {
      padding: 0px;
    }

    &__logo {
      width: 200px;
      height: 65px;
      margin-left: -9px;
      background-image: url(/svg/logo--wordmark.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        height: 90px;
      }
    }

    &__mobile-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__button {
        width: 50px;
        height: 50px;
        border-radius: 3px;
        border: 2px solid ${({theme}) => theme.red};
        background-image: ${({mobileMenuShown}) => mobileMenuShown ? 'url(svg/icon--x-red.svg)' : 'url(svg/icon--hamburger-red.svg)'};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-size: 25px;
        @media (min-width: ${({ theme }) => theme.large.start}) {
          display: none;
        }
      }
    }
  }
`
