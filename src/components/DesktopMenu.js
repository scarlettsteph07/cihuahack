import React from 'react'
import _ from 'lodash/fp'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import SectionsData from '../lib/data'
import { CONTACT_LINKS } from '../lib/appConstants'

export const DesktopMenu = () => {
  return (
    <DesktopMenuStyles className='desktop-menu__outer'>
      <StyledSlatInner className='desktop-menu__inner'>
        <nav>
          <ul className='desktop-menu__nav-list'>
            <li><a className='nav-item' href='#inicio'>Inicio</a></li>
            {
              _.map((section) =>
                <li key={section.id}>
                  <a className='nav-item' href={`#${section.slug}`}>{section.title}</a>
                </li>
              )(SectionsData)
            }
            <li>
              <a
                className='nav-social-media nav-social-media__twitter'
                href={CONTACT_LINKS.TWITTER}
                target='_blank'
                rel='noopener noreferrer'
              /></li>
            <li>
              <a
                className='nav-social-media nav-social-media__facebook'
                href={CONTACT_LINKS.FACEBOOK}
                target='_blank'
                rel='noopener noreferrer'
              />
            </li>
          </ul>
        </nav>
      </StyledSlatInner>
    </DesktopMenuStyles>
  )
}

const DesktopMenuStyles = StyledSlatOuter.extend`
    nav {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: center;
    }

  .desktop-menu {
    &__outer {
    }

    &__inner {
      padding: 0px;
      display: flex;
    }

    &__nav-list {
      width: 100%;
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      padding: 0px;

      li {
        width: 100%;
        border-top: 10px solid ${({theme}) => theme.transparent};
        border-bottom: 10px solid ${({theme}) => theme.transparent};
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          border-top: 10px solid ${({theme}) => theme.red};
        }
      }
    }
  }

  a {
    width: 100%;
    height: 70px;
    line-height: 70px;
    padding: 15px;
    text-decoration: none;
    color: inherit;
  }

  .nav-social-media {
    border-top: 10px solid ${({theme}) => theme.transparent};
    border-bottom: 10px solid ${({theme}) => theme.transparent};
    padding: 15px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center;

    &__twitter {
      background-image: url(/svg/icon--twitter.svg);
    }

    &__facebook {
      background-image: url(/svg/icon--facebook.svg);
    }
  }
`
