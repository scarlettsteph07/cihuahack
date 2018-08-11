import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import { CONTACT_URLS } from '../lib/appConstants'

export const Footer = () => {
  return (
    <FooterStyles className='footer'>
      <StyledSlatOuter className='footer-info__outer'>
        <StyledSlatInner className='footer-info__inner'>
        </StyledSlatInner>
      </StyledSlatOuter>

      <StyledSlatOuter className='footer-social__outer'>
        <StyledSlatInner className='footer-social__inner'>
          <div className='social-media-links'>
            Contáctanos en
            <a
              className='social-media social-media__facebook'
              href={CONTACT_URLS.FACEBOOK}
              target='_blank'
              rel='noopener noreferrer'
            />
            <a
              className='social-media social-media__twitter'
              href={CONTACT_URLS.TWITTER}
              target='_blank'
              rel='noopener noreferrer'
            />
            <a
              className='social-media social-media__email'
              href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20Cihuahack%20`}
              target='_top'
              rel='noopener noreferrer'
            />
          </div>
        </StyledSlatInner>
      </StyledSlatOuter>
    </FooterStyles>
  )
}

const FooterStyles = styled.div`
  height: 400px;
  color: ${({theme}) => theme.red};

  .footer-info {
    &__outer {
      height: 75%;
      box-shadow: ${({theme}) => theme.boxShadow};
    }
    &__inner {
      height: 100%;
    }
  }
  .footer-social {
    &__outer {
      height: 25%;
      box-shadow: ${({theme}) => theme.boxShadow};
    }
    &__inner {
      height: 100%;
    }
  }

  .social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    &__list {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
    }
  }

  .social-media {
    padding: 15px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      opacity: 0.5;
    }

    &__email {
      background-image: url(/svg/icon--email.svg);
    }

    &__twitter {
      background-image: url(/svg/icon--twitter.svg);
    }

    &__facebook {
      background-image: url(/svg/icon--facebook.svg);
    }
  }
`
