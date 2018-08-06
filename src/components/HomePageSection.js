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
    <HomePageSectionStyles>
      <StyledSlatInner className='section__inner' id={slug}>
        <h2 className='section__title'>{title}</h2>
        <div className='section__content'>{children}</div>
      </StyledSlatInner>
    </HomePageSectionStyles>
  )
}

const HomePageSectionStyles = StyledSlatOuter.extend`
  box-shadow: rgba(32,32,32,0.05) 0px 0px 30px 0px;

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
