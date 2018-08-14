import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import { CONTACT_URLS } from '../lib/appConstants'

export const Footer = () => {
  return (
    <FooterStyles className='footer'>
      <StyledSlatOuter className='footer__contact__outer'>
        <StyledSlatInner className='footer__contact__inner'>
          <h2 className='footer__contact__title'>¿Preguntas?</h2>
          <div className='footer__contact__info'>
            <a
              className='footer__contact__info__logo footer__contact__info__logo__email'
              href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20Cihuahack%20`}
              target='_blank'
              rel='noopener noreferrer'
            />
            <span className='footer__contact__info__text'>
              Escríbenos a
              <a
                href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20Cihuahack%20`}>
                {CONTACT_URLS.EMAIL}
              </a>
            </span>
          </div>
          <div className='footer__contact__info'>
            <a
              className='footer__contact__info__logo footer__contact__info__logo__facebook'
              href={CONTACT_URLS.FACEBOOK}
              target='_blank'
              rel='noopener noreferrer'
            />
            <span className='footer__contact__info__text'>
            Síguenos en
              <a
                href={CONTACT_URLS.FACEBOOK}
                target='_blank'
                rel='noopener noreferrer'
              >
                {CONTACT_URLS.FACEBOOK_SHORT}
              </a>
            </span>
          </div>
        </StyledSlatInner>
      </StyledSlatOuter>

      <StyledSlatOuter className='footer__disclosure__outer'>
        <StyledSlatInner className='footer__disclosure__inner'>
          Este proyecto es financiado por el Public Diplomacy Innovation Fund
        </StyledSlatInner>
      </StyledSlatOuter>
    </FooterStyles>
  )
}

const FooterStyles = styled.div`
  height: 360px;

  .footer{
    &__contact {
      &__outer {
        height: 75%;
        background-color: ${({theme}) => theme.red};
        color: ${({theme}) => theme.white};
        display: flex;
      }

      &__inner {
        height: inherit;
        padding: 0;
        font-size: 16px;
        letter-spacing: 1.2px;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: flex-start;
        @media (min-width: ${({theme}) => theme.medium.start}) {
          font-size: 20px;
          letter-spacing: 1.5px;
        }
      }

      &__title {
        font-size: 35px;
        text-transform: capitalize;
        margin: 0px;
      }

      &__info {
        display: flex;
        align-items: flex-start;
        @media (min-width: ${({theme}) => theme.medium.start}) {
          align-items: center;
        }

        &__logo {
          width: 50px;
          height: 50px;
          margin-right: 15px;
          background-size: contain;
          background-repeat: no-repeat;
          &:after {
            content: '';
            position: absolute;
            width: inherit;
            height: inherit;
          }
          &:hover {
            background-color: white;
            border-radius: 25px;
          }

          &__email {
            background-image: url(/svg/icon--mail-white.svg);
            &:hover {
              background-image: url(/svg/icon--mail-red.svg);
            }
          }

          &__facebook {
            background-image: url(/svg/icon--facebook-white.svg);
            &:hover {
              background-image: url(/svg/icon--facebook-red.svg);
            }
          }
        }

        &__text {
          display: flex;
          flex-flow: column;
          align-items: flex-start;
          @media (min-width: ${({theme}) => theme.medium.start}) {
            flex-flow: row;
          }

          a {
            margin-left: 0px;
            color: inherit;
            text-decoration: none;
            border-bottom: solid 2px white;
            padding-bottom: 2px;
            @media (min-width: ${({theme}) => theme.medium.start}) {
              margin-left: 12px;
            }

            &:hover {
              background-color: ${({theme}) => theme.white};
              color: ${({theme}) => theme.red};
            }
          }
        }
      }
    }

    &__disclosure {
      &__outer {
        height: 25%;
        box-shadow: ${({theme}) => theme.boxShadow};
        color: ${({theme}) => theme.red};
      }

      &__inner {
        width: 80%;
        height: 100%;
        padding: 0;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-items: center;
      }
    }
  }
`
