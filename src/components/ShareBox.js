import React from 'react'
import styled from 'styled-components'

import { CONTACT_URLS, BRANDING } from '../lib/appConstants'

export const ShareBox = () => {
  return (
    <ShareBoxStyles>
      <span className='share-box__title'></span>
      <a
        className='share-box__link share-box__link__facebook'
        href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(decodeURIComponent(CONTACT_URLS.WEBSITE))}`}
        target='_blank'
        rel='noopener noreferrer'
      />
      <a
        className='share-box__link share-box__link__twitter'
        href={`https://twitter.com/share?url=${CONTACT_URLS.WEBSITE}&amp;text=${encodeURIComponent(BRANDING.SLOGAN)}&amp;hashtags=${BRANDING.HASHTAGS}`}
        target='_blank'
        rel='noopener noreferrer'
      />
    </ShareBoxStyles>
  )
}

const ShareBoxStyles = styled.div`
  width: 75%;
  margin-right: 7px;
  display: none;
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    display: none;
  }

  .share-box {
      &__link {
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        &__twitter {
          background-image: url(/svg/icon--twitter-red.svg);
        }

        &__facebook {
          background-image: url(/svg/icon--facebook-red.svg);
        }
    }
  }
`
