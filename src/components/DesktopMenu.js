import React from 'react'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export const DesktopMenu = () => {
  return (
    <DesktopMenuStyles className='desktop-menu__outer'>
      <StyledSlatInner className='desktop-menu__inner'>
      </StyledSlatInner>
    </DesktopMenuStyles>
  )
}

const DesktopMenuStyles = StyledSlatOuter.extend`

  .desktop-menu {
    &__outer {
    }

    &__inner {
    }
  }
`
