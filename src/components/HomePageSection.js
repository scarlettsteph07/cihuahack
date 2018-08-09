// @flow
import React from 'react'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

// TODO: fix linter parsing error
type Props = {
  title: string,
  slug: string,
  children?: string,
}

export const HomePageSection = ({title, slug, children}: Props) => {
  return (
    <HomePageSectionStyles id={slug}>
      <StyledSlatInner className='section__inner' id={slug}>
        <h2 className='section__title'>{title}</h2>
        <div className='section__content'>{children}</div>
      </StyledSlatInner>
    </HomePageSectionStyles>
  )
}

const HomePageSectionStyles = StyledSlatOuter.extend`
  :target {
    display: block;
    padding-top: 90px;
    margin-top: -90px;
  }
  .section {
    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      width: 20%;
      font-size: 35px;
      text-transform: uppercase;
    }

    &__content {
      width: 60%;
      text-align: left;
    }
  }
`
