// @flow
import React, { Component } from 'react'
import _ from 'lodash/fp'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import SectionsData from '../lib/data'
import { CONTACT_URLS } from '../lib/appConstants'

// TODO: fix linter parsing error
type Props = {
  handleOnClick: Function,
}
export class MobileMenu extends Component<Props> {
  render() {
    const { handleOnClick } = this.props
    return (
      <MobileMenuStyles>
        <StyledSlatInner className='mobile-menu__inner'>
          {
            _.map((section) =>
              <a
                key={section.id}
                className='mobile-menu__option'
                href={`${section.slug}`}
                target={section.slug.startsWith('#') ? '_self' : '_blank'}
                onClick={handleOnClick}
              >
                {section.title}
              </a>
            )(SectionsData)
          }
          <div className='mobile-menu__option mobile-menu__option__social'>
            <a
              href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20Cihuahack%20`}
              onClick={handleOnClick}
            >
              <div className='mobile-menu__social-media mobile-menu__social-media--email' />
            </a>
            <a
              href={CONTACT_URLS.FACEBOOK}
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleOnClick}
            >
              <div className='mobile-menu__social-media mobile-menu__social-media--facebook' />
            </a>
          </div>
        </StyledSlatInner>
      </MobileMenuStyles>
    )
  }
}

const MobileMenuStyles = StyledSlatOuter.extend`
  margin: 0px;
  @media (min-width: ${({ theme }) => theme.large.start}) {
    display: none;
  }

  .mobile-menu {
    &__inner {
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-flow: column;
      align-items: start;
    }

    &__option {
      width: 100%;
      height: 65px;
      border-top: solid;
      display: flex;
      align-items: center;
      padding-left: 30px;

      &__social {
        padding: 0;
        justify-content: space-around;
      }
    }

    &__social-media {
      border-top: 10px solid ${({theme}) => theme.transparent};
      border-bottom: 10px solid ${({theme}) => theme.transparent};
      padding: 15px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      &--email {
        background-image: url(/svg/icon--mail-red.svg);
      }

      &--facebook {
        background-image: url(/svg/icon--facebook-red.svg);
      }
    }
  }

`
