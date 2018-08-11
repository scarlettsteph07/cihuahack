// @flow
import React from 'react'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'

// TODO: fix linter parsing error
type Props = {
  title: string,
  slug: string,
  headerImage?: string,
  url? : string,
  children?: string,
}

export const HomePageSection = ({title, slug, children, headerImage, url}: Props) => {
  return (
    <HomePageSectionStyles id={slug} headerImage={headerImage}>
      <StyledSlatInner className='section__inner' id={slug}>
        <div className='section__header'>
          <h2 className='section__header__title'>{title}</h2>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <div className='section__header__image'/>
          </a>
        </div>

        <div className='section__content'>{children}</div>
      </StyledSlatInner>
    </HomePageSectionStyles>
  )
}

const HomePageSectionStyles = StyledSlatOuter.extend`
  border-bottom: solid 10px ${({theme}) => theme.bgGray};
  :target {
    display: block;
    padding-top: 90px;
    margin-top: -90px;
  }
  .section {
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__header {
      width: 20%;
      &__title {
        font-size: 35px;
        text-transform: capitalize;
        text-align: left;
        margin: 0px;
      }
      &__image {
        width: 250px;
        height: 250px;
        background-image: ${({headerImage}) => headerImage || ''};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &__content {
      width: 75%;
      text-align: left;
      color: ${({theme}) => theme.textPrimary};
    }
  }
`
